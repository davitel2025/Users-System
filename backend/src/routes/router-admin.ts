import express from 'express';
import { Router } from 'express';
import authMiddleware from '../middleware/auth-middleware';
import isAdminUser from '../middleware/admin-middleware';

const router = Router();

router.get('/welcome', authMiddleware, isAdminUser, (req, res)=>{
    res.json({
        message: 'Welcome to the admin page',
    });


});

export default router;