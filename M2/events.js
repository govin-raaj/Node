const EventEmitter=require("events");
const http=require("http");

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

const myemitter=new Sales();

myemitter.on("newSale", ()=>{
    console.log("new sale");
});

myemitter.on("newSale",(stock)=>{
    console.log(`${stock} items are left in the stock.`);
});

myemitter.emit("newSale",10);

///////////////////////////////////////

const server=http.createServer();

server.on("request",(req,res)=>{
    console.log("Req received ");
    res.end("req received");
});

server.on("request",(req,res)=>{
    console.log("Another Req received ");
   
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening......");
});
