const mongoose = require('mongoose');

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
        // validate(value){
        //     if(value < 0){
        //         throw new Error('views count shuld not be negative')
        //     }
        // }
        validate:{
            validator:function(value){
            return value.length < 0
            }, message:"views are not be in negative"
        }
        //both validate methods are correct
    }, 
    date:{
        type:Date,
        default:Date.now
    },
});
const Playlist = new mongoose.model("mydata",playSchema);
