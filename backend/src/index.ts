import express from 'express';


import connectToMongo from './database/db';

//Env files
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
const PORT_FRONT = process.env.PORT_FRONT;

//Connect to the MongoDB database
connectToMongo();

//Starting express
const app = express();
app.use(express.json());

//Using CORS
import cors from 'cors';
app.use(cors());

//Routes
import authRoutes from './routes/router';
app.use('/api/auth', authRoutes);



app.listen(PORT, ()=>{
    console.log(`Server is now listening to PORT ${PORT}`);
})

