import mongoose from "mongoose";

//Connecting the Mongo with our aplication
const connectToMongo = async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log('MongoDB connection with success!');

    }catch(error){
        console.log('MongoDB connection failed.');
        process.exit(2);
    }
}

export default connectToMongo;