const fs=require('fs');
const crypto=require('crypto');

const start=Date.now();
process.env.UV_THREADPOOL_SIZE=2;

setTimeout(()=> console.log("Timer 1"),0);
setImmediate(()=>console.log('Immediate 1'));

fs.readFile("../M1/input.txt",()=>{
    console.log("I/O");
    console.log("-----------------------");

    setTimeout(()=>console.log("T2"),0);
    setTimeout(()=>console.log("T3"),4000);
    setImmediate(()=>console.log("I2"));

    process.nextTick(()=>console.log("Process tick"));

    // crypto.pbkdf2s("password","salt",1000,1024,"sha512",()=>{
    //     console.log(Date.now()-start,"Password encrypted 1");
    // });
    // crypto.pbkdf2("password","salt",1000,1024,"sha512",()=>{
    //     console.log(Date.now()-start,"Password encrypted 2");
    // });
    //  crypto.pbkdf2("password","salt",1000,1024,"sha512",()=>{
    //     console.log(Date.now()-start,"Password encrypted 3");
    // });
    //  crypto.pbkdf2("password","salt",1000,1024,"sha512",()=>{
    //     console.log(Date.now()-start,"Password encrypted 4");
    // });

    crypto.pbkdf2Sync("password","salt",1000,1024,"sha512");
    console.log(Date.now()-start,"Password encrypted");

    crypto.pbkdf2Sync("password","salt",1000,1024,"sha512");
    console.log(Date.now()-start,"Password encrypted");

    crypto.pbkdf2Sync("password","salt",1000,1024,"sha512");
    console.log(Date.now()-start,"Password encrypted");

    crypto.pbkdf2Sync("password","salt",1000,1024,"sha512");
    console.log(Date.now()-start,"Password encrypted");




});