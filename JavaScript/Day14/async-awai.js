
divE1  = document.querySelector(".products");
async function getProducts(){
 const productsData = await  fetch('https://dummyjson.com/products');
 const data = await productsData.json();
 
 const products = data.products;
 products.forEach(product => {
     const card = document.createElement("div");
     const para = document.createElement("img");
     const imgE1 = document.createElement("img");

     imgE1.src = product.thumbnail;
     para.innerText = product.title;

      card.append(imgE1,para);
      productsData.append(card);

 });


 }