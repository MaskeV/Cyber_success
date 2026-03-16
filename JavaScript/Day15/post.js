let data = {title: 'BMW Pencil'};

const res = fetch('https://dummyjson.com/products/add',{
    method:"POST",
    body: JSON.stringify(data)
})

res
.then(data =>  data.json())
.then(convertedData => {
 console.log(convertedData);
})
.catch(err => {
    console.log(err);
})


