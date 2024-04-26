import React from "react";
import "./PlantCard.scss";
const PlantCard = ({ img, title, price }) => {
  return (
    <div className="plantcard">
      <div className="plantcard__img">
        <img src={img} alt={title} />
      </div>
      <div className="plantcard__footer">
        <h1>{title}</h1>
        <h3>$ {price}</h3>
      </div>
    </div>
  );
};

export default PlantCard;
