import React, { useEffect, useState } from "react";
import "./Card.scss";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { getProductSize } from "../../../../plugins/getProductSize";
import { Link } from "react-router-dom";
const Card = ({ img, title, price, id, saveToFav, category }) => {
  const [heartActive, setHeartActive] = useState(false);
  const [liked, setLiked] = useState([])
  useEffect(()=> {
    const savedItem = JSON.parse(localStorage.getItem("liked"))
    if (savedItem) {
      setLiked(savedItem)
    }
    if (savedItem?.includes(id)) {
      setHeartActive(true)
    }else {
      setHeartActive(false)
    }
  }, [])
  const saveFav = (id) => {
    saveToFav(id);
    getProductSize();
    setHeartActive(!heartActive)
  };
  const disLiked = (id) => {
    const savedItem = JSON.parse(localStorage.getItem("liked"))
    setLiked(savedItem)
    setHeartActive(!heartActive)
    let filter = liked?.filter(item=> item !== id)
    localStorage.setItem("liked", JSON.stringify(filter))
  }
  const saveCategory = () => {
    sessionStorage.setItem("category", category)
  }
  return (
    <div className="shop__card">
      <div className="shop_card__img">
        <Link className="shop__link" to={`/single_page/${id}`} onClick={saveCategory}>
          <img src={img} alt={title} />
        </Link>
        <button className="heart">
        <FaRegHeart
          className={`heart__outline ${heartActive ? "disliked" : "liked"}`}
          onClick={() => saveFav(id)}
        />
        <FaHeart
          className={`heart__regular ${heartActive ? "liked" : "disliked"}`}
          onClick={() => disLiked(id)}
        />
        </button>
      </div>
      <div className="shop_card__footer">
        <h1>{title}</h1>
        <h3>${price}</h3>
      </div>
    </div>
  );
};

export default Card;
