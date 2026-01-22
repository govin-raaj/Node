// const club = {
//   name: "Arsenal",
//   yearFounded: "1989",
//   details() {
//     return `Hey, ${this.name} ${this.yearFounded}`;
//   },
// };

// const full = club.details();

// console.log(club.details());
// console.log("-------------")
// console.log(full); 

const hello1=function (){
    const name="Govin";
    console.log(this);

}
hello1();

function hello2(){
    const name="Govin";
    console.log(this);
}hello2();

const hello=()=>{
    const name="Govin";
    console.log(this);
}
console.log(this);
hello();


// function greet(name = "Guest") {
//   return `Hello, ${name}! Welcome to our website.`;
// }
// console.log(greet("Govin"));

// let sq= x => x * x;
// console.log("square -- ",sq(3));

// (function(){
//   console.log("IIFE executed");
// })();

// ((x,y)=>{
//   console.log("IIFE with params -- "+ (x+y));
// })(5,7);

// function square(n,squareFn){
//   return squareFn(n);
// }

// let res=square(4,sq);
// console.log("callback square -- ",res);

// function hello(name){
//   return function(age){
//     return `Hello ${name}, you are ${age} years old.`;
//   }
// }
// let greetFunc=hello("Govin");
// console.log(greetFunc(22));


// let arr=[1,2,3,4,5];
// let a=arr.map(value=>{
//   return value * 2;
// });
// console.log(a);

// const sq= (x) => x * x;
// let b=arr.map(sq);
// console.log(b);

// let filtered=arr.filter(value=>{
//   return value > 3;
// });
// console.log(filtered);

// let r=arr.reduce((a,b)=>{
//   return a+b;
// })

// console.log("reduce -- ",r);

// function details(name, college) {
//   console.log("Name: ",name);
//   console.log("College: ",college);
//   return (...marks)=>{
//     console.log("Top 5 Sub Marks: ",marks);
//     console.log("Average Marks: ",marks.reduce((a,b)=>a+b)/marks.length);
//   }
// }

// let res = details("Govin", "Vips");
// res(85, 90, 95, 80, 75);



// let square1 = (x) => x * x;
// console.log("square1 -- ",square1(3));
// function myFunction2(w) {
//     let square3 = (x) => x * x;
//     console.log("Try myFunction.square -1-",square3(4));
//     let myFunction4 = (w) => {
//     function square5(x) {return  x * x}; // this is giving undefine why? coz u didnt return anything
//     //let square5 = (x) =>  x * x;
//     console.log("Try myFunction.square -2-",square5(4));
//         return square5(5);
//     }
//   console.log("Try myFunction -3-",myFunction4(10));
//   return square3(5);
// } 
// console.log("Try myFunction -4-",myFunction2(10));

 