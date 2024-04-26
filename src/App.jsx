import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop/Shop'

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
