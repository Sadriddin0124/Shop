import React, { useEffect, useState } from "react";
import "./ShoppingCart.scss";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useShopStore } from "../../../store/ShopStore/ShopStore";
import { useShopCartStore } from "../../../store/CartStore/CartStore";
const ShoppingCart = () => {
  const {addCart} = useShopCartStore()
  const [cartData, setCartData] = useState([]);
  let [savedItems, setSavedItems] = useState([])
  const [totalPrice, setTotalPrice] = useState([])
  let SavedProducts = cartData?.filter(item=> savedItems.includes(item?.id))
  useEffect(()=> {
    receiveProducts()
    const savedProducts = JSON.parse(sessionStorage.getItem("products"))
    if (savedProducts) {
      savedProducts?.map((item)=> {
        savedItems.push(item?.id)
        counter.push(item?.quantity)
      })
    }
    let totalPrice = []
    if (SavedProducts) {
      
      SavedProducts?.map((item,index)=> {
        totalPrice.push(item?.price * counter[index])
      })
    }
    let total = totalPrice.reduce((a, b)=> a + b, 0)
    setTimeout(() => {
      setTotalPrice(total);
    }, 2000);
  },[])
  const {getProductFilter} = useShopStore()
  const receiveProducts = async() => {
    const response = await getProductFilter()
    setCartData(response?.data?.products)
  }
  const [counter, setCounter] = useState([])
  const [number, setNumber] = useState(0)
  const addNumber = async() => {
    let result = JSON.stringify({products: SavedProducts, number: number})
    const compressedData = btoa(result);
    console.log(compressedData);
    try {
      await navigator.clipboard.writeText(compressedData);
      // alert('Text copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy text: ', error);
      // alert('Failed to copy text. Please try again.');
    }
    // alert('Text copied to clipboard!');
    // const decompressedData = atob("eyJwcm9kdWN0cyI6W3siaWQiOjIsInRpdGxlIjoiaVBob25lIFgiLCJkZXNjcmlwdGlvbiI6IlNJTS1GcmVlLCBNb2RlbCBBMTkyMTEgNi41LWluY2ggU3VwZXIgUmV0aW5hIEhEIGRpc3BsYXkgd2l0aCBPTEVEIHRlY2hub2xvZ3kgQTEyIEJpb25pYyBjaGlwIHdpdGggLi4uIiwicHJpY2UiOjg5OSwiZGlzY291bnRQZXJjZW50YWdlIjoxNy45NCwicmF0aW5nIjo0LjQ0LCJzdG9jayI6MzQsImJyYW5kIjoiQXBwbGUiLCJjYXRlZ29yeSI6InNtYXJ0cGhvbmVzIiwidGh1bWJuYWlsIjoiaHR0cHM6Ly9jZG4uZHVtbXlqc29uLmNvbS9wcm9kdWN0LWltYWdlcy8yL3RodW1ibmFpbC5qcGciLCJpbWFnZXMiOlsiaHR0cHM6Ly9jZG4uZHVtbXlqc29uLmNvbS9wcm9kdWN0LWltYWdlcy8yLzEuanBnIiwiaHR0cHM6Ly9jZG4uZHVtbXlqc29uLmNvbS9wcm9kdWN0LWltYWdlcy8yLzIuanBnIiwiaHR0cHM6Ly9jZG4uZHVtbXlqc29uLmNvbS9wcm9kdWN0LWltYWdlcy8yLzMuanBnIiwiaHR0cHM6Ly9jZG4uZHVtbXlqc29uLmNvbS9wcm9kdWN0LWltYWdlcy8yL3RodW1ibmFpbC5qcGciXX0seyJpZCI6MjEsInRpdGxlIjoiLSBEYWFsIE1hc29vciA1MDAgZ3JhbXMiLCJkZXNjcmlwdGlvbiI6IkZpbmUgcXVhbGl0eSBCcmFuZGVkIFByb2R1Y3QgS2VlcCBpbiBhIGNvb2wgYW5kIGRyeSBwbGFjZSIsInByaWNlIjoyMCwiZGlzY291bnRQZXJjZW50YWdlIjo0LjgxLCJyYXRpbmciOjQuNDQsInN0b2NrIjoxMzMsImJyYW5kIjoiU2FhZiAmIEtoYWFzIiwiY2F0ZWdvcnkiOiJncm9jZXJpZXMiLCJ0aHVtYm5haWwiOiJodHRwczovL2Nkbi5kdW1teWpzb24uY29tL3Byb2R1Y3QtaW1hZ2VzLzIxL3RodW1ibmFpbC5wbmciLCJpbWFnZXMiOlsiaHR0cHM6Ly9jZG4uZHVtbXlqc29uLmNvbS9wcm9kdWN0LWltYWdlcy8yMS8xLnBuZyIsImh0dHBzOi8vY2RuLmR1bW15anNvbi5jb20vcHJvZHVjdC1pbWFnZXMvMjEvMi5qcGciLCJodHRwczovL2Nkbi5kdW1teWpzb24uY29tL3Byb2R1Y3QtaW1hZ2VzLzIxLzMuanBnIl19XSwibnVtYmVyIjowfQ==")
      //  console.log(decompressedData);
      let products = JSON.parse.sessionStorage.getItem("products")
      let me = JSON.parse.sessionStorage.getItem("me")
      const response = await addCart({userId: me?.id, products: products})
      console.log(response);
  }
  const navigate = useNavigate()
  const purchaseProducts = () => {
    sessionStorage.removeItem("products")
  }
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
          {SavedProducts?.map((item, index) => {
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
                    <h1 className="counter__num">{counter[index]}</h1>
                    <button>
                      <FaPlus size={12} />
                    </button>
                  </div>
                <p className="total">${item?.price * counter[index]}</p>
                  <button className="delete">
                    <AiOutlineDelete />
                  </button>
              </div>
            );
          })}
          <div>Total: ${totalPrice}</div>
        </div>
      </div>
      <div className="cart__card">
        <h1 className="card__title">Cart Totals</h1>
        <p className="card__top">Coupon Apply</p>
        <div className="card__top-join">
          <input
            type="text"
            className="card__top-input"
            placeholder="enter your number..."
            onChange={(e)=>setNumber(e.target.value)}
            defaultValue={"+998 "}
          />
          <button className="card__top-btn" onClick={addNumber}>Add</button>
        </div>
        <div className="card__price">
          <h3>Total</h3>
          <h2>${totalPrice}</h2>
        </div>
        <Link to="https://t.me/farkhodo_v1ch" className="card__btn" onClick={purchaseProducts}>Proceed To Checkout</Link>
        <Link className="card__link" to="/">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
