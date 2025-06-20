// backend/src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, UserRole } from '../models/User';
import { Op } from 'sequelize';

const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta_para_desarrollo';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  // Validación mejorada
  if (!username || !email || !password) {
    return res.status(400).json({ 
      message: 'Todos los campos son requeridos: usuario, email y contraseña' 
    });
  }

  if (password.length < 8) {
    return res.status(400).json({ 
      message: 'La contraseña debe tener al menos 8 caracteres' 
    });
  }

  try {
    // Verificar si el usuario ya existe
    const usuarioExistente = await User.findOne({
      where: {
        [Op.or]: [{ email }, { username }]
      }
    });

    if (usuarioExistente) {
      const campoConflictivo = usuarioExistente.email === email ? 'email' : 'usuario';
      return res.status(409).json({ 
        message: `El ${campoConflictivo} ya está registrado` 
      });
    }

    // Crear usuario con contraseña hasheada
    const nuevoUsuario = await User.create({
      username,
      email,
      password: await bcrypt.hash(password, 12), // Hash más seguro
      role: UserRole.USER // Rol por defecto
    });

    // Generar token JWT
    const token = jwt.sign(
      { 
        id: nuevoUsuario.id,
        username: nuevoUsuario.username,
        email: nuevoUsuario.email,
        role: nuevoUsuario.role
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Respuesta segura - nunca enviar la contraseña
    const usuarioRespuesta = {
      id: nuevoUsuario.id,
      username: nuevoUsuario.username,
      email: nuevoUsuario.email,
      role: nuevoUsuario.role,
      createdAt: nuevoUsuario.createdAt
    };

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: usuarioRespuesta
    });

  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ 
      message: 'Error interno del servidor al registrar usuario',
      error: error.message 
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ 
      message: 'Email y contraseña son requeridos' 
    });
  }

  try {
    // Buscar usuario incluyendo la contraseña hasheada
    const usuario = await User.scope('withPassword').findOne({
      where: { email }
    });

    if (!usuario) {
      return res.status(401).json({ 
        message: 'Credenciales incorrectas' 
      });
    }

    // Verificar contraseña
    const contraseñaValida = await bcrypt.compare(password, usuario.password);
    
    if (!contraseñaValida) {
      return res.status(401).json({ 
        message: 'Credenciales incorrectas' 
      });
    }

    // Generar nuevo token
    const token = jwt.sign(
      {
        id: usuario.id,
        username: usuario.username,
        email: usuario.email,
        role: usuario.role
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Respuesta segura
    const usuarioRespuesta = {
      id: usuario.id,
      username: usuario.username,
      email: usuario.email,
      role: usuario.role
    };

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,
      user: usuarioRespuesta
    });

  } catch (error) {
    console.error('Error en inicio de sesión:', error);
    res.status(500).json({ 
      message: 'Error interno del servidor al iniciar sesión',
      error: error.message 
    });
  }
};

// Controlador para rutas de administrador
export const adminMiddleware = async (req: Request, res: Response, next: Function) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        message: 'Acceso no autorizado: Token no proporcionado' 
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    if (decoded.role !== UserRole.ADMIN) {
      return res.status(403).json({ 
        message: 'Acceso prohibido: Se requieren privilegios de administrador' 
      });
    }

    // Adjuntar información del usuario a la solicitud
    req.user = decoded;
    next();

  } catch (error) {
    console.error('Error en middleware de admin:', error);
    res.status(401).json({ 
      message: 'Token inválido o expirado',
      error: error.message 
    });
  }
};