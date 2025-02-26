import mongoose from "mongoose";

const listingSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        bathrooms:{
            type:Number,
            required:true,
        },
        bedrooms:{
            type:Number,
            required:true,
        },
        parking:{
            type:String,
            required:true,
        },
        type:{
            type:String,//like rent or for sale
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        offer:{
            type:Boolean,
            required:true,
        },
        discountPrice:{
            type:Number,
        
        },
        regularPrice:{
            type:Number,
            required:true,
        },
        imageUrls:{
            type:Array,
            required:true,
        },
        userRef:{
            type:String,
            required:true
        },
    },{timestamps:true}
)

const Listing=mongoose.model('Listing',listingSchema);

export default Listing;