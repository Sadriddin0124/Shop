import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import Shopping from "../../assets/shopping.png";
import Logout from "../../assets/Logout.png";
import { Link } from "react-router-dom";
import { CiSearch, CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import { getProductSize } from "../../plugins/getProductSize";
import { useShopStore } from "../../store/ShopStore/ShopStore";
import AuthModal from "../Auth/Auth";
import { GoHeart, GoHome } from "react-icons/go";
import { MdFilterList } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { PiHandbag } from "react-icons/pi";
const Navbar = () => {
  const { searchProduct } = useShopStore();
  const [navLinks, setNavLinks] = useState([
    { id: 1, text: "Home", path: "", icon: <GoHome /> },
    { id: 2, text: "Category", path: "/category", icon: <BiCategory /> },
    { id: 3, text: "Basket", path: "/cart", icon: <PiHandbag /> },
    { id: 4, text: "Favourites", path: "/liked", icon: <GoHeart /> },
    { id: 5, text: "Profile", path: "/profile", icon: <CiUser /> },
  ]);
  const [activeLinkID, setActiveLinkID] = useState(1);
  const [menu, setMenu] = useState(false);
  const [searchProductValue, setSearchProductValue] = useState([]);
  const [savedItem, setSavedItem] = useState(0);
  const [status, setStatus] = useState('');
  const [url, setUrl] = useState("")
  console.log(url);
  useEffect(() => {
    const url = "/" + window.location.href.split("/")[3]
    setUrl(url)
    let me = JSON.parse(sessionStorage.getItem("me"))
    if (me) {
      setStatus(me)
    }else {
      setStatus(me)
    }
    const itemSize = getProductSize();
    setSavedItem(itemSize.size);
  }, []);
  const searchProducts = async (e) => {
    let value = e.target.value;
    const response = await searchProduct(value);
    setSearchProductValue(response?.data?.products);
  };
  const [navbarVisible, setNavbarVisible] = useState(false);
  const saveCategory = (category) => {
    sessionStorage.setItem("category", category);
  };
  const [auth, setAuth] = useState(false);
  return (
    <nav className="nav">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className={`navbar__list`}>
          {navLinks?.map((item, index) => {
            return (
              <li
                key={index}
                className={`navbar__link ${
                  url === item?.path ? "navbar__active-link" : ""
                }`}
                onClick={() => changeLink(item?.id)}
              >
                <Link className="mobile" to={item?.path} onClick={()=>setUrl(item?.path)}>
                  {item?.icon}
                </Link>
                <Link className="desktop" to={item?.path} onClick={()=>setUrl(item?.path)}>
                  {item?.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="search__container">
          <div
            className={`nav__search ${
              navbarVisible ? "top-[100px] " : "top-[-100px] "
            }`}
          >
            <CiSearch className="navbar__search" />
            <input
              type="text"
              placeholder="Search..."
              onChange={searchProducts}
            />
            <div
              className={`close__search ${navbarVisible ? "block" : "hidden"}`}
              onClick={() => setNavbarVisible((prev) => !prev)}
            ></div>
            <div
              className={`navbar__search-list ${
                navbarVisible ? "block" : "none"
              }`}
            >
              {searchProductValue?.map((item, index) => {
                return (
                  <Link
                    to={`/single_page/${item?.id}`}
                    className="searchlist__item"
                    key={index}
                    onClick={() => saveCategory(item?.category)}
                  >
                    <img src={item?.thumbnail} alt={item?.title} />
                    <h1>{item?.title}</h1>
                  </Link>
                );
              })}
            </div>
          </div>
          <button className="profile" onClick={() => setMenu((prev) => !prev)}>
            <MdFilterList size={24} />
          </button>
        </div>
        <ul
          className={`navbar__list2 ${
            menu === true ? "right-[20px]" : "right-[-200px]"
          } `}
        >
          {navLinks?.map((item, index) => {
            return (
              <li
                key={index}
                className={`navbar__link ${
                  activeLinkID === item?.id ? "navbar__activeLink" : ""
                }`}
                onClick={() => changeLink(item?.id)}
              >
                <Link to={item?.path}>{item?.text}</Link>
              </li>
            );
          })}
          <li
            className="navbar__link cursor-pointer"
            onClick={() => setAuth(true)}
          >
            <img src={Logout} alt="login" />
            <p>Login</p>
          </li>
        </ul>
        <div className="navbar__line"></div>
        <div className="navbar__right">
          <CiSearch
            className="navbar__search ml-[20px]"
            onClick={() => setNavbarVisible((prev) => !prev)}
          />
          <Link to="/cart" className="navbar__shop">
            <CiShoppingCart size={28} />
            <p
              className={`navbar__item-num ${savedItem === 0 ? "hidden" : ""}`}
            >
              {savedItem}
            </p>
          </Link>
          <button className={`navbar__login ${status ? "none" : ""}`} onClick={() => setAuth(true)}>
            <img src={Logout} alt="login" />
            <p>Login</p>
          </button>
          <Link to="/profile" className="profile__img">
            <img src={status?.image} alt={status?.firstName} />
          </Link>
          <button className="burger" onClick={() => setMenu((prev) => !prev)}>
            <FaBars size={24} />
          </button>
        </div>
      </div>
      <AuthModal open={auth} toggle={() => setAuth(false)} />
    </nav>
  );
};

export default Navbar;
