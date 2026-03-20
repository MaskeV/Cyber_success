
import './App.css'
import  SecondComponent  from './SecondComponent'
import Header from './Header';


function App() {
   let isLoggedIn = false;
   
//conditional Rendering using Ternary operator
   return (
   <div>

      {isLoggedIn ? <p>Welcome back</p> : <p>Login to Continue</p>} 
      <Header></Header>
    <h1>Hello </h1>
    <NewComponent/>
    <SecondComponent/>
   </div>
   );
}

//<newComponent /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements. So if we used camal case for react component name it throws this error

function NewComponent() {
   return (
     <p>This is a new component</p>
   );
}

export default App
