import React, { useEffect, useState } from "react";
import "./ShopHeader.scss";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaMinus,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useShopStore } from "../../../store/ShopStore/ShopStore";

const ShopHeader = ({setSavedSize}) => {
  const { getSingleProduct } = useShopStore();
  const [singleProduct, setSingleProduct] = useState("");
  const [activeImg, setActiveImg] = useState(0);
  const [heart, setHeart] = useState(false);
  const id = window.location.href.split("/")[4];
  useEffect(() => {
    let index = +sessionStorage.getItem("activeImg");
    if (index) {
      setActiveImg(index);
    } else {
      setActiveImg(0);
    }
    receiveProduct();
    const savedItem = JSON.parse(localStorage.getItem("liked"));
    if (savedItem) {
      setLiked(savedItem);
    }
    if (savedItem?.includes(id)) {
      setHeart(true);
    } else {
      setHeart(false);
    }
    const savedProducts = JSON.parse(sessionStorage.getItem("products"))
    if (savedProducts) {
      setProducts(savedProducts)
    }else {
      setProducts([])
    }
    
  }, []);
  const receiveProduct = async () => {
    const response = await getSingleProduct(id);
    setSingleProduct(response?.data);
  };
  let activeImage = singleProduct?.images?.find(
    (item, index) => index === activeImg
  );
  const changeActiveImg = (index) => {
    console.log(index);
    sessionStorage.setItem("activeImg", index);
    setActiveImg(index);
  };
  const [counter, setCounter] = useState(1);
  const [liked, setLiked] = useState([]);
  const saveToFav = (id) => {
    liked.push(Number(id));
    localStorage.setItem("liked", JSON.stringify(liked));
    setHeart(true);
    console.log(heart);
  };
  const disLiked = (id) => {
    const savedItem = JSON.parse(localStorage.getItem("liked"));
    setLiked(savedItem);
    setHeart(false);
    console.log(heart);
    let filter = liked?.filter((item) => item !== Number(id));
    localStorage.setItem("liked", JSON.stringify(filter));
  };
  const [products, setProducts] = useState([])
  const addToCart = () => {
    let product = { id: singleProduct?.id, quantity: counter }
    let filter = products?.filter((item=> item?.id !== singleProduct?.id))
    filter.push(product)
    sessionStorage.setItem("products", JSON.stringify(filter));
    setSavedSize(filter.length)
  };
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left-sm">
          {singleProduct?.images
            ?.filter((el, index) => index < 4)
            ?.map((item, index) => {
              return (
                <div
                  className={`${
                    item?.id === activeImg ? "active__image" : ""
                  } header__sm-item`}
                  key={index}
                  onClick={() => changeActiveImg(index)}
                >
                  <img src={item} alt={item?.id} />
                </div>
              );
            })}
        </div>
        <div className="header__left-lg">
          <img src={activeImage} alt="activeImage" />
        </div>
      </div>
      <div className="header__right">
        <h1 className="header__right-title">
          {singleProduct?.title} {singleProduct?.brand}
        </h1>
        <div className="header__right-price">
          <div className="flex gap-[10px]">
            <h3>${singleProduct?.price}.00</h3>
            <h2 className="text-[gray]">
              -${singleProduct?.discountPercentage}.00
            </h2>
          </div>
          <div>
            <FaStar className="orange__star" size={15} />
            <p>{singleProduct?.rating}</p>
          </div>
        </div>
        <div className="header__right-desc">
          <h1>Short Description</h1>
          <p>{singleProduct?.description}</p>
        </div>
        <div className="header__right-counter">
          <div className="right__counter">
            <button
              onClick={() => setCounter((prev) => prev - 1)}
              disabled={counter === 1 ? true : false}
            >
              <FaMinus />
            </button>
            <h1 className="counter__num">{counter}</h1>
            <button onClick={() => setCounter((prev) => prev + 1)}>
              <FaPlus />
            </button>
          </div>
          <button className="right__btn-outline" onClick={addToCart}>
            ADD TO CART
          </button>
          <button className="right__btn-outline2">
            <CiHeart
              size={24}
              onClick={() => saveToFav(id)}
              className={heart ? "hidden" : "block"}
              />
            <FaHeart
              onClick={() => disLiked(id)}
              size={18}
              className={heart ? "block" : "hidden"}
            />
          </button>
        </div>
        <div className="right__footer">
          <p>SKU: 1995751877966</p>
          <p className=" capitalize">Categories: {singleProduct?.category}</p>
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
  );
};

export default ShopHeader;
