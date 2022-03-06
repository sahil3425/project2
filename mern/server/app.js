const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
require('./db/conn');
//const User= require('./model/userSchema');
app.use(express.json());

app.use(require('./router/auth'));
const PORT = process.env.PORT;


//MiddleWare
const middleware = (req,res,next)=>{
console.log("Hello Middleware");
next();
}



app.listen(PORT, () => {
  console.log(`Server is running at port number => ${PORT}`);
});
