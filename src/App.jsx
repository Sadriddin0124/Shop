import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import SinglePage from './pages/SinglePage/SinglePage'

const App = () => {
  return (
    <div>
      <div className='h-[80px]'>
        <Navbar/>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='single_page/:id' element={<SinglePage/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
