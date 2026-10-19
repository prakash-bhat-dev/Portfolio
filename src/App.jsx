import React,{useState} from 'react'
import Navbar from './Components/Header/Navbar'
import MainLayout from './Components/MainLayout/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/Components/HomePage/Home'
import About from './Components/AboutPage/About'
// import icon for skills


const App = () => {




  return (
    <div>
<Navbar />
<Routes>

  <Route path='/' element={<MainLayout />} />
  {/* <Route path='/' element={<Home />} /> */}
  <Route path='/about' element={<About />} />
</Routes>

    </div>
  )
}

export default App