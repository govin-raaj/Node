import mongoose from "mongoose"

const UserSchema=new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        fullName:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        avatar:{
            type:String,
        },
        coverImage:{
            type:String,
        },
        refreshToken:{
            type:String
        }
    },
    {timestamps:true}
);

export const User=mongoose.model("User",UserSchema)