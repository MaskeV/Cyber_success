//Promise  - It is a js object which specifies eventual completion of task.
// to get promise we fetch(api)  // i.e send request to server


h1E1 = document.querySelector("h1");
const promise = fetch("https://dog.ceo/api/breeds/image/random");

imgE1 = document.querySelector(".dog");

promise
 .then((data)=>{
   // console.log(data)  //It will give data in json forma not actual js object. API response is form of JSON it has lots of filds like status of api, dte , server, context

    return data.json();    //It also takes time for execution so returns promise
 })

 .then((convertedData)=>{
    imgE1.src = convertedData.message;
    console.log(convertedData);    
 })

 //op 
 //{
  //message: 'https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_9277.jpg',
  //status: 'success'
//}


.catch((err)=>{
    console.log(err);
})



function getEmoji(){
    const promise2 = fetch("https://emojihub.yurace.pro/api/random");
    

    promise2
     .then((data)=>{
        return data.json();
     })

     .then((actualData)=>{
        

        h1E1.innerHTML="Hello " + actualData.htmlCode[0];
        console.log(actualData);
     })

     .catch((err)=>{
        console.log(err);
     })

}


getEmoji();