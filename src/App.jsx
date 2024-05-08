import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import SinglePage from './pages/SinglePage/SinglePage'
import Profile from './pages/Profile/Profile'
import Account from './pages/Account/Account'
import Orders from './pages/Orders/Orders'
import Favourites from './pages/Favourites/Favourites'

const App = () => {
  const [savedSize, setSavedSize] = useState(0)
  useEffect(()=> {
    const savedProducts = JSON.parse(sessionStorage.getItem("products"))
    if (savedProducts) {
      setSavedSize(savedProducts.length);
    }
  },[])
  return (
    <div>
      <div className='h-[80px]'>
        <Navbar savedSize={savedSize} setSavedSize={setSavedSize}/>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='single_page/:id' element={<SinglePage setSavedSize={setSavedSize}/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='account' element={<Account/>}></Route>
        <Route path='orders' element={<Orders/>}></Route>
        <Route path='liked' element={<Favourites/>}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
