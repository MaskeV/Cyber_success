import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { use } from 'react'

function App() {

  let sports = ["cricket","football","hockey","tennis"];

  let newArray = sports.map((s)=>{
      return <p>{s}</p>     //if we dont use curly braces or  it will only return  s as string not its value
  });
 
    //sports   It will return op as cricketfootballhockeytennis  as element without any spaces 
    //newArray It will return elements as para so we have each ele


    let todos = [
      {
        id:1,
        todo:"Do something good",
        completed:false
      },
      {
        id:2,
        todo:"Read a book",
        completed:true
      },
      {
        id:3,
        todo:"learn something new",
        completed:false
      },
      {
        id:4,
        todo:"watch a movie",
        completed:true
      },
      
    ];


    let todoArray = todos.map((obj)=>{
          return <div><p>{obj.id}</p><p>{obj.todo}</p><button>{obj.completed ? "Completed" : "incompleted"}</button></div>
       
          
    }
  )

  //let arr = useState(0)   here we pass initial value of state we want to change and it returns  array with 1 st element as state we are changing and 2nd element is function to change that state
  let [num,setNum] = useState(0);
 
  function increase(){
    setNum(num+1);
  }
  function decrease(){
    setNum(num-1);
  }

  function reset(){
    setNum(0);
  }
  return (
    <div >


      <h1>The num is {num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decreasse</button>
      <button onClick={reset}>Reset</button>
    

      <hr />
      {sports}  
      {newArray}  
      <div className='box'>
      {todoArray}
      </div>
    </div>
    
  );
  
}

export default App
