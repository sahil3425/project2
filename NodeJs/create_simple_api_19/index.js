const http= require("http");
const fs = require('fs');
const data1 = fs.readFileSync(`${__dirname}/index.json`,"utf-8");
const server = http.createServer((req,res)=>{
// console.log(req.url);
if(req.url=='/'){
    res.end('Hello from the other front page Sahil');
}
else if(req.url=='/whatsapp')
{
    res.writeHead(404,{"content-type":"text/html"});
res.end('<h1>error page</h1>');
}
else if(req.url=='/userapi'){
// fs.readFile(`${__dirname}/index.json`,"utf-8",(err,data)=>{
//     const objectDataFirtName=JSON.parse(data);
//     console.log(objectDataFirtName);
// res.end(data);
// });
res.writeHead(200,{"content-type":"application/json"});
res.end(data1);
}
else{
res.end('Hello from the '+req.url.substr(1) +' page side Sahil');}
});
//
server.listen(8000,"127.0.0.1",()=>{
    console.log("port no. 8000");
});