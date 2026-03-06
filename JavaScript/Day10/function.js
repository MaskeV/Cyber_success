//3 ways to declare functionn

btn = document.querySelector("button");

//1) Function Defination 

function doSomething(){
    console.log("Button clicked");
}

//btn.onclick = doSomething - using DOM 

btn.addEventListner("click",doSomething);   //method call   here we dont use brackets after function because if we used brackets function is always clled even uer dont click

//2) Function expression

let doSomething = function () {                         // in js we can store function definition in variable 
    console.log("Button clicked using function expressiom")
}

btn.onclick =  doSomething;


// WE can also simplify it as
btn.onclick = function () {                         // in js we can store function definition in variable 
    console.log("Button clicked using function expressiom")
};


//3) Arrow Function

let doSomething = () =>  {                         // in js we can store function definition in variable 
    console.log("Button clicked using function expressiom");
};

btn.onclick = doSomething;

//we can simplyfy it 

btn.addEventListner("click",() =>  {                         // in js we can store function definition in variable 
    console.log("Button clicked using function expressiom");
} );



