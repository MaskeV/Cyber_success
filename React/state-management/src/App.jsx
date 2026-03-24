import { createContext, useContext, useState } from 'react'
import { FirstComponent2 } from './components/FirstComponent2';
import { SecondComponent2 } from './components/SecondComponent2';


import './App.css'

export const CountContext  = createContext(0);

function App() {
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);
  return(
    <div>
    
    <div className='flex gap-5 justify-center items-center' >
      <FirstComponent count={count} setCount={setCount} />
      <SecondComponenet count={count} setCount={setCount}/>
       </div>

    <div className='flex gap-5 justify-center items-center m-4' >
      <CountContext.Provider  value={[count2,setCount2]}>
        <FirstComponent2 />
        <SecondComponent2 />
        </CountContext.Provider>
         </div>

   
    </div>
  )
}

function FirstComponent({count,setCount}){
  function increase(){
    setCount(count+1);
  }

  return(
    <div className='p-10 bg-amber-100 text-black border-2'>
    <h1>Count is {count}</h1>
     
    </div>
  )

  

}

function SecondComponenet({count,setCount}){

  function increase(){
    setCount(count+1);
  }

  return (
    <div className='p-10 bg-amber-100 text-black border-2'>
    <h1>Update the Count </h1>
     <button onClick={increase}>Click Me</button>
    </div>
  )

}

export default App
