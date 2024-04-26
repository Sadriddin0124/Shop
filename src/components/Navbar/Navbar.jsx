import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import Shopping from "../../assets/shopping.png";
import Logout from "../../assets/Logout.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [navLinks, setNavLinks] = useState([
    { id: 1, text: "Home", path: "" },
    { id: 2, text: "Shop", path: "/shop" },
    { id: 3, text: "Plant Care", path: "" },
    { id: 4, text: "Blogs", path: "" },
  ]);
  const [activeLinkID, setActiveLinkID] = useState(1)
  const [menu, setMenu] = useState(false)
  useEffect(()=> {
    let id = +sessionStorage.getItem("navLink")
    if (id) {
      setActiveLinkID(id)
    }else {
      setActiveLinkID(1)
    }
    const handleResize = () => {
      if (screenRef.current) {
        const { width, height } = screenRef.current.getBoundingClientRect();
        setScreenWidth(width);
      }
    };
    handleResize(); 
  }, [])
  const changeLink = (id) => {
    setActiveLinkID(id)
    sessionStorage.setItem("navLink", id)
  }
  const screenRef = useRef()
  const [screenWidth, setScreenWidth] = useState(null);
  console.log(screenWidth);
  
  return (
    <nav className="nav" ref={screenRef}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className={`navbar__list`}>
          {navLinks?.map((item, index) => {
            return (
              <li key={index} className={`navbar__link ${activeLinkID === item?.id ? "navbar__activeLink" : ""}`} onClick={()=>changeLink(item?.id)}>
                <Link to={item?.path}>{item?.text}</Link>
              </li>
            );
          })}
        </ul>
        <ul className={`navbar__list2 ${menu === true ? "right-[20px]" : "right-[-200px]"} `}>
          {navLinks?.map((item, index) => {
            return (
              <li key={index} className={`navbar__link ${activeLinkID === item?.id ? "navbar__activeLink" : ""}`} onClick={()=>changeLink(item?.id)}>
                <Link to={item?.path}>{item?.text}</Link>
              </li>
            );
          })}
          <li className="navbar__link">
            <img src={Logout} alt="login" />
            <p>Login</p>
          </li>
        </ul>
        <div className="navbar__line"></div>
        <div className="navbar__right">
          <CiSearch className="navbar__search" />
          <div className="navbar__shop">
            <img src={Shopping} alt="" />
          </div>
          <button className="navbar__login">
            <img src={Logout} alt="login" />
            <p>Login</p>
          </button>
        <button className="burger" onClick={()=>setMenu(prev=> !prev)}>
        <FaBars size={24}/>
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
