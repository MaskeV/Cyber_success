console.log("abcd"-"xyz");
console.log("abcd"+"xyz");

console.log(10/3);   // op is in float
console.log(10/0);   // op is  Infinity
console.log(-10/0); // op is -Infinity
console.log(0/0);  // op is NaN


//comaparision opertors (lexical or alphabatical order)= A-Z then a-z as A is smaller than a 

console.log('a'>'A');  //op is true. It checks the lexical or alphabatical order. Who comes first in order is smaller and who comes later is greater.
console.log('app'<'apple');  //op is true


//equality operator

console.log(10==10);  //op is true
console.log(10==20);  //op is false
console.log(10!=20);  // op is true


console.log("10"==10)  // op is true as == only checks if content is same by ignoring datatype
console.log("10"!=10)   // op is false as != also only checks if content is same by ignoring datatype
   

//strict equality operators

console.log(10==="10")  // op is false as === checks both content and datatype is same

console.log(10!=="10")  // op is true as !== checks both content and datatype is same


//short circuit opertors (& , | , ~,^) or bitwise operator

console.log(1 & 3);  // op is 1
console.log(1 | 3);  // op is 3
console.log(1 ^ 3);  // op is 2 
console.log(~1);  // op is -2  It gives 2's complement of given number.

//Assignment opertors

let n=10;


//compound assignment operator

n+=5;    // It works as n=n+5
n*=2;    // It works as n=n*2
n/=2;    // It works as n=n/2
n%=2;    // It works as n=n%2   

//increment and decrement opertors

n++;   // It works as n=n+1
n--;   // It works as n=n-1

let i=10;

console.log(i++);    // it gives 10 as it is post increment as value is printed before increment
console.log(++i);    // it gives 12 as it is pre increment as value is printed after increment          


//console.log(++10);    //It gives error as Uncaught SyntaxError: Invalid left-hand side expression in prefix operation (at arithmatic.js:64:15). We can use increment or decrement on  constant. It is only applied to variable

const a=12;
console.log(a++); //It gives error as arithmatic.js:67 Uncaught TypeError: Assignment to constant variable.at arithmatic.js:67:14. as we cant reassign const.











