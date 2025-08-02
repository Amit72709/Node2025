const http = require('http');

const age=20;

http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.write("<h2>Hello Amit singh</h2>");
    resp.write(`
        <html>
        <head>
        <title>Node js</title>
        </head>
        <body>
        <h1>Amit singh</h1>
        <h2>from bihar</h2>
        <h3>`+age+`</h3>
        <h3>`+new Date()+`</h3>
        </body>
        </html>
        `);
    resp.end();
    // process.exit();
}).listen(4800);