//Function - Reusable block of code used to perform specific task. - A block of code used to perform specific task ny taking input if necessary 
//Types of functions : Userdefined vs Predefined


//predefined
//eg . 

console.log(isNaN("Hi"));   // isNaN returns boolean value

 //built in functions provided by browser
alert("Hi");    // alert wont return nothing i.e undefined
const res = confirm("Are you reddy?");   
if(res){
    console.log("Let's go");    //confirm returns boolean value
}else{
    console.log("Ok let's wait");
}

const input = prompt("Enter no from 1 to 10");

if(parseInt(input)%2==0){
    alert("Even");
}else{
    alert("Odd");
}

 // parseInt returns integer value

const ip1 = prompt("Enter first no: ");
const ip2 = prompt("Enter second no: ");

const sum = parseInt(ip1) + parseInt(ip2);
alert("Sum is "+sum);





