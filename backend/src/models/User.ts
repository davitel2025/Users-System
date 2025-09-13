import mongoose from "mongoose";


//User Model
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'owner'],
        default: 'user',
    },


}, {timestamps: true});

//Exporting the model
const User = mongoose.model('User', UserSchema);;
export default User;
