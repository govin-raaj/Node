import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    degree:{
        type:String,
        required:true,
    },
    experieceInYears:{
        type:Number,
        default:0,
    },
    worksInHospital:{
        type:mongoose.Schema.Types.ObjectId,
        red:"Hospital"
    }
},{timestamps:true})

export const doctor=mongoose.model("Doctor",doctorSchema);