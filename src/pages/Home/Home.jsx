import React from 'react'
import ImgSlider from '../../components/Home/Slider/Slider'
import Main from '../../components/Home/Main/Main'
import OurBlog from '../../components/Home/OurBlog/OurBlog'
import Footer from '../../components/Home/Footer/Footer'
import "../../index.css"
import FindMore from '../../components/Home/FindMore/FindMore'
const Home = () => {
  return (
    <div className='home'>
      <ImgSlider/>
      <Main/>
      <FindMore/>
      <OurBlog/>
      <Footer/>
    </div>
  )
}

export default Home
