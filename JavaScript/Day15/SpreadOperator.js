
let nums1 = [1,2,3];
let nums2=[4,5,6];

//Merge two arrays in new array

//let nums = nums1+nums2;   concatination gives new string
//console.log(typeof nums);
//console.log(nums);

let nums = [...nums1,...nums2];  //...is called spread operator
console.log(nums);   // op [ 1, 2, 3, 4, 5, 6 ]


let person = {
    name: "Sham",
    age: "27"
}

let employee = {
    
    salary : 20000
}

let mergedObj = {...person,...employee};
console.log(mergedObj);  // op { name: 'Sham', age: '27', salary: 20000 }


let person2 = {
    name: "Sham",
    age: "27"
}

let employee2 = {
    name : "Raj",
    salary : 20000
}

let mergedObj2 = {...person,...employee};
console.log(mergedObj2);  // op { name: 'Raj', age: '27', salary: 20000 }