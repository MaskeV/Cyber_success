//content

//1. select element

// I) document.getElementById("id")  - will return you element with given id if there is no element with provided id it will return null

let htmlHeading = document.getElementById("heading");   //op <h1 id="heading">Welcome to h1</h1>
console.log(htmlHeading);

// II) document.getElementsByClassName("class")   - here we used elements as multiple elements can have same class
   // It returns HTML Collection that contains all elements with given class. This collection is like array as we can access particular element using index. But it don't support all arrays fuunctionality

let paragraphs = document.getElementsByClassName("para");
console.log(paragraphs);  // op = HTMLCollection(2) [p.para, p.para]
console.log(paragraphs[0]);   // op <p class="para">Lorem ipsum dolor sit amet</p> which is 1st paragraph with class para

//III) document.getElementsByTagName("h1")  - will return all element with given tag 

let allh1Tags = document.getElementsByTagName("h1");
console.log(allh1Tags)   // op HTMLCollection(2) [h1#heading, h1, heading: h1#heading]


console.log(document.getElementsByTagName("h3"))   // If no element with given tag it returns HTMLCollection [] i.e empty HTML collection


//IV) document.querySelector("parameter")    as parameter here we can give #id , .classs and tag as well . It is similar to css selector

let paragraph = document.querySelector(".para")   // It will return first paragraph with para class. It returns single element
console.log(paragraph);

let heading =  document.querySelector("#heading");  // It will return heading with id heading
console.log(heading);


//we can get multiple elements using document.querySelectorAll()

let paras = document.querySelectorAll(".para");   // It will return all paras with class para . It returns NodeList
console.log(paras);   //op- NodeList(2) [p.para, p.para]


//2. Updating content of selected element
//innerHTML 
//innerText
//textContent

let para1 = document.getElementById("para1");
console.log(para1.innerHTML);
cconsole.log(para1.innerText);
console.log(para1.textContent);




  

//update style of selected element
let heading1 = document.getElementById("heading");
heading1.style.color="red";   // It will change color of heading > We can access all properties using style
heading1.innerHTML = "html heading changed usin dom";  // document.getElementById("heading"); returns h1 as object which has properties one  of them is innerHTML by using 
 
let para2 = document.getElementById("para2");
para2.style.display="none";