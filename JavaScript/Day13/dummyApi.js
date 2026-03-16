 const productsData = fetch('https://dummyjson.com/products');
 divE1  = document.querySelector(".products");

 productsData
 .then((data)=>{
    return data.json();
 })

 .then((convertedData) => {
    console.log(convertedData);
    const products = convertedData.products;

    products.forEach((product) => {

        //divE1.innerHTML += `
        //<div class="card">
          //  <img src="${product.thumbnail}" width="150">
            //<h3>${product.title}</h3>
            //<p>Price: $${product.price}</p>
        //</div>
        //`;

        const card = document.createElement("div");
        const imgE1 = document.createElement("img");
        const para = document.createElement("p");

        imgE1.src = product.thumbnail;
        para.innerText = product.title;

        card.append(imgE1,para);

        divE1.append(card);
        

    })


 }) 


.catch((err)=>{
    console.log(err);
})




