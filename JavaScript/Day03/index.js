let no = 10;
if(no%2==0){
    console.log("Number is even");
}else{
    console.log("Number is odd");
}

if(no>0){
    console.log("Number is positive");
}else if(no<0){
    console.log("Number is negative");
}else if(no==0){
    console.log("Number is zero");
}else{
    console.log("Invalid number");
}


let marks= 50;
if(marks>100){
    console.log("Invalid Marks")
}else if(marks>90){
    console.log("Excellent marks");
}else if(marks>80){
    console.log("Very good Marks");
}else if(marks>70 ){
    console.log("Good Marks");
}else if(marks>60){
    console.log("Average Marks");
}else if(marks>50){
    console.log("Below Average Marks");
}else if(marks>40){
    console.log("Padhai Karo");
}else{
    console.log("Padhai Chodo");
}


















let num=15;
if(num%3==0 && num%5==0){                            //we can use num%15==0 because if no is divisible by both 3 & 5 it is divisible by 15.
    console.log("FizzBuzz");
}

else if(num%3==0){
    console.log("Fizz");
}else if(num%5==0){
    console.log("Buzz");
}else{
    console.log(num)
}



//switch case


let day = "7";    // op would be invalid day. 
// by deafault switch case use === operator as it checks both content and datatype.

switch(day){    
    case 1:
        console.log("Monday");
        break;
     case 2 :
        console.log("Tuseday");
        break;
     case 3:
        console.log("Wednesday");
        break;
     case 4:
        console.log("Thursday");
        break;
     case 5:
        console.log("Friday");
        break;
     case 6:
        console.log("Saturday");
        break;
     case 7:
        console.log("Sunday");
        break;
     default:
        console.log("Not valid day");
        

        
}



//Truty aand Falsy values

if(0){
  console.log("Hi");
}else{
    console.log("Bye")
}

 
//Falsy values                     
false
0,-0
null
undefined
NaN
""

//Truthy values
//true
//any no expect 0 or -0
//" "
//Infinity
//{} - empty object