//Three ways to declare strings
// 1) Single quotes
// 2) Double quotes
//3) Back tricks
// Single and Double quotes are same but with Bak tric  instead of concanicating we can access varaiables inside backtricks using ${}

let city = "Pune";

let userName = "VMaske";


// using backstrick and ${} is also called String template
let sentence = `My name is ${userName} and I live in ${city}`;
//let sentence = "My Name is "+username+" and I live in "+city;   as same thing in quotes is  more complicated to access variables in quotes is difficult than backtrick



console.log(sentence);

console.log(city[1]); //u

console.log(city[-1])  // op - undefined there are no negative index in string just like array

console.log(city.at(-1))  //op - e we can  access negative index using at function

console.log(city.substring(0,3))  // op - Pun  - end is exclusive and start is inclusive

//slice is same as substring but using  slice we can use nehative index as well

console.log(city.slice(0,3))  // op Pun
console.log(city.slice( 4,-1));

//trim() - It is used to remove white space from start and end

let str = "  Hiii  ";
console.log(str.trim());

console.log(city.indexOf('u')); 


//split - it splits hiven string according to given parameter and returns splittes array 

console.log(sentence.split(" ")); //op will be word array //op = [
  //'My',   'name',
  //'is',   'VMaske',
  //'and',  'I',
 // 'live', 'in',
  //'Pune'
//]

//String reverse
console.log(city.split("")) // op will be char array - [ 'P', 'u', 'n', 'e' ]
let reverse = "";

for(let i=city.length-1;i>=0;i--){
    reverse+=city[i];
}

console.log(reverse);


//String reverse using built in function
let orignal = "Hello";
console.log(orignal.split(""));  //op - [ 'H', 'e', 'l', 'l', 'o' ]

console.log()

let rev = orignal.split("").reverse().join("");  
console.log(rev);

let str2 = "java"
let capital = "";
function capitalize(str2){
  capital +=str2.substring(0,1).toUpperCase();

  capital  += str2.substring(1,str2.length);
  return capital;
}

console.log(capitalize(str2));

let sentence2 = "hello viraj";
let capitalizedSentence = "";

function capitalizeSentence(Sentence2){
   let words = sentence2.split(" ");
   for(let i=0;i<words.length;i++){
     capitalizedSentence += words[i][0].toUpperCase()+ words[i].substring(1,).toLowerCase()
     capitalizedSentence+=" ";
   }
   return capitalizedSentence;
}

console.log(capitalizeSentence(sentence2));