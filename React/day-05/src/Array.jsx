import { useState } from "react"

export function AddToArray(){
   let [nums,setNums] = useState([]);

    function updateArray(){
       setNums([...nums,10]);
    }
    return (
        <>
         <button onClick={updateArray}>Append</button>
         {nums.map(n=>{
            return <p>{n}</p>
         })}
        </>
    )
}