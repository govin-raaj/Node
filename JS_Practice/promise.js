const promiseOne=new Promise(function (resolve,reject){
    setTimeout(()=>{
        console.log("hello promise one ")
        resolve()
    },1000);
})
promiseOne.then(()=>console.log("promise one consumed")).catch((e)=>console.log(e));

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("hello promise two ")
        resolve()
    },2000);
}).then(()=>console.log("promise two consumed"))

const promiseThree=new Promise(function(resolve,reject){
    
    setTimeout(()=>{
        resolve({username:"govin",age:22})
    },2000);
})
promiseThree.then((data)=>console.log(data))


const promiseFOur=new Promise(function(resolve,reject){
    setTimeout(function(){
        let er=false;
        if(!er){
            resolve({username:"raaj",age:22})
        }else{
            reject('error')
        }
    },1000);
})
promiseFOur.then((data)=>{console.log(data.username)}).catch((e)=>console.log(e))