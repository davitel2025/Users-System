import express from 'express';
import { registerUser, loginUser, showUser } from '../controllers/auth-controller';
import authMiddleware from '../middleware/auth-middleware';

const router = express.Router();


router.post('/register', registerUser);
router.get('/users', showUser);
router.post('/login', loginUser);

export default router;