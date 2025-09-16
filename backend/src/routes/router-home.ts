import express from 'express';
import { Router } from 'express';
import authMiddleware from '../middleware/auth-middleware';

const router = Router();

router.get('/welcome', authMiddleware, (req : any, res: any)=>{

    const {userName, userId, role} = req.userInfo;

    res.json({
        message: 'Welcome to the home page',
        user: {
            _id: userId,
            userName,
            role,
        }
    });

});

export default router;