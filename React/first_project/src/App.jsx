
import './App.css'

function App() {

  return (
    <div>
      
     <TestSomething  city="Pune" text="Welcome to Pune"  year={2022}/>
     <TestSomething  city="Mumbai" text="Welcome to Mumbai" year={2023}/>
    </div>
  );
}

//we can use object des


function TestSomething(props) {    //props is object returned by component TestSomething with parameters passed as attribute
   return (
     <div>
      <h1>{props.city}</h1>
      <h1>{props.year}</h1>
      <p>{props.text}</p>
     </div>
   )
}


export default App
