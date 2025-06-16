// backend/src/routes/auth.ts
import { Router, RequestHandler } from 'express'; 
import { register, login } from '../controllers/authController';

const router = Router();

// Aquí forzamos la conversión a RequestHandler
router.post('/register', register as RequestHandler); 
router.post('/login', login as RequestHandler);       

export default router;