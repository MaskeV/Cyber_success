btn = document.querySelector("button");


let doSomething = ()=>{
    console.log("Clicked");
}

btn.addEventListner("click", doSomething);

btn.removeEventListner("click",doSomething);