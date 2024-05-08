import React, { useEffect, useState } from "react";
import "./Slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../Button/Button";
import { useShopStore } from "../../../store/ShopStore/ShopStore";
import { ImPriceTag } from "react-icons/im";
import { Link } from "react-router-dom";

const ImgSlider = ({ setSearchClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const { getProductSlider } = useShopStore();
  useEffect(() => {
    receiveProducts();
  }, []);
  const [images, setImages] = useState([]);
  const receiveProducts = async () => {
    const response = await getProductSlider();
    console.log(response);
    setImages(response?.data?.products);
  };
  const saveCategory = (category) => {
    sessionStorage.setItem("category", category)
  }
  return (
    <Slider {...settings} className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className="slider__card relative"
          onClick={() => setSearchClick(false)}
        >
          <div className="slider__left">
            <h4 className="slider__top">Welcome to Phoenix Tech</h4>
            <h1 className="slider__title">{image?.title}</h1>
            <h3 className="slider__subtitle">discount: -{parseInt(image?.discountPercentage)}%</h3>
            <h3 className="text-[22px] font-[500] text-green-600">${image?.price}</h3>
            <Link to={`/single_page/${image?.id}`} className="w-[200%] h-[100%] absolute left-0" onClick={()=>saveCategory(image?.category)}>
            </Link>
          </div>
          <div className="slider__img">
            <img src={image.thumbnail} alt={`slide ${index + 1}`} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
