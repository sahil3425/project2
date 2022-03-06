//The http.createSrver() method includes request and response parameter which is supplies by Node.js
//The request object can be used to get information about the current  HTTP request.
//e.r.,url,request header,and data.
//The response object can be used to send a response for a current HTTP request.
//if the response from the HTTP server is supposed to be displayed as HTML,
//you should include an HTTP header with the correct content type:
const http= require("http");
const server = http.createServer((req,res)=>{
res.end('Hello from the other side');
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("port no. 8000");
});