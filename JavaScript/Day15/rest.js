
//when spread operator is used as argument to function called as rest operator 
function add(...nums){
    let sum =0;

    nums.forEach(ele =>{
        sum+=ele;
    })
    return sum;

}

console.log(add(1,2,3,4,5));