const http = require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>Hello Amit singh</h1>");
    resp.write("like a man and ");
    resp.end('Hello');
}).listen(4800);