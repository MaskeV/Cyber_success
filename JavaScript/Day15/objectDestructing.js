//object destructuring  - order doesn't matter



let person = {
    userName : "Sham",
    age : 55,
    city :"Pune"

}

//let {userName , age}= person;

let{age,userName} = person

console.log(userName);

console.log(age);  // here op is 55 only as order doesnt matter in object destructuring as we use keys
