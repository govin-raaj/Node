
let arr=[10,15,20,25,30];

function processArray(array){
    const double=array.map(value => value * 2);

    const filteredNos=array.filter((value=> value % 2 ===0));

    const sum=array.reduce((a,b)=> a+b);

    return{
        doubled: double,
        evens: filteredNos,
        totalSum: sum
    }
} 

let result=processArray(arr);
console.log("Original Array: ", arr);
console.log("Doubled Values: ", result.doubled);
console.log("Even Numbers: ", result.evens);
console.log("Sum of Elements: ", result.totalSum);  

