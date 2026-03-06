//class Manipulation - It is used to change styles through js to make it more interactive

//There are two ways
//I) className
h1 = document.getElementById("heading1");
 console.log(h1.className);  // pop headings head

 // It returns string as className and One element can have multiple classes and className returns multiple classes as single string so if we changed classname other will 

   
   h1.className = "new-heading";

   // now all other classes are also removed. So  we dont use claaName

   //II) classList
 h2 = document.getElementById("heading2");
 console.log(h2.classList);  //op - DOMTokenList(2) ['headings', 'head', value: 'headings head'] and It returns DOMTokenList so it is easy to manipulate as we can change oe class by keeping other. 

 console.log(h2.classList.contains("headings"));  // op will be true

 console.log(h2.classList.add("updated-class"))   // It adds new class in list if  does not exist already

 console.log(h2.remove("heading"))  // It will remove class if it exist in classList

 console.log(h2.classList.toggle("headings"))  //Toggles the existence of a class. It adds the class if it is not present, and removes it if it is.



 

 

   
