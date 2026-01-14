const fs=require('fs');

//sync
// const text=fs.readFileSync('M1/input.txt','utf-8');
// console.log(text);

// const textout='this is what we found in the file '+text;
// fs.writeFileSync('M1/output.txt',textout);
// console.log('Output written to M1/output.txt');

//async

fs.readFile('M1/file.txt','utf-8', (err, data)=> {
    if (err) return  console.log("Error");

    fs.readFile(`M1/${data}.txt`,'utf-8', (err , data2)=>{
        console.log(data2);
    });
});

console.log("reading file.....")
