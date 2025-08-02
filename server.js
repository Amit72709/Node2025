const http = require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>Hello Amit singh</h1>");
    resp.end('Hello');
}).listen(4800);