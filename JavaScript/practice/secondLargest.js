let max=0;
let secondMax=0;

let arr = [1,2,3,4];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        secondMax=max;
        max=arr[i];
        

    }else if(secondMax<arr[i]){
        secondMax=arr[i];
    }

}
console.log(secondMax)