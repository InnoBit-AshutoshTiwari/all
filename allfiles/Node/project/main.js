var http=require('http');
var path=require('path');
var fs=require('fs');

const hostname='127.0.0.1';
const port=8080;

const server=http.createServer((req,res)=>
{
    console.log('ashu');
    console.log(req.header);
    console.log('request for'+req.url+'by method'+req.method);
    
    if(req.method=='GET')
    {
        var fileURL;
        if(req.url=='/')
        {
            fileURL='/home.html';
            var filePath=path.resolve('./html'+fileURL);
            console.log(filePath);
            console.log(typeof(filePath));

            const fileExt=path.extname(filePath);
            

           if(fileExt=='.html')
            {
                fs.exists(filePath,(exists)=>
                {
                    if(!exists)
                    {
                    res.stateCode=440;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1>Error 404 :'+fileURL+'Not Found</h1></body></html>');   
                    }

                    res.statusCode=200;
                    res.setHeader('Content-Type','text/html');
                    fs.createReadStream(filePath).pipe(res);
                });
            }
            else{
            res.statusCode=200;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1>Error 404 :'+fileURL+'Not Found</h1></body></html>');
            }
        }
        else{
            fileURL=req.url;
            res.statusCode=440;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1>Error 404 :'+fileURL+'Page Not Found!</h1></body></html>');
        }

    }
    else{
    res.statusCode=404;
    res.setHeader('Content-Type','text/html');
    res.end('Method is not allowed!');
    }
    
    
    
    

});

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port} port number`)
});