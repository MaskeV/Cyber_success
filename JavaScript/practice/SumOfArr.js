let arr = [1,2,3,4];
let sum=0;

for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

console.log(sum);


function arrSum(nums){
    let sum=0;
  for(let i=0;i<nums.length;i++){
    sum+=nums[i];
}

  return sum;
}

console.log(arrSum([1,4,5,6]));


function max(nums){
   let max=0;
  for(let i=0;i<nums.length;i++){
   if(max<nums[i]){
    max=nums[i];
   }
}
  return max;
}


console.log(max([1,7,3,4,5]))


function min(nums){
   let min=nums[0];
  for(let i=1;i<nums.length;i++){
   if(min>nums[i]){
    min=nums[i];
   }
}
  return min;
}


console.log(min([1,7,3,4,5]))


function secodLargest(nums){
    let max=0;
    let secondMax=0;
    for(let i=0;i<nums.length;i++){
       if(max<nums[i]){
        secondMax=max;
        max=nums[i];
       }else if(secondMax<nums[i]){
        secondMax=nums[i];
       }
    }

    return secondMax;
}


console.log(secodLargest([1,2,3,8,9,5]));