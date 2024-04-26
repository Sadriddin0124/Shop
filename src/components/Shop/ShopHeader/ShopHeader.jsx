import React, { useEffect, useState } from 'react'
import "./ShopHeader.scss"
import Image1 from "../../../assets/plant1.png"
import Image2 from "../../../assets/plant8.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMinus, FaStar, FaTwitter } from "react-icons/fa";
import Button from '../../Button/Button';
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

const ShopHeader = () => {
    const [shopImage, setShopImage] = useState([
        {id: 1, img: Image2},
        {id: 2, img: Image1},
        {id: 3, img: Image2},
        {id: 4, img: Image1},
    ])
    const [activeImg, setActiveImg] = useState(2)
    useEffect(()=> {
        let id = +sessionStorage.getItem("activeImg")
        if (id) {
            setActiveImg(id)
        }else {
            setActiveImg(2)
        }
    },[])
    let activeImage = shopImage.find((item)=> item?.id === activeImg)
    const changeActiveImg = (id) => {
        sessionStorage.setItem("activeImg", id)
        setActiveImg(id)
    }
    const size = ["S", "M", "L", "XL"]
    const [activeSize, setActiveSize] = useState(0)
    const [counter, setCounter] = useState(1)
  return (
    <div className='header'>
      <div className="header__left">
        <div className="header__left-sm">
            {
                shopImage?.map((item,index)=> {
                    return <div className={`${item?.id === activeImg ? 'active__image' : ""} header__sm-item`} key={index} onClick={()=>changeActiveImg(item?.id)}>
                        <img src={item?.img} alt={item?.id} />
                    </div>
                })
            }
        </div>
        <div className="header__left-lg">
            <img src={activeImage?.img} alt="activeImage" />
        </div>
      </div>
      <div className="header__right">
        <h1 className="header__right-title">Barberton Daisy</h1>
        <div className="header__right-price">
            <h3>$119.00</h3>
            <div>
            <FaStar className='orange__star' size={15}/>
            <FaStar className='orange__star' size={15}/>
            <FaStar className='orange__star' size={15}/>
            <FaStar className='orange__star' size={15}/>
            <FaStar className='gray__star' size={15}/>
            <p>19 Customer Review</p>
            </div>
        </div>
        <div className="header__right-desc">
            <h1>Short Description</h1>
            <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
        </div>
        <div className="header__right-size">
            <h1>Size: </h1>
            <div>
                {size?.map((item,index)=> <p key={index} className={activeSize === index ? "active__size" : "size"} onClick={()=>setActiveSize(index)}>{item}</p>)}
            </div>
        </div>
        <div className="header__right-counter">
            <div className="right__counter">
                <button onClick={()=>setCounter(prev=> prev - 1)} disabled={counter === 1 ? true : false}><FaMinus/></button>
                <h1 className='counter__num'>{counter}</h1>
                <button onClick={()=>setCounter(prev=> prev + 1)}><FaPlus/></button>
            </div>
            <Button text="BUY NOW"/>
            <button className='right__btn-outline'>ADD TO CART</button>
            <button className='right__btn-outline2'><CiHeart/></button>
        </div>
        <div className="right__footer">
            <p>SKU: 1995751877966</p>
            <p>Categories: Potter Plants</p>
            <p>Tags: Home, Garden, Plants</p>
            <div>
                <h1>Share this products:</h1>
                <FaFacebookF size={15} />
            <FaInstagram size={15} />
            <FaTwitter size={15} />
            <FaLinkedinIn size={15} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShopHeader
