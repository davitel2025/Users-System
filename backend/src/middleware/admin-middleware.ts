
const isAdminUser = (req : any, res : any, next : any)=>{

    if(req.userInfo.role !== 'admin'){
        return res.status(403).json({
            success: false,
            message: 'Access denied! Admin rights required!'
        });
    };

    next();
};

export default isAdminUser;