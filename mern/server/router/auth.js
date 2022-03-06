const express =require('express');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('../db/conn');
const User  = require('../model/userSchema');
const middleware = (req,res,next)=>{
    console.log("Hello Middleware");
    next();
    }

router.get("/", (req, res) => {
    res.send("<h1>Hello World from router js</h1>");
  });
  router.get("/about",middleware, (req, res) => {
    res.cookie("jwttoken",'Sahil Contact');
    res.send("<h1>Hello World from about me</h1>");
  });
  router.get("/contact", (req, res) => {
    res.cookie("Test",'Sahil Contact');
    res.send("<h1>Hello World from contact</h1>");
  });
  router.get("/signin", (req, res) => {
    res.send("<h1>Hello World from sign in page</h1>");
  });
  router.get("/register", (req, res) => {
    res.send("<h1>Hello World from registration page</h1>");
  });


router.post('/register',async (req,res)=>{
const {name,email,phone,password,work,cpassword} = req.body;
if(!name|| !email|| !phone|| !password|| !work||!cpassword){
  return res.status(422).json({error:"fill all the data"});
}
try{
  const userExist = await User.findOne({email:email});
  if(userExist){
    return res.status(422).json({error:"email already exist"});
  }else if(password !=cpassword){
    return res.status(422).json({error:"password not matched"});
  }
else{
    const user = new User({name,email,phone,work,password,cpassword});
console.log("in auth save");
    const  userRegister=await user.save();
    if(userRegister){
      res.status(201).json({message:"user registered successfully"});
    }}
    }catch(err){
  console.log("err => ",err);
}

});

//login route
router.post('/signin',async (req,res)=>{
  // console.log(req.body);
  // res.json({message:"awesome"});
  try{
const {email,password} = req.body;
if(!email||!password){
  return res.status(400).json({error:"plz fill the data"});
}

const userLogin =await User.findOne({email:email});
if(!userLogin){
  return res.status(400).json({error:"invalid authentication"});
}
else{
  const isMatch = await bycrypt.compare(password,userLogin.password);
  if(isMatch){
    const token =await userLogin.genertateAuthToken();
    res.cookie("jwttoken",token),{
      expires:new Date(Date.now()+2592000000),
      httpsOnly:true
    };
  res.status(200).json({message:"signin successfull"});}
  else{
  return res.status(400).json({error:"invalid authentication"});
  }
}
  }catch(err){
    console.log(err);
  }
})

  module.exports = router;