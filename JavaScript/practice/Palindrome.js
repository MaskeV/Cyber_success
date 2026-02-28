let str = "Level";


function palindrom(str){

let i=0;
let j=str.length-1;

while(i<j){
    if(str[i].toLowerCase()!=str[j].toLowerCase()){
        return false;
    }
    i++;
    j--;
}
return true;
}

if(palindrom(str)){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}