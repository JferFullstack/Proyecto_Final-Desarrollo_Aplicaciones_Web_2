// backend/src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'; // Para hashear y comparar contraseñas
import jwt, { SignOptions } from 'jsonwebtoken'; // Para generar y verificar JSON Web Tokens (JWT)
import { User, UserRole } from '../models/User'; // Importa el modelo de Usuario y el Enum de Roles
import { Op } from 'sequelize'; // Importa el operador Op de Sequelize para consultas OR

// Importa Request y Response para poder extenderlos si es necesario
// Esto es para que TypeScript reconozca nuestra propiedad 'user' en req
// Aunque tenemos express.d.ts, a veces es necesario hacer esto para que se reconozca la extensión.
import { Request as ExpressRequest, Response as ExpressResponse, NextFunction } from 'express';


// Definición de una interfaz extendida para el Request
// Esto es un workaround para el problema de 'req.user'
// ¡IMPORTANTE! Exportamos esta interfaz para poder usarla en otros archivos (como authRoutes.ts)
export interface AuthenticatedRequest extends ExpressRequest {
  user?: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
}

// Obtiene la clave secreta y el tiempo de expiración del token desde las variables de entorno
const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta_para_desarrollo';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

/**
 * Controlador para registrar un nuevo usuario.
 * @param req Objeto de solicitud de Express.
 * @param res Objeto de respuesta de Express.
 */
export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  // Validación básica de los campos de entrada
  if (!username || !email || !password) {
    return res.status(400).json({
      message: 'Todos los campos son requeridos: usuario, email y contraseña'
    });
  }

  // Validación de la longitud mínima de la contraseña
  if (password.length < 8) {
    return res.status(400).json({
      message: 'La contraseña debe tener al menos 8 caracteres'
    });
  }

  try {
    // Verificar si ya existe un usuario con el mismo email o nombre de usuario
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

    // Hashea la contraseña antes de guardarla en la base de datos para seguridad
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crea un nuevo usuario en la base de datos
    const nuevoUsuario = await User.create({
      username,
      email,
      password: hashedPassword,
      role: UserRole.USER
    });

    // Genera un JSON Web Token (JWT)
    const token = jwt.sign(
      {
        id: nuevoUsuario.id,
        username: nuevoUsuario.username,
        email: nuevoUsuario.email,
        role: nuevoUsuario.role
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN } as SignOptions
    );

    // Prepara el objeto de usuario para la respuesta
    const usuarioRespuesta = {
      id: nuevoUsuario.id,
      username: nuevoUsuario.username,
      email: nuevoUsuario.email,
      role: nuevoUsuario.role,
      createdAt: nuevoUsuario.createdAt
    };

    // Envía una respuesta de éxito
    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: usuarioRespuesta
    });

  } catch (error: any) {
    console.error('Error en registro:', error);
    res.status(500).json({
      message: 'Error interno del servidor al registrar usuario',
      error: error.message
    });
  }
};

/**
 * Controlador para iniciar sesión de un usuario existente.
 * @param req Objeto de solicitud de Express.
 * @param res Objeto de respuesta de Express.
 */
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
      { expiresIn: JWT_EXPIRES_IN } as SignOptions
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

  } catch (error: any) {
    console.error('Error en inicio de sesión:', error);
    res.status(500).json({
      message: 'Error interno del servidor al iniciar sesión',
      error: error.message
    });
  }
};

/**
 * Middleware para proteger rutas que solo deben ser accesibles por administradores.
 * Verifica la validez del JWT y el rol del usuario.
 * Hemos tipado 'req' explícitamente como 'AuthenticatedRequest' aquí para resolver el error 'req.user'.
 * @param req Objeto de solicitud de Express (tipado como AuthenticatedRequest).
 * @param res Objeto de respuesta de Express.
 * @param next Función para pasar el control al siguiente middleware.
 */
export const adminMiddleware = async (req: AuthenticatedRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: 'Acceso no autorizado: Token no proporcionado'
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      username: string;
      email: string;
      role: UserRole;
    };

    if (decoded.role !== UserRole.ADMIN) {
      return res.status(403).json({
        message: 'Acceso prohibido: Se requieren privilegios de administrador'
      });
    }

    // Adjuntar información del usuario a la solicitud
    req.user = decoded; // Ahora TypeScript reconocerá 'user' debido a 'AuthenticatedRequest'
    next();

  } catch (error: any) {
    console.error('Error en middleware de admin:', error);
    res.status(401).json({
      message: 'Token inválido o expirado',
      error: error.message
    });
  }
};
