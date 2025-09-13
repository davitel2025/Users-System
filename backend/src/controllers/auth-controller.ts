import User from "../models/User";
import cript from 'bcryptjs';

//Controller for register an user
export const registerUser = async(req : any, res : any)=> {

    try{
        const{username, email, password, role } = req.body;

        //Check if the user already exist in our database
        const checkExistentUser = await User.find({$or : [{username}, {email}]});
        if (checkExistentUser.length !==0){
            return res.status(400).json({
                success: false,
                message: 'User already exist either with same username or email'
            });
        }

        //encrypting the user's password
        const salt = await cript.genSalt();
        const hashedPassword = await cript.hash(password, salt);

        const newlyCreatedUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || 'user',
        });

        await newlyCreatedUser.save();

        if(newlyCreatedUser){
            res.status(201).json({
                success: true,
                message: 'User registered successfully!',
            });
        }else{
            res.status(400).json({
                success: false,
                message: 'Unable to register user! Please try later.',
            });
        };




    }catch(error){

        //Error in conection
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Some error occured! Please try again',
        });

    };
};

export const showUser = async(req: any, res: any)=> {

    try{
        const allUser = await User.find({});
        if (allUser.length !== 0 ){
            res.status(201).json({
                success: true,
                message: 'Users find with success!',
                user: allUser,
            });
        }else{
            res.status(400).json({
                success: false,
                message: "Couldn't find any user.",
            });
        };


    }catch(error){

        //Error in conection
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Some error occured! Please try again',
        });
    };

};

export const loginUser = async(req : any, res : any)=>{
    try{


    }catch(error){

        //Error in conection
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Some error occured! Please try again',
        });

    };
};

