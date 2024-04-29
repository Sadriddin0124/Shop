import React, { useEffect, useState } from "react";
import "./Card.scss";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoBasketOutline } from "react-icons/io5";
import { IoMdBasket } from "react-icons/io";
import { getProductSize } from "../../../../plugins/getProductSize";
import { Link } from "react-router-dom";
const Card = ({ img, title, price, id, saveToBasket, category }) => {
  const [heartActive, setHeartActive] = useState(false);
  const [basketActive, setBasketActive] = useState(false);
  const saveBasket = (id) => {
    saveToBasket(id);
    setBasketActive(!basketActive);
    getProductSize();
  };
  const saveCategory = () => {
    sessionStorage.setItem("category", category)
  }
  return (
    <div className="shop__card">
      <div className="shop_card__img">
        <Link className="shop__link" to={`/single_page/${id}`} onClick={saveCategory}>
          <img src={img} alt={title} />
        </Link>
        <FaRegHeart
          className={`heart__outline ${heartActive ? "disliked" : "liked"}`}
          onClick={() => setHeartActive((prev) => !prev)}
        />
        <FaHeart
          className={`heart__regular ${heartActive ? "liked" : "disliked"}`}
          onClick={() => setHeartActive((prev) => !prev)}
        />
      </div>
      <div className="shop_card__footer">
        <h1>{title}</h1>
        <h3>${price}</h3>
        <button className="basket" onClick={() => saveBasket(id)}>
          <IoBasketOutline
            className={`icon ${basketActive ? "hidden" : "block"}`}
          />
          <IoMdBasket className={`icon ${basketActive ? "block" : "hidden"}`} />
        </button>
      </div>
    </div>
  );
};

export default Card;
