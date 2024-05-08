import React from 'react'
import ImgSlider from '../../components/Home/Slider/Slider'
import Main from '../../components/Home/Main/Main'
import Footer from '../../components/Home/Footer/Footer'
import "../../index.css"
const Home = () => {
  return (
    <div className='home'>
      <ImgSlider/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
