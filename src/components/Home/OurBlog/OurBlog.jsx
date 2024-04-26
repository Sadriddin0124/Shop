import React, { useState } from 'react'
import Blog1 from "../../../assets/ourblog1.png"
import Blog2 from "../../../assets/ourblog2.png"
import Blog3 from "../../../assets/ourblog3.png"
import Blog4 from "../../../assets/ourblog4.png"
import { Link } from 'react-router-dom'
import { IoArrowForwardOutline } from "react-icons/io5";
import "./OurBlog.scss"
const OurBlog = () => {
    const [blogData, setBlogData] = useState([
        {id: 1, img: Blog1, top: "September 12  I Read in 6 minutes", title: "Cactus & Succulent Care Tips", subtitle: "Cacti are succulents are easy care plants for any home or patio. "},
        {id: 2, img: Blog2, top: "September 13  I Read in 2 minutes", title: "Top 10 Succulents for Your Home", subtitle: "Best in hanging baskets. Prefers medium to high light. "},
        {id: 3, img: Blog3, top: "September 15  I Read in 3 minutes", title: "Cacti & Succulent Care Tips", subtitle: "Cacti and succulents thrive in containers and because most are."},
        {id: 4, img: Blog4, top: "September 15  I Read in 2 minutes", title: "Best Houseplants Room by Room", subtitle: "The benefits of houseplants are endless. In addition to.."},
    ])
  return (
    <div className='blog'>
      <h1 className="blog__title">Our Blog Posts</h1>
      <p className='blog__subtitle'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
      <div className="blog__cards">
        {
            blogData?.map((item,index)=> {
                return <div className="blog__card" key={index}>
                    <div className="blog__card-img">
                        <img src={item?.img} alt={item?.title} />
                    </div>
                    <div className="blog__card-text">
                        <p className="blog__card-top">{item?.top}</p>
                        <h1 className="blog__card-title">{item?.title}</h1>
                        <p className="blog__card-subtitle">{item?.subtitle}</p>
                        <Link className='blog__card-read_more'>
                            <p>Read More</p>
                            <IoArrowForwardOutline/>
                        </Link>
                    </div>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default OurBlog
