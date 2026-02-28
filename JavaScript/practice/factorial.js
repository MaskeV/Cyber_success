//Normal solution is faster

let no=10;
let factorial=1;

for(let i=1;i<=no;i++){
   factorial *=1;
}

console.log(factorial);


//Recursive solution is slower

let n=5;

function fact(n){
    if(n<2){
        return 1;
    }
    return n*fact(n-1);
}

console.log(fact(5));
