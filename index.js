import express from 'express';
import router from './Routes/Index.js':
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(( req, res, next)=>{
    console.log("Hi from the middleware!!")
    next();
})
// Connect to MongoDB Database
app.use("/api/v1", router)

mongoose.connect(process.env.MONGOURL).then(() => console.log("Database connected."))

app.listen(8000, ()=> console.log("App is running on port 8000."))