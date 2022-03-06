const express = require('express');
const app = express();
// app.get(route,callback) 
app.get("/",(req,res)=>{
res.send("<h1>hello from the express</h1>");
});
app.get('/about',(req,res)=>{
res.send("<h1>hello i m Sahil Rajput</h1>");

});
app.listen(8000,()=>{
    console.log("listening port at 8000");
});

