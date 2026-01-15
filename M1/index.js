const fs=require('fs');
const http=require('http');
const url=require('url');

////////////////////////////////////////////////////////
//sync
// const text=fs.readFileSync('M1/input.txt','utf-8');
// console.log(text);

// const textout='this is what we found in the file '+text;
// fs.writeFileSync('M1/output.txt',textout);
// console.log('Output written to M1/output.txt');

//async

// fs.readFile('M1/file.txt','utf-8', (err, data)=> {
//     if (err) return  console.log("Error");

//     fs.readFile(`M1/${data}.txt`,'utf-8', (err , data2)=>{
//         console.log(data2);
//     });
// });

// console.log("reading file.....")

/////////////////////////////////////////////////////////


//server
const replaceTemp=(temp,product)=>{
    let output=temp.replace(/{%ProductName%}/g,product.productName);
    output=output.replace(/{%Image%}/g,product.image);
    output=output.replace(/{%Description%}/g,product.description);
    output=output.replace(/{%ProductNutrients%}/g,product.nutrients);
    output=output.replace(/{%Quantity%}/g,product.quantity);
    output=output.replace(/{%Price%}/g,product.price);
    output=output.replace(/{%From%}/g,product.from);
    output=output.replace(/{%ID%}/g,product.id);
    
    if(!product.organic) output=output.replace(/{%Not_Organic%}/g,'not-organic');

    return output;

}
const tempOverview=fs.readFileSync(`${__dirname}/templates/overview.html`,'utf-8');
const tempProduct=fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8');
const tempCard=fs.readFileSync(`${__dirname}/templates/card.html`,'utf-8');
const data=fs.readFileSync(`${__dirname}/data.json`,'utf-8');
const dataobj=JSON.parse(data);

const server=http.createServer((req,res)=>{
    const {query,pathname}=url.parse(req.url,true);
    
    if (pathname==='/' || pathname==='/overview'){
        res.writeHead(200,{'content-type':'text/html'});

        const cardhtml=dataobj.map(el=> replaceTemp(tempCard,el)).join('');
        const output=tempOverview.replace('{%Product_Card%}',cardhtml);

        res.end(output);

    }else if (pathname==='/product'){
        res.writeHead(200,{'content-type':'text/html'});
        const product=dataobj[query.id];
        const output=replaceTemp(tempProduct,product);
        res.end(output);

    }else if (pathname==='/api'){
        res.writeHead(200,{'content-type':'application/json'});
        res.end(data);
    }else{
        res.writeHead(404, {
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        });
        res.end('<h1>Page not found</h1>');
    }

});

server.listen(8000,'127.0.0.1',()=>{
    console.log("listening requests on port 8000");
});

