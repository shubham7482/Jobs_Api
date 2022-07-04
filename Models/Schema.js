import mongoose from "mongoose";

const Models=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Age:{
        type:Number,
        required:true
    },
    Degree:{
        type:String,
        required:true,
        trim:true
    },
    Job:{
        type:String,
        required:true
    },
    Experience:[
        {
            Experience:{
                type:Number,
                required:true
            },
            Company:{
                type:String,
                required:true
            },
            Salary:{
                type:Number,
                required:true
            },
            From:{
                type:Date,
                required:true
            },
            To:{
                type:Date,
                required:true
            }
        }
    ]

})
const schema=mongoose.model('model',Models)
export default schema