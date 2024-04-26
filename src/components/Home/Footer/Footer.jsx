import React, { useState } from "react";
import "./Footer.scss";
import Footer1 from "../../../assets/footer1.png";
import Footer2 from "../../../assets/footer2.png";
import Footer3 from "../../../assets/footer3.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneCallLight } from "react-icons/pi";
import FooterLogo from "../../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Union from "../../../assets/Union.png";
import Payment from "../../../assets/footerPayment.png";
const Footer = () => {
  const [footerTop, setFooterTop] = useState([
    {
      id: 1,
      img: Footer1,
      title: "Garden Care",
      subtitle:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
    },
    {
      id: 2,
      img: Footer2,
      title: "Plant Renovation",
      subtitle:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
    },
    {
      id: 3,
      img: Footer3,
      title: "Watering Graden",
      subtitle:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
    },
  ]);
  const [footerBottom, setFooterBottom] = useState([
    {
      id: 1,
      title: "My Account",
      text: [
        { value: "My Account" },
        { value: "Our stores" },
        { value: "Contact us" },
        { value: "Career" },
        { value: "Specials" },
      ],
    },
    {
      id: 2,
      title: "Help & Guide",
      text: [
        { value: "Help Center" },
        { value: "How to Buy" },
        { value: "Shipping & Delivery" },
        { value: "Product Policy" },
        { value: "How to Return" },
      ],
    },
    {
      id: 3,
      title: "Categories",
      text: [
        { value: "House Plants" },
        { value: "Potter Plants" },
        { value: "Seeds" },
        { value: "Small Plants" },
        { value: "Accessories" },
      ],
    },
  ]);
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-cards">
          {footerTop?.map((item, index) => {
            return (
              <div className="footer__top-card" key={index}>
                <div className="footer__top-img">
                  <img src={item?.img} alt={item?.title} />
                </div>
                <h1 className="footer__top-title">{item?.title}</h1>
                <p className="footer__top-subtitle">{item?.subtitle}</p>
              </div>
            );
          })}
          <div className="footer__top-card2">
            <h1 className="footer__top-title">
              Would you like to join newsletters?
            </h1>
            <div className="footer__top-join">
              <input
                type="text"
                className="footer__top-input"
                placeholder="enter your email address..."
              />
              <button className="footer__top-btn">Join</button>
            </div>
            <p className="footer__top-subtitle2">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="footer__center">
        <img
          src={FooterLogo}
          alt="footer__Center"
          className="footer__center-img"
        />
        <div className="footer__center-item">
          <HiOutlineLocationMarker className="footer__center-icon" />
          <p className="footer__center-text">
            70 West Buckingham Ave. Farmingdale, NY 11735
          </p>
        </div>
        <div className="footer__center-item">
          <HiOutlineMail className="footer__center-icon" />
          <p className="footer__center-text">contact@greenshop.com</p>
        </div>
        <div className="footer__center-item">
          <PiPhoneCallLight className="footer__center-icon" />
          <p className="footer__center-text">+88 01911 717 490</p>
        </div>
      </div>
      <div className="footer__bottom">
        {footerBottom?.map((item, index) => {
          return (
            <div className="footer__bottom-item" key={index}>
              <h1 className="footer__bottom-title">{item?.title}</h1>
              {item?.text?.map((el, index) => (
                <p className="footer__bottom-subtitle" key={index}>
                  {el.value}
                </p>
              ))}
            </div>
          );
        })}
        <div className="footer__bottom-item2">
          <h1 className="footer__bottom-title">Social Media</h1>
          <div className="footer__bottom-media">
            <FaFacebookF className="footer__bottom-icon" />
            <FaInstagram className="footer__bottom-icon" />
            <FaTwitter className="footer__bottom-icon" />
            <FaLinkedinIn className="footer__bottom-icon" />
            <div className="footer__bottom-icon">
              <img src={Union} alt="union" />
            </div>
          </div>
          <h1 className="footer__bottom-title">We accept</h1>
          <img src={Payment} alt="payment" />
        </div>
      </div>
      <div className="footer__under">
        <p>© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
