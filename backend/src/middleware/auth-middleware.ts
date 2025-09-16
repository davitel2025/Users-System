import  express from "express";
import jwt from 'jsonwebtoken';


const authMiddleware = (req : any, res : any, next : any)=>{
    
    const authHeader = req.headers["authorization"];
    console.log(authHeader);

    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({
            success: false,
            message: 'Acess denied. No token provided. Please login to continue',
        });
    }

    //decide this token
    try{

        //Make a if statement about the JWT password
        const key = process.env.JWT_SECRET_KEY as string;
        const decodedTokenInfo = jwt.verify(token, key);
        console.log(decodedTokenInfo);

        //The requisition of userInfo will receive the decoded key
        req.userInfo = decodedTokenInfo;
        console.log(req.userInfo);
        next();

    }catch(error){
        
        return res.status(500).json({
            success: false,
            message: 'Acess denied. No token provided. Please login to continue',
        });

    }

    next(); 
};

export default authMiddleware;