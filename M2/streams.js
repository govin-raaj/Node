const fs=require('fs');
const { STATUS_CODES } = require('http');
const server=require("http").createServer();

server.on("request",(req,res)=>{
    //soln 1
    // fs.readFile("./M1/input.txt",(err,data)=>{
    //     if (err) console.log(err);
    //     res.end(data);
    // });


    //soln 2 streams
    // const readable=fs.createReadStream("./M1/input.txt");
    // readable.on("data",chunk=>{
    //     res.write(chunk);
    // });
    // readable.on("end",()=>{
    //     res.end();
    // });
    // readable.on("error",err=>{
    //     console.log(err);
    //     res.STATUS_CODES=500;
    //     res.end("file not found");
    // });

    //soln 3 pipe
    const readable=fs.createReadStream("./M1/input.txt");
    readable.pipe(res);


});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening......");
});