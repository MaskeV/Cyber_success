import { useState } from "react";

export function SwitchTab(){
 let [tab ,setTab] = useState("for-you");
   
   function changeToFashion(){
     setTab("fashion");
   }
   function changeToForYou(){
     setTab("for-you")
   }
 
   switch(tab){

       
 
     case "fashion":
       return (<div>
       <button onClick={changeToForYou}>For you</button>
       <button onClick={changeToFashion}>Fashion</button>
       <p>Fashion</p>
        
      </div>)

      default:
       return (<div>
       <button onClick={changeToForYou}>For you</button>
       <button onClick={changeToFashion}>Fashion</button>
       <p>For you</p>
       
       
      </div>)

   }
}