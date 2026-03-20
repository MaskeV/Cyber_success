import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';


function App() {
 
  let [nums,setNums] = useState([]);   // we can passs array as a state

  let [isVisible,setIsVisible]  = useState(true);

  function toggle(){
     setIsVisible(!isVisible);
  }

  let [camera , setCamera] =useState(false);

  function toggleCamera(){
    setCamera(!camera);
  }
   
  let [ans,setAns] =useState(false);

  function hidePara(){
    setAns(!ans);
  }

  let [count,setCount] = useState(0);

  function increaseby1(){
     setCount(count+1);
  }

  function addToArray(){
    let newArray = [...nums,10];
    setNums(newArray);
  }

  function increaseby5(){
    setCount(count+5);
  }

  return (
    <div className='container'>

      <h1>Counter is {count}</h1>
      <button onClick={increaseby1}>Increse by 1</button>
      <button onClick={increaseby5}>Increase by 5</button>


      <button onClick={addToArray}>Append</button>
      {nums.map((num) =>{

        return <p>num</p>
      })}

     <button onClick={toggle}>Hide</button>
     {isVisible && <div>Options</div>}
     

     <button onClick={toggleCamera}>Toggle Camera</button> 
     {camera ? <h1>Camera on</h1>:  <h1>Camera off</h1>}

     <p onClick={hidePara}>Question......</p>
     {ans && <p>Answer......</p>}

     </div>
  )
}

export default App
