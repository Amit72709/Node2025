const http = require('http');

const userData= [
    {
        name: 'amit',
        age: 30,
        email: 'makhana2gmail.com'
    },
        {
        name: 'dilip',
        age: 40,
        email: 'majffa2gmail.com'
    },
        {
        name: 'raj',
        age: 20,
        email: 'kjjd2gmail.com'
    }
]

http.createServer((req,resp)=>{
    resp.setHeader("Content-Type",'application/json')
    resp.write(JSON.stringify(userData));
     resp.end();

}).listen(9800);