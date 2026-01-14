const fs=require('fs');
const text=fs.readFileSync('M1/input.txt','utf-8');
console.log(text);

const textout='this is what we found in the file '+text;
fs.writeFileSync('M1/output.txt',textout);
console.log('Output written to M1/output.txt');

