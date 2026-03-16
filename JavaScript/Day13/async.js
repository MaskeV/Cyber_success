//Async function

//setTimeout() - It is async function used to tell waiting time for execution of function

console.log("A");

setTimeout(()=>{
    console.log("B") 
},4000);                    //4000 is 4 second wait

console.log("C")                //op - ACB   (it will wait 4 sec for B will keep executing remaining stack still it)




