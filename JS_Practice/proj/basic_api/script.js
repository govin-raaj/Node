document.getElementById('fetchBtn').addEventListener('click', fetchData);
let totalPrice = 0;
async function fetchData() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    const products = data.products;
    const productList = document.getElementById('productList');

    products.map(product=>{
            const card = document.createElement('div');
            card.className = "card";
            card.appendChild(document.createTextNode(`ID: ${product.id}`));
            card.appendChild(document.createElement('br'));
            card.appendChild(document.createTextNode(`Name: ${product.title}`));
            card.appendChild(document.createElement('br'));
            card.appendChild(document.createTextNode(`Price: $${product.price}`));
            card.appendChild(document.createElement('br'));
            const button = document.createElement('button');
            button.innerText = "add to cart";
            button.className = "btn";
            button.addEventListener('click', () => {
        totalPrice += product.price;
        document.getElementById('total').textContent = totalPrice;
      });

            card.appendChild(button);
            card.style.border = "1px solid #ccc";
            card.style.padding = "10px";
            card.style.margin = "10px 5px";
            productList.appendChild(card);
        });


  } catch (error) {
    console.error("Error:", error);
  }
}
