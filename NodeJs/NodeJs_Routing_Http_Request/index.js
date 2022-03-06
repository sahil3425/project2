const http= require("http");

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
else{
res.end('Hello from the '+req.url.substr(1) +' page side Sahil');}
});
//
server.listen(8000,"127.0.0.1",()=>{
    console.log("port no. 8000");
});