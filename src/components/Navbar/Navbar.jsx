import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import Shopping from "../../assets/shopping.png";
import Logout from "../../assets/Logout.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import { getProductSize } from "../../plugins/getProductSize";
import { useShopStore } from "../../store/ShopStore/ShopStore";
import AuthModal from "../Auth/Auth";
const Navbar = () => {
  const {searchProduct} = useShopStore()
  const [navLinks, setNavLinks] = useState([
    { id: 1, text: "Home", path: "" },
    { id: 2, text: "Shop", path: "/shop" },
    { id: 3, text: "Cart", path: "" },
    { id: 4, text: "Blogs", path: "" },
  ]);
  const [activeLinkID, setActiveLinkID] = useState(1);
  const [menu, setMenu] = useState(false);
  const [searchProductValue, setSearchProductValue] = useState([])
  const [savedItem, setSavedItem] = useState(0);
  useEffect(() => {
    let id = +sessionStorage.getItem("navLink");
    if (id) {
      setActiveLinkID(id);
    } else {
      setActiveLinkID(1);
    }
    const itemSize = getProductSize();
    setSavedItem(itemSize.size);
  }, []);
  const searchProducts = async(e) => {
    let value = e.target.value
    const response = await searchProduct(value)
    console.log(response);
    setSearchProductValue(response?.data?.products)
  }
  const changeLink = (id) => {
    setActiveLinkID(id);
    sessionStorage.setItem("navLink", id);
  };
  const [navbarVisible, setNavbarVisible] = useState(false);
  const saveCategory = (category) => {
    sessionStorage.setItem("category", category)
  }
  const [auth, setAuth] = useState(false)
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
                  activeLinkID === item?.id ? "navbar__activeLink" : ""
                }`}
                onClick={() => changeLink(item?.id)}
              >
                <Link to={item?.path}>{item?.text}</Link>
              </li>
            );
          })}
        </ul>
        <div
          className={`nav__search ${
            navbarVisible ? "top-[100px] " : "top-[-100px] "
          }`}
        >
          <CiSearch className="navbar__search" />
          <input type="text" placeholder="Search..." onChange={searchProducts}/>
          <div className={`close__search ${
            navbarVisible ? "block" : "hidden"
          }`} onClick={() => setNavbarVisible((prev) => !prev)}></div>
          <div className={`navbar__search-list ${
            navbarVisible ? "block" : "none"
          }`}>
            {
              searchProductValue?.map((item,index)=> {
                return <Link to={`/single_page/${item?.id}`} className="searchlist__item" key={index} onClick={()=>saveCategory(item?.category)}>
                  <img src={item?.thumbnail} alt={item?.title} />
                  <h1>{item?.title}</h1>
                </Link>
              })
            }
          </div>
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
          <li className="navbar__link cursor-pointer" onClick={()=>setAuth(true)}>
            <img src={Logout} alt="login" />
            <p>Login</p>
          </li>
        </ul>
        <div className="navbar__line"></div>
        <div className="navbar__right">
          <CiSearch
            className="navbar__search"
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
          <button className="navbar__login" onClick={()=>setAuth(true)}>
            <img src={Logout} alt="login" />
            <p>Login</p>
          </button>
          <button className="burger" onClick={() => setMenu((prev) => !prev)}>
            <FaBars size={24} />
          </button>
        </div>
      </div>
      <AuthModal open={auth} toggle={()=>setAuth(false)}/>
    </nav>
  );
};

export default Navbar;
