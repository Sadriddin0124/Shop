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
      <table className="table">
        <thead>
          <tr className="table__line">
            <th className="table__header">Products</th>
            <th className="table__header">Price</th>
            <th className="table__header">Quantity</th>
            <th className="table__header">Total</th>
          </tr>
          <tr className="table__line2"></tr>
        </thead>
        <tbody>
          {cartData?.map((item, index) => {
            return (
              <tr key={index} className="tbody__line">
                <td className="tbody__img">
                  <img src={item?.img} alt={item?.title} />
                  <div>
                    <h1>{item?.title}</h1>
                    <p>{item?.bottom}</p>
                  </div>
                </td>
                <td className="tbody__price">{item?.price}</td>
                <td>
                  <div className="tbody__counter">
                    <button>
                      <FaMinus size={12} />
                    </button>
                    <h1 className="counter__num">{item?.counter}</h1>
                    <button>
                      <FaPlus size={12} />
                    </button>
                  </div>
                </td>
                <td>{item?.total}</td>
                <td>
                  <button className="delete">
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
