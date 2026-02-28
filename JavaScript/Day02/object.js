let person = {
  name: "John",
  age:30,
  city:"Pune"
};

console.log(typeof person);
console.log(person.name);         // for access of objects properties we use dot notation. 

console.log(typeof person.name);  
 
console.log(person["name"]);      //other way to access of object properties using square bracket notation 

person.name="Shruti";
//person["name"]="Shruti";           using square bracket notation

console.log(person.name);





//adding properties to object

person.salary=50000;      // It search if salary is property of person first if not add it with value given.


//delete property of object   not used 
delete person.age;
//delete(person.age);   brackets are optional in javascript if you gave space


console.log(person);



 let userId = Symbol("id");

 console.log(typeof userId);


 let userId2= Symbol("id");

 console.log(userId==userId2);
 console.log(userId===userId2);

