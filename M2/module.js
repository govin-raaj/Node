// const calc=require('./moduleCalc');

// const myCalc=new calc();
// console.log(myCalc.add(5, 3));
// console.log(myCalc.subtract(5, 3));

// console.log(calc.add(10, 4));
// console.log(calc.subtract(10, 4));

const {add, subtract}=require('./moduleCalc');

console.log(add(20, 8));
console.log(subtract(20, 8));