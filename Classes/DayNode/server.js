const http= require("http");

const server = http.createServer((req,res)=>{
    res.end('Hi');
})
server.listen(8080,()=>{
    console.log("Server is running");
})
/*fs path os http crypto events */