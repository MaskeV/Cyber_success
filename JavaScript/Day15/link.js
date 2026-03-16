export let username = "Sham";
export let age = 20;

function add(...nums){
  let sum=0;
  nums.forEach(ele =>{
    sum+=ele;
  })
  return sum;
}

export default add;

