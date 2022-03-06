const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect("mongodb://localhost:27017/data",
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("done"))
.catch((err)=> console.log("error"));

const playSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true 
         },
    songtype:String,
    author:String,
    active:Boolean,
    views:{
        type:Number,
    }, 
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
           if(!validator.isEmail(value)){
               throw new Error("Invalid Email");
           }
        }

    },
    date:{
        type:Date,
        default:Date.now
    },
});
const Playlist = new mongoose.model("mydata",playSchema);
