import mongoose from "mongoose"

const UserSchema=new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        avatar:{
            type:String,
        }
    },
    {timestamps:true}
);

export const User=mongoose.model("User",UserSchema)