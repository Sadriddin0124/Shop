import React, { useEffect, useState } from "react";
import "./Main.scss";
import Button from "../../Button/Button";
import MainLeftImage from "../../../assets/main__left.png";
import Plants from "../Plants/Plants";
import NewArrivals from "../New Arrivals/NewArrivals";
import Sale from "../Sale/Sale";
const Main = () => {
  const [categories, setCategories] = useState([
    { id: 1, text: "House Plants", num: "(33)" },
    { id: 2, text: "Potter Plants", num: "(12)" },
    { id: 3, text: "Seeds", num: "(65)" },
    { id: 4, text: "Small Plants", num: "(39)" },
    { id: 5, text: "Big Plants", num: "(23)" },
    { id: 6, text: "Succulents", num: "(17)" },
    { id: 7, text: "Trerrariums", num: "(19)" },
    { id: 8, text: "Gardening", num: "(13)" },
    { id: 9, text: "Accessories", num: "(18)" },
  ]);
  const [size, setSize] = useState([
    { id: 10, text: "Small", num: "(119)" },
    { id: 11, text: "Medium", num: "(86)" },
    { id: 12, text: "Large", num: "(78)" },
  ]);
  const [activeCategory, setActiveCategory] = useState(1);
  const [activeMainLink, setActiveMainLink] = useState(1);
  useEffect(() => {
    let id = +sessionStorage.getItem("categoryID");
    if (id) {
      setActiveCategory(id);
    } else {
      setActiveCategory(1);
    }
    let id2 = +sessionStorage.getItem("mainID");
    if (id2) {
      setActiveMainLink(id2);
    } else {
      setActiveMainLink(1);
    }
  }, []);
  const [rightNav, setRightNav] = useState([
    { id: 1, text: "All Plants" },
    { id: 2, text: "New Arrivals" },
    { id: 3, text: "Sale" },
  ]);
  const changeCategory = (id) => {
    sessionStorage.setItem("categoryID", id);
    setActiveCategory(id);
  };
  const changeMainPart = (id) => {
    sessionStorage.setItem("mainID", id);
    setActiveMainLink(id);
  };
  const [components, setComponents] = useState([
    {id: 1, component: <Plants/>},
    {id: 2, component: <NewArrivals/>},
    {id: 3, component: <Sale/>},
  ])
  return (
    <div className="main__container">
      <div className="main__left">
        <div className="main__categories">
          <h4 className="main__left-title">Categories</h4>
          <div className="main__categories-list">
            {categories?.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => changeCategory(item?.id)}
                  className={
                    activeCategory === item?.id ? "main__activeCategory" : ""
                  }
                >
                  <p>{item?.text}</p>
                  <p>{item?.num}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="main__price">
          <h4 className="main__left-title">Price Range</h4>
          <div className="main__slider">
            <div className="main__slider-left"></div>
            <div className="main__slider-right"></div>
          </div>
          <div className="main__left-button">
            <Button text="Filter" icon="" />
          </div>
        </div>
        <div className="main__categories">
          <h4 className="main__left-title">Categories</h4>
          <div className="main__categories-list">
            {size?.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => changeCategory(item?.id)}
                  className={
                    activeCategory === item?.id ? "main__activeCategory" : ""
                  }
                >
                  <p>{item?.text}</p>
                  <p>{item?.num}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="main__left-img">
          <img src={MainLeftImage} alt="main__left" />
        </div>
      </div>
      <div className="main__right">
        <div className="main__right-nav">
          <ul className="main__right-navList">
            {rightNav?.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`main__right-navLink ${
                    activeMainLink === item?.id ? "activeMainLink" : ""
                  }`}
                  onClick={() => changeMainPart(item?.id)}
                >
                  {item?.text}
                </li>
              );
            })}
          </ul>
          <div>
            <p>Sort by: default sorting </p>
          </div>
        </div>
        {
            components?.filter(item=> item?.id === activeMainLink).map((item,index)=> {
                return <div key={item?.id}>
                    {item?.component}
                </div>
            })
        }
      </div>
    </div>
  );
};

export default Main;
