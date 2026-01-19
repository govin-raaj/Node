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