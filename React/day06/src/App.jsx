import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import ProductPage from './components/Products'
import Header from './components/Header'

function App() {
  

  return (
    <>



    <BrowserRouter>

    <Header />
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/about' element = {<About />}></Route>
      <Route path='/contact' element = {<Contact />}> </Route>
       <Route path='/products:id' element = {<ProductPage />}></Route>

    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
