
import { Router, Request, Response } from 'express';
import User from '../models/User';
import * as jwt from 'jsonwebtoken';
import { Op } from 'sequelize'; // Para operadores de Sequelize como OR

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_dev_key'; // Usar una fallback en dev, pero el .env es el principal

// POST /api/auth/register
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  // Validación básica
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son requeridos.' });
  }

  try {
    // Verificar si el usuario o email ya existen
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ username: username }, { email: email }]
      }
    });

    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(409).json({ message: 'El nombre de usuario ya está en uso.' });
      }
      if (existingUser.email === email) {
        return res.status(409).json({ message: 'El correo electrónico ya está registrado.' });
      }
    }

    // Crear el nuevo usuario
    const newUser = await User.create({ username, email, password });

    // Generar un token JWT (JSON Web Token)
    const token = jwt.sign(
      { id: newUser.id, username: newUser.username, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '1h' } // El token expira en 1 hora
    );

    // No enviar el password hasheado al frontend
    const userResponse = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    };

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: userResponse
    });

  } catch (error: any) {
    console.error('Error en el registro:', error);
    // Errores de validación de Sequelize, etc.
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'El usuario o email ya existen.' });
    }
    res.status(500).json({ message: 'Error interno del servidor al registrar usuario.', error: error.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body; // Podemos usar email o username para login

  // Validación básica
  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son requeridos.' });
  }

  try {
    // Buscar al usuario por email (o username, según lo que decidas usar para login)
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    // Comparar la contraseña ingresada con la contraseña hasheada
    const isMatch = await user.isValidPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    // Generar un token JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // No enviar el password hasheado al frontend
    const userResponse = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,
      user: userResponse
    });

  } catch (error: any) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor al iniciar sesión.', error: error.message });
  }
});

export default router;