
let num=5;


let j=0;

while(j<=num){
if(j<2){
    console.log(j);
}

else{
    let prev=0;
    let curr=1;
    let ans =0;
    for(let i=2;i<=j;i++){
      ans= prev+curr;
      prev=curr;
      curr=ans;
      
    }
    console.log(ans);
}
j++;
}