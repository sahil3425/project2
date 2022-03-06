const express = require('express');
const app = express();
const path = require('path');
// app.get(route,callback) 
const staticPath = path.join(__dirname,"../public");
//builtin middleware
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
res.send("<h1>hello from the express</h1>");
});
app.get('/about',(req,res)=>{
res.send("<h1>hello i m Sahil Rajput</h1>");
});
app.listen(8000,()=>{
    console.log("listening port at 3000");
});