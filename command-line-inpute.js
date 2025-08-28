const http=require('http');

const arg= process.argv;
console.log("------",arg[2]);
const port=arg[2];
http.createServer((req,resp) =>{
resp.write("testing inpute from command");
resp.end();
}).listen(port)
