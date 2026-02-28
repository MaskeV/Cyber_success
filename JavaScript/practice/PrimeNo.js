let no3=29;
let count =0;

for(let i=2;i*i<=no3;i++){
     if(no3%i==0){
        count++;
     }
     if(count>0){
        console.log("Not a Prime");
        
     }
}
if(count==0){
    console.log("Prime");
}