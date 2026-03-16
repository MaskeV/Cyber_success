//Array destructuring   = Used a lot in React, In array destructuring order matter first variable is assigned with first element

let cities = ["Pune","Mumbai","Delhi","Noida"];

let [a,b] = cities;

console.log(a);  //op will be Pune

let num = [1,2,3,4];

let[second,first] = num;  // first index will match with first index of nums array . Its just map array elements with variable name

console.log(second);  


let[, , c,d]=cities;

console.log(c); //op will be Delhi
//object destructuring 

let person = {

}