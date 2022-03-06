const express = require('express');
const app = express();
app.get("/",(req,res)=>{
res.send("<h1>My Home Page</h1>")
});
app.get("/about",(req,res)=>{
    res.status(200).send("<h1>My About Page</h1>")
});
app.get("/temp",(req,res)=>{
    // res.send("<h1>My Temp Page</h1>");
    res.send([{//add object on web page instaed of res.send you can write res.json also
        id:1,
        name:"Sahil"
    },{//add object on web page
        id:1,
        name:"Sahil"
    },{//add object on web page
        id:1,
        name:"Sahil"
    }]);
});
// The methods are identical when an object or array is passes , but res.json() will also convert non-objects,such as null and undefine which are not valid JSON.
app.get("/contact",(req,res)=>{
    res.write("<h1>My Contact Page</h1>");//another way
    res.send();
});

app.listen(8000,()=>{
    console.log("port 8000");
})