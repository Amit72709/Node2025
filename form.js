// const http=require('http');

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{"content-type": 'text/html'})

//     if(req.url=='/'){
//     resp.write(`
//     <form action="/submit" method='post'>
//     <input type='text' placeholder="enter the name " name="name" />
//     <input type="text" placeholder="enter the email" name="email" />
//     <button>Submit</button>
//     </form>
//     `)
//     }
//     else if(req.url == '/submit'){
//         resp.write('<h3>Form submitted</h3>')
//     }
//     resp.end();
// }).listen(5400)

const http = require("http");
const fs = require("fs");
const queryString= require('querystring');

http.createServer((req, resp) => {
    fs.readFile("html/form.html", "utf-8", (err, data) => {
    
      if (err) {
          resp.writeHead(500, { "content-type": "text/plain" });
        resp.writable("internal server error");
        resp.end();
        return;
      }
          resp.writeHead(200, { "content-type": "text/html" });
      if (req.url == "/") {
        
        resp.write(data);
      } else if (req.url == "/submit") {
        let databody=[];
        req.on('data',(chunk)=>{
              databody.push(chunk);
        })
        req.on('end',()=>{
            let rawdata= Buffer.concat(databody).toString();
            let readableData = queryString.parse(rawdata);
            console.log(readableData);
        })
        resp.write("<h3>Form submitted</h3>");
      }
     resp.end();
    });

  })
  .listen(5400);
