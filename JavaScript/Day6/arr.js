let arr = [1,2,3];

let list = ["Pune",1,1.2]   // elments in  arr are hetrogeneous

console.log(typeof list)   // returns object as type


arr[5]=5;   // op will be [ 1, 2, 3, <2 empty items>, 5 ]  it will create holes in array for indexs which we dont have values defined.


console.log(arr[-1]);  // op will be undefined . Standard array in js dont support negative index as index dont exist it returns undefined
console.log(arr[10]);  //op will be undefined
// we can access negative index i.e reverse order in js using method at()


console.log(arr.at(-1));


console.log(arr);


//Methods in arr

arr.push(10) // adds element 10 at end of array and return new length of arr

arr.pop()  //deletes elment at end and return deleted element 

arr.unshift(0)  //adds element 0 at start of array and returns new length of arr

arr.shift() // deletes element at start and returns deleted at element 


// splice = Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//arr.splice(start: number, deleteCount?: number | undefined, (number[]|string[]))   using this we give start index and how many elements to delete from it

list.splice()  // It wll not do anything to array

list.splice(1)  // it will delete all elments from start index

list.splice(2,"Item")  // it will not affect array as as it sees string as count so it is considered 0 and it will not affect array

Array.isArray(arr)  // op will be true it returns if given object is array or not

arr.reverse()  // It reverse the order of array


let cities={};
console.log(Array.isArray(cities))  // op will be false 