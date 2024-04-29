import React from "react";
import "./RelatedCard.scss";
import { Link } from "react-router-dom";
const RelatedCard = ({ img, title, price, id, category }) => {
  const saveCategory = () => {
    sessionStorage.setItem("category", category)
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  return (
    <Link to={`/single_page/${id}`} className="related__card" onClick={saveCategory}>
      <div className="related__card-img">
        <img src={img} alt={title} />
      </div>
      <div className="related__card-footer">
        <h1>{title}</h1>
        <h3>$ {price}</h3>
      </div>
    </Link>
  );
};

export default RelatedCard;
