import express from 'express';
import { registerUser, loginUser, showUser } from '../controllers/auth-controller';

const router = express.Router();

router.post('/register', registerUser);
router.get('/users', showUser);

export default router;