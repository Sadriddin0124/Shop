import React, { useState } from "react";
import "./Slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../../assets/header_img.png";
import Button from "../../Button/Button";

const ImgSlider = ({ setSearchClick }) => {
  const images = [
    { id: 1, img: `${Img1}` },
    { id: 1, img: `${Img1}` },
    { id: 1, img: `${Img1}` },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
            <h4 className="slider__top">Welcome to GreenShop</h4>
            <h1 className="slider__title">
              Let’s Make a Better <span>Planet</span>
            </h1>
            <p className="slider__subtitle">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
            <Button text="SHOP NOW"/>
          </div>
          <img
            className="slider__img"
            src={image.img}
            alt={`slide ${index + 1}`}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
