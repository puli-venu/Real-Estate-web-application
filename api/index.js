import express from 'express';
import mongoose,{Mongoose} from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongodb atlas")
}
).catch((err)=>{
    console.log(err);
})

const app=express();

app.use(express.json());

//to get info from cookie and verify user and update details
app.use(cookieParser());



app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/listing",listingRouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});

app.listen(3000,()=>{
    console.log('server is runnning on port 3000');
})