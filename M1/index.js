const fs=require('fs');
const http=require('http');
const url=require('url');

////////////////////////////////////////////////////////
//sync
// const text=fs.readFileSync('M1/input.txt','utf-8');
// console.log(text);

// const textout='this is what we found in the file '+text;
// fs.writeFileSync('M1/output.txt',textout);
// console.log('Output written to M1/output.txt');

//async

// fs.readFile('M1/file.txt','utf-8', (err, data)=> {
//     if (err) return  console.log("Error");

//     fs.readFile(`M1/${data}.txt`,'utf-8', (err , data2)=>{
//         console.log(data2);
//     });
// });

// console.log("reading file.....")

/////////////////////////////////////////////////////////


//server

const server=http.createServer((req,res)=>{
    console.log(req.url);
    
    if (req.url==='/' || req.url==='/overview'){
        res.end('This is the OVERVIEW');
    }else if (req.url==='/product'){
        res.end('This is the PRODUCT');
    }else{
        res.writeHead(404, {
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        });
        res.end('<h1>Page not found</h1>');
    }

});

server.listen(8000,'127.0.0.1',()=>{
    console.log("listening requests on port 8000");
});

