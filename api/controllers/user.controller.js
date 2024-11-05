import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import User from '../models/user.model.js';
import Listing from '../models/listing.model.js';

const test=(req,res)=>{
    res.json({
        "message":"Api is working"
    })
}

export const updateUser=async (req,res,next)=>{
    if(req.user.id!==req.params.id){
        return next(errorHandler(401,'You can only update your own account'))
    }
    try {
        if(req.body.password)
        {
            req.body.password=bcryptjs.hashSync(req.body.password,10);
        }

        const updatedUser=await User.findByIdAndUpdate(req.params.id,{ //here updated user name diff from function updateUser
            $set:{
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar,
            }
        },{new:true})//here new means update user with new details otherwiswe no update will happen

        const {password,...rest}=updatedUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}

export const deleteUser=async (req,res,next)=>{
    if(req.user.id!==req.params.id) return next(errorHandler(401,'you can only delete your own account'));
    try{
        await User.findByIdAndDelete(req.params.id)
        res.clearCookie('access_token');
        res.status(200).json('user account deleted successfully');
    }catch(error)
    {
        next(error)
    }
}

export const getUserListings=async (req,res,next)=>{
    if(req.user.id===req.params.id){
        try{
            const listings=await Listing.find({userRef:req.params.id});
            res.status(200).json(listings);
        }catch(err){
            next(err)
        }
    }else{
        return next(errorHandler(401,'You can only view your own listings'))
    }
}

export default test