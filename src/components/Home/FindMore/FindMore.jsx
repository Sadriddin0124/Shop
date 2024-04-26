import React, { useState } from 'react'
import "./FindMore.scss"
import { IoArrowForwardOutline } from "react-icons/io5";
import FindMore1 from "../../../assets/findmore1.png"
import FindMore2 from "../../../assets/findmore2.png"
import Button from '../../Button/Button'
const FindMore = () => {
    const [findMore, setFindMore] = useState([
        {id: 1, img: FindMore1, title: "summer cactus & succulents", subtitle: "We are an online plant shop offering a wide range of cheap and trendy plants"},
        {id: 2, img: FindMore2, title: "styling trends & much more", subtitle: "We are an online plant shop offering a wide range of cheap and trendy plants"},
    ])
  return (
      <div className="cards">
        {
            findMore?.map((item,index)=> {
                return <div className="card" key={index}>
                    <div className="card__img">
                        <img src={item?.img} alt={item?.title} />
                    </div>
                    <div className="card__text">
                        <h1 className='card__text-title'>{item?.title}</h1>
                        <p className='card__text-subtitle'>{item?.subtitle}</p>
                        <Button text="Find More" icon={<IoArrowForwardOutline size={20}/>}/>
                    </div>
                </div>
            })
        }
      </div>
  )
}

export default FindMore
