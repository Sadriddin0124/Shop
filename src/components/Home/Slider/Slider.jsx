import React, { useEffect, useState } from "react";
import "./Slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../Button/Button";
import { useShopStore } from "../../../store/ShopStore/ShopStore";
import { ImPriceTag } from "react-icons/im";

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

  return (
    <Slider {...settings} className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className="slider__card"
          onClick={() => setSearchClick(false)}
        >
          <div className="slider__left">
            <h4 className="slider__top">Welcome to Phoenix Tech</h4>
            <h1 className="slider__title">{image?.title}</h1>
            <p className="slider__subtitle">-{parseInt(image?.discountPercentage)}%</p>
            <Button text="SHOP NOW" />
          </div>
          <div className="slider__img">
            <div className="img">
              <img src={image.thumbnail} alt={`slide ${index + 1}`} />
            </div>
            <div className="slider__price">
              <ImPriceTag className="icon" />
              <p>${image?.price}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
