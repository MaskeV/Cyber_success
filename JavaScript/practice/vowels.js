let s="aetyyu";
let vowels = "aeiouAEIOU";
let vowelCount=0;

for(let i=0;i<s.length;i++){
    if(vowels.includes(s[i])){
       vowelCount++;
    }
}

console.log(vowelCount);