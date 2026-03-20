import { useEffect, useState } from "react"

export function GetProducts(){
    let [products,setProducts] = useState([]);

    async function getProducts() {

        const productsData = await  fetch('https://dummyjson.com/products');
        const productsConverted = await productsData.json()

        setProducts(productsConverted.products);
        
    }

    useEffect(()=>{
        getProducts();
    },[])     // Now  products are fetched only when component is mounted not when rerendereed

   // getProducts();
    return(
        <>
          
            {products.map(product =>{
                return(
              <div>
                <img src={product.thumbnail} />
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>)

            })}
        
        </>
    )
}