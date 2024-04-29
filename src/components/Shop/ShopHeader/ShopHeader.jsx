import React, { useEffect, useState } from 'react'
import "./ShopHeader.scss"
import Image1 from "../../../assets/plant1.png"
import Image2 from "../../../assets/plant8.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMinus, FaStar, FaTwitter } from "react-icons/fa";
import Button from '../../Button/Button';
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useShopStore } from '../../../store/ShopStore/ShopStore';

const ShopHeader = () => {
    const {getSingleProduct} = useShopStore()
    const [singleProduct, setSingleProduct] = useState("")
    const [activeImg, setActiveImg] = useState(0)
    useEffect(()=> {
        let index = +sessionStorage.getItem("activeImg")
        if (index) {
            setActiveImg(index)
        }else {
            setActiveImg(0)
        }
        receiveProduct()
    },[])
    const id = window.location.href.split("/")[4]
    const receiveProduct = async() => {
        const response = await getSingleProduct(id)
        console.log(response);
        setSingleProduct(response?.data)
    }
    let activeImage = singleProduct?.images?.find((item,index)=> index === activeImg)
    console.log(activeImg);
    const changeActiveImg = (index) => {
        console.log(index);
        sessionStorage.setItem("activeImg", index)
        setActiveImg(index)
    }
    const size = ["S", "M", "L", "XL"]
    const [activeSize, setActiveSize] = useState(0)
    const [counter, setCounter] = useState(1)
  return (
    <div className='header'>
      <div className="header__left">
        <div className="header__left-sm">
            {
                singleProduct?.images?.filter((el,index)=> index < 4)?.map((item,index)=> {
                    return <div className={`${item?.id === activeImg ? 'active__image' : ""} header__sm-item`} key={index} onClick={()=>changeActiveImg(index)}>
                        <img src={item} alt={item?.id}/>
                    </div>
                })
            }
        </div>
        <div className="header__left-lg">
            <img src={activeImage} alt="activeImage" />
        </div>
      </div>
      <div className="header__right">
        <h1 className="header__right-title">{singleProduct?.title} {singleProduct?.brand}</h1>
        <div className="header__right-price">
            <div className='flex gap-[10px]'>
            <h3>${singleProduct?.price}.00</h3>
            <h2 className='text-[gray]'>-${singleProduct?.discountPercentage}.00</h2>
            </div>
            <div>
            <FaStar className='orange__star' size={15}/>
            {/* <FaStar className='orange__star' size={15}/> */}
            {/* <FaStar className='orange__star' size={15}/> */}
            {/* <FaStar className='orange__star' size={15}/> */}
            {/* <FaStar className='gray__star' size={15}/> */}
            <p>{singleProduct?.rating}</p>
            </div>
        </div>
        <div className="header__right-desc">
            <h1>Short Description</h1>
            <p>{singleProduct?.description}</p>
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
            <p className=' capitalize'>Categories: {singleProduct?.category}</p>
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
