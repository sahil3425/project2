const mongoose = require('mongoose');
//connection creation
mongoose.connect("mongodb://localhost:27017/data",
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("done"))
.catch((err)=> console.log("error"));

//schema
//A mongoose schema defines the structure of the document,
//default values,validators,etc.
const playSchema = new mongoose.Schema({
    name:{//compolsary
        type:String,
        required:true},
    songtype:String,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
//A Mongoose model is a wrapper on the Mongoose schema . 
//A Mongoose Schema defines the sturucturee of the document,
//default values , validators,etc.,whereas a Mongoose model 
//provides an interface to the database for creating,querying,updating,deleting records,etc.

const Playlist = new mongoose.model("mydata",playSchema);

//create document
const createDocument = async () =>{
    try{
const myPlaylist1 = new Playlist({

    name:"Khariyat",
    songtype:"Sad",
    author:"Arjit Singh",
    active:true,
})

const myPlaylist2 = new Playlist({

    name:"Hamdard",
    songtype:"Sad",
    author:"Arjit Singh",
    active:true,
})

const myPlaylist3 = new Playlist({

    name:"Blue Eyes",
    songtype:"Rock",
    author:"Honey Singh",
    active:true,
})
const myPlaylist4 = new Playlist({

    name:"Sunny Sunny",
    songtype:"Rock",
    author:"Honey Singh",
    active:true,
})

// const result=await myPlaylist.save();//for saving one document
const result=await Playlist.insertMany([myPlaylist1,myPlaylist2,myPlaylist3,myPlaylist4]);//add more than one document
console.log(result);
}catch(err) {console.log("err => ",err);}
}
createDocument();

