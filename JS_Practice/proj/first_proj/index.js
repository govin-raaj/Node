
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



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let fictional=books.filter(book=> book.genre === 'Fiction');
console.log("Fictional Books: ", fictional);

let reducedBooks=books.reduce((acc,book)=>{
    if(book.publish < 1990){
        acc.push(book.title);
    }
    return acc;
}, []);

console.log("Books published before 1990: ", reducedBooks);


let latestEditions=books.map(book=>{
    return {
        title: book.title,
        latestEdition: book.edition
    }
});

console.log("Books with Latest Editions: ", latestEditions);
