
//function definition
function greetings(){
    console.log("Hellooooo...!!");
}

//function call
greetings();


//function with parameters
function userGreeting(name){
    console.log("Hello.... "+name + " !!!");
}
//function call with arguments
userGreeting("user");


function add(num1,num2){
  console.log(num1+num2);
}

add(2,3);


//variable no of arguments  
function sum(...nums){
    let sum=0;
  for(let i=0;i<nums.length;i++){
    sum+=nums[i];
  }

  console.log(sum);
}

sum(1,2,3,4);


//function isEven(num4){
  //if(num4%2==0){
    //return true;
  //}else{
    //return false;
  //}
//}

function isEven(num4){
  return num4%2==0;
}

if(isEven(5)){
  console.log("Even")
}else{
  console.log("Odd");
}

let ip = prompt("Enter a numbber");


if(isEven(ip)){
  console.log("Even")
}else{
  console.log("Odd");
}



let no5=5;
let sum2 = (no5*(no5+1))/2;
console.log(sum2);




function total(ip2){
  let sum = (ip2*(ip2+1))/2;
  return sum;
}

let ip2=parseInt(prompt("Enter no"));
console.log(total(ip2));




function prime(ip3){
  let count=0;

  for(let i=2;i*i<=ip3;i++){
    if(ip3%i==0){
      return false;
    }
  }
  return true;
}

let ip3 = parseInt(prompt("Enter a no"));

if(prime(ip3)){
  alert("No is prime");
}else{
  alert("No is not prime");
}





function addNo(){
  let ip4= parseInt(prompt("Enter a no"));
  let ip5= parseInt(prompt("Enter a no"));
  let ans= ip4+ip5;
  alert(ans);
  
}



