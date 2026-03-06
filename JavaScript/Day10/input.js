btn = document.querySelector("button");

let con = document.getElementById("ip1");
let par = document.querySelector(".parent");


function greetings(){
   console.log('Hello')
  let temph1 =  document.createElement("h1");
  temph1.innerText = "Hello" + con.value;
  par.append(temph1);
  
}

btn.addEventListener("click",greetings);