let arr = [1,2,3,4,5];

console.log(typeof arr);         //op object
console.log(Array.isArray(arr));  //true used to check if object is array 

//for of loop
for(let i of arr){
    console.log(i);
}

//forEach() - used to iterate over an array  for each gives both element and its index

arr.forEach((e1)=>{
   console.log(e1);
})

arr.forEach((e1,i)=>{                                
    console.log(`Elment ${e1} is at index ${i}`);

})



//map  =  It is used to perform some operation on all elements  of array and return modified array

let cities=["pune","delhi","mumbai"];

const newArr = cities.map((ele)=>{
    return ele.toUpperCase();
})

console.log(newArr);


let marks = [32,31,35,34,33];

const modifiedMarks =  marks.map((ele)=>{
    return ele+5;
}
);

//const modifiedMarks = marks.map(marks=> marks+5);  // if there is single parameter we dont ned () and if there is single line function we dont need {} and return statement for more simplified way
console.log(modifiedMarks);

const newMarks =  marks.map((ele)=>{
    ele+3;
}
);

console.log(newMarks);  // [ undefined, undefined, undefined, undefined, undefined ] if we dont write return statement by default undefined is returned in js

let nums = [1,2,3,4,5];

const squaredNo = nums.map(no => no*no);

console.log(squaredNo);

//const filteredMarks = marks.filter((mark) =>{
 //   if(mark>30){
   //return true;   // when condition returns true no is added in filtered array .
 // }else{
   // return false;
   //}
//});

const filteredMarks = marks.filter((mark) =>{
    return mark>30;
});

console.log(filteredMarks);

const evenNums = nums.filter((ele)=>{
    return ele%2==0;
})

console.log(evenNums);

const oddNums = nums.filter((ele)=>{
    return ele%2==1;
})

console.log(oddNums);

const sumNums = nums.reduce((sum,ele)=>{
    sum+=ele;
    return sum;
})

console.log(sumNums);

//object array to access properies of object iterate over object array and access each objects property
const items = [
    {price:10,quantity:2},
    {price:5,quantity:5},
    {price:8,quantity:3},
]

const totalPrice = items.map((ele)=>{
    return ele.price * ele.quantity;
})

console.log(totalPrice);

const students = [
    {name:"John",marks:35},
    {name:"Alice",marks:50},
    {name:"Bob",marks:40},
    {name:"Emma",marks:30}
]

const filteredStudents = students.filter((ele)=>{
    return ele.marks>=40;
})

console.log(filteredStudents);

const words = ["apple","bat","banana","cat","grape"];

const filteredWords = words.filter((word)=>{
    return word.length <5;
})

console.log(filteredWords);

const words2 = ["hello","world","pune"];

const capitalizedWords = words2.map((word)=>{
    return word[0].toUpperCase() + word.substring(1,word.length).toLocaleLowerCase();
})

console.log(capitalizedWords);   