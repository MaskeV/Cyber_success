//var is not used as it gives unexpected results (var is functional scoped) . It's legacy way to declare variables.

var name1="Shruti";

var age = 20;
var age=25;     // you can redeclare variables declared using var

console.log(name1);
console.log(age);


//instead use let and const to declare variables. They are introduced in ES6  (let and const are block scoped )


let 
//let marks = 45; you can not redeclare variable declared using let
marks=50;   //you can update value of variable declared using let

console.log(marks);

const pi=3.14;   //you can not update value of variable declared using const


console.log(pi);




 
let id = 3;         // let is keyword i.e reserved words with predefined meaning'.   id is variable name or identifier and 3 is value of variable or literal.


//you can use _,$ and alphabates at begiining of variable name but you can not use number at begiining of variable name
// var id=3;   you can not declare same variable name twice in same scope

//vriable names in js use camelcase


id="Hi";             // you can change datatype of variable as js is dynamic language

let min = 3;   //  datatype is not specified in variale declaration as js is  loosely typed language.

console.log(typeof(min)); 
console.log(typeof id); // using typeof keyword we can find datatype of variable

 //3 ways to declaare string 
let a='Shruti';
let b="Samruddhi";
let c=`neha`;         // backtrick is introduced in ES6. Mostly used in React.js . They are called template literals or String template  used for string manipulation.


 //datatypes in js

 //number  - can only hold numbers smaller to 2^53 or 9007199254740991  to correct precision
 //bigint - can hold value equal to or greater than 2^53
 //string  - can be declared by above three ways
 //boolean - can only have two valuses true or false
 //null
 //undefined - can have only one value undefined - "Undefined is absence of value "
 //object - can only have only one value null   - "Null is absence of object "


 //Primitive datatypes : number,string,boolean,null,undefined,symbol
 //Reference(Non primitive) datatypes : object

// variable declaration
 let count;


 console.log(typeof a);    // js will initialize declared variable with undefined value if we not initialize it.

  //variable initialization
  count=0;


  //null datatype 

  let userName=null;

 console.log(typeof userName);  // It gives object as we have  initialized it with null value


 //symbol datatype

 let userId = Symbol("id");

 console.log(typeof userId);
 console.log(userId);




 


