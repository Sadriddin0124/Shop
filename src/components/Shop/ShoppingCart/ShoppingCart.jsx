import React, { useEffect, useState } from "react";
import "./ShoppingCart.scss";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useShopStore } from "../../../store/ShopStore/ShopStore";

const ShoppingCart = () => {
  const [cartData, setCartData] = useState([]);
  let [savedItems, setSavedItems] = useState([])
  useEffect(()=> {
    receiveProducts()
    const savedItem = localStorage.getItem("basket")?.split(",")
    const numbersArray = savedItem?.map(item => parseInt(item))
    setSavedItems([...numbersArray])
  },[])
  console.log(savedItems);
  const {getProductFilter} = useShopStore()
  const receiveProducts = async() => {
    const response = await getProductFilter()
    console.log(response?.data?.products?.filter(item=> {
      console.log(item.category);
    }));
    setCartData(response?.data?.products)
  }
  const [counter, setCounter] = useState(2)
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
          {cartData?.filter(item=> savedItems.includes(item?.id))?.map((item, index) => {
            return (
              <div key={index} className="tbody__line">
                <div className="tbody__img">
                  <img src={item?.images[0]} alt={item?.title} />
                  <div>
                    <h1>{item?.title}</h1>
                <p className="tbody__price">${item?.price}</p>
                  </div>
                </div>
                <div className="tbody__price">${item?.price}</div>
                  <div className="tbody__counter">
                    <button>
                      <FaMinus size={12} />
                    </button>
                    <h1 className="counter__num">{counter}</h1>
                    <button>
                      <FaPlus size={12} />
                    </button>
                  </div>
                <p className="total">${item?.price * counter}</p>
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
