//we can change constant(object) but we cant reassign it.


const person={
    name:"John",
    age:30,
    city:"Pune"
}

person.name="Shruti";    // Here no error because We can reassign properties of object but cant reassign whole object

console.log(person);



person={};       // It give error constObj.js:12 Uncaught TypeError: Assignment to constant variable.

console.log(person);



