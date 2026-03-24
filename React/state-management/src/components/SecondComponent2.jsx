import { useContext } from "react";
import {CountContext} from "../App";

export function SecondComponent2(){

    const [count2,setCount2] = useContext(CountContext)
    function increase(){
    setCount2(count2+1);
  }

  return(
    <div className='p-10 bg-amber-100 text-black border-2'>
    <h1>Count is {count2}</h1>
    <button onClick={increase}>Click Me</button>
    </div>
  )

}