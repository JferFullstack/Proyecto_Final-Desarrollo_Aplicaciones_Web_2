// backend/src/routes/authRoutes.ts
import { Router, RequestHandler } from 'express';
import { register, login, adminMiddleware, AuthenticatedRequest } from '../controllers/authController';

const router = Router();


router.post('/register', register as RequestHandler);
router.post('/login', login as RequestHandler);
router.get('/admin-dashboard', adminMiddleware as RequestHandler, (req: AuthenticatedRequest, res) => {
  res.status(200).json({
    message: 'Bienvenido al panel de administrador, ' + req.user?.username,
    user: req.user 
  });
});


export default router; 