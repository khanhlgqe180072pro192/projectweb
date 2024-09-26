const http=require('http');
const hostname = 'localhost';//127.0.01
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('content-Type', 'text/plain')
    res.end('Hello World');
});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});