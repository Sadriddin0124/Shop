import React, { useState } from "react";
import "./ShoppingCart.scss";
import IMG1 from "../../../assets/plant1.png";
import IMG2 from "../../../assets/plant5.png";
import IMG3 from "../../../assets/plant6.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [cartData, setCartData] = useState([
    {
      id: 1,
      img: IMG1,
      title: "Barberton Daisy",
      bottom: "SKU: 1995751877966",
      price: "$119.00",
      counter: 2,
      total: "$238.00",
    },
    {
      id: 2,
      img: IMG2,
      title: "Blushing Bromeliad",
      bottom: "SKU: 19957518757065",
      price: "$139.00",
      counter: 6,
      total: "$834.00",
    },
    {
      id: 3,
      img: IMG3,
      title: "Aluminum Plant",
      bottom: "SKU: 1995751877786",
      price: "$179.00",
      counter: 9,
      total: "$1,611.00",
    },
  ]);
  return (
    <div className="cart">
      <div className="table">
          <div className="table__line">
            <h1 className="table__header">Products</h1>
            <h1 className="table__header">Price</h1>
            <h1 className="table__header">Quantity</h1>
            <h1 className="table__header">Total</h1>
          <div className="table__line2"></div>
        </div>
        <div className="tbody">
          {cartData?.map((item, index) => {
            return (
              <div key={index} className="tbody__line">
                <div className="tbody__img">
                  <img src={item?.img} alt={item?.title} />
                  <div>
                    <h1>{item?.title}</h1>
                    <p>{item?.bottom}</p>
                <p className="tbody__price">{item?.price}</p>
                  </div>
                </div>
                <div className="tbody__price">{item?.price}</div>
                  <div className="tbody__counter">
                    <button>
                      <FaMinus size={12} />
                    </button>
                    <h1 className="counter__num">{item?.counter}</h1>
                    <button>
                      <FaPlus size={12} />
                    </button>
                  </div>
                <p className="total">{item?.total}</p>
                  <button className="delete">
                    <AiOutlineDelete />
                  </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cart__card">
        <h1 className="card__title">Cart Totals</h1>
        <p className="card__top">Coupon Apply</p>
        <div className="card__top-join">
          <input
            type="text"
            className="card__top-input"
            placeholder="enter your email address..."
          />
          <button className="card__top-btn">Join</button>
        </div>
        <div className="card__price">
          <p>Subtotal</p>
          <h1>$2,683.00</h1>
        </div>
        <div className="card__price">
          <p>Coupon Discount</p>
          <p>(-) 00.00</p>
        </div>
        <div className="card__price">
          <p>Shiping</p>
          <h1>$16.00</h1>
        </div>
        <p className="card__view">View shipping charge</p>
        <div className="card__price">
          <h3>Total</h3>
          <h2>$2,699.00</h2>
        </div>
        <button className="card__btn">Proceed To Checkout</button>
        <Link className="card__link">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
