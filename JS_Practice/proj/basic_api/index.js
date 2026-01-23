async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}


fetch('https://dummyjson.com/products')
    .then(res => {
        return res.json()
    })
    .then(data => {
        const products = data.products;

        function printData(products) {
            products.map(product => { console.log(`Product name: ${product.title} , Price:$${product.price}, Ratings: ${product.rating}, stock:${product.stock}`) })
        }

        function fltr(products) {
        const filteredProducts = products.filter(product => product.price > 100);
        console.log(
            "Filtered Products (price > 100):",
            filteredProducts.map(p => p.title)
        );
        return filteredProducts;
        }

        function totalPrice(products){
            let total=products.reduce((acc,product)=>acc+product.price,0);
            console.log("Total Price of products: $",total);
            return total;
        }

        printData(products);
        let filteredProducts=fltr(products);
        console.log(filteredProducts.length);
        totalPrice(filteredProducts);
    })
    .catch(err => console.error("Error:", err));