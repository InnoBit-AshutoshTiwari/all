// var http=require('http');
// var url=require('url');

// http.createServer(function(req,res)
// {
//     res.writeHead(200,{'content-typw':'test/html'});
//     console.log(req.url);
//     var q=url.parser(req.url,true).query;
//     var txt=q.year+" "+q.month;
//     res.end(txt); 
// })

const http = require('http');

const hostname = '192.168.22.163';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ashutosh Tiwari\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

