import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {AddToArray} from './Array';
import {SwitchTab} from './Tab';
import { GetProducts } from './Api';
import { SearchInArray } from './SearchInArray';

function App() {

  let [count1 ,setCount1]=useState(0);
  let[count2,setCount2] = useState(0);
  
  useEffect(()=>{ 
    console.log("Browse Products");      // component  lifeCycle  - > Mount - Update(Rerender) - UnMount
  }, []);                                // It will run only when App component is mounted not when  it is rerendered 
   

  // This useffect  with value is used we want rerender only when specific state of compponent changes. Mostly used in search suggestions
    useEffect(()=>{ 
      //It will run  when component is mount or stte count1 is changed 
    console.log("Api fetched");   
  }, [count1]);                                // It will run only when component is mounted and  when count1 is rerendered  but it do not run when coun2  is updated 
   
  return(
    <>

    <SearchInArray />

      <h1>Count1 is {count1} </h1>
      <h1>Count2 is {count2}</h1>
      <button onClick={()=> setCount1(count1+1)}>Count 1</button>
      <hr />
      <button onClick={()=> setCount2(count2+1)}>Count 2</button>


      <GetProducts></GetProducts>
      <SwitchTab></SwitchTab>
      <AddToArray></AddToArray>
    </>
  )
  
}

export default App
