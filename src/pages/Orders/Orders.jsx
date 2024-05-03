import React, { useEffect, useState } from "react";
import "./Orders.scss";
import ProfileSideBar from "../../components/ProfileSideBar/ProfileSideBar";
import { useShopCartStore } from "../../store/CartStore/CartStore";
const Orders = () => {
  const {getAllCarts} = useShopCartStore()
  useEffect(()=> {
    receiveCarts()
  },[])
  const [carts, setCarts] = useState([])
  const receiveCarts = async() => {
    const me = JSON.parse(sessionStorage.getItem("me"))
    const res = await getAllCarts(me?.id)
    console.log(res);
    setCarts(res?.data?.carts)
  }
  return (
    <div className="home">
      <div className="orders">
        <div className="orders__left">
        <ProfileSideBar />
        </div>
        <div className="orders__right">
          <h1>Orders</h1>
          <div className="table table2">
            <div className="table__line">
              <h1 className="table__header">Products</h1>
              <h1 className="table__header">Price</h1>
              <h1 className="table__header">Quantity</h1>
              <h1 className="table__header">Total</h1>
              <div className="table__line2"></div>
            </div>
            <div className="tbody">
              {carts[0]?.products?.map((item, index) => {
              return (
              <div className="tbody__line">
                <div className="tbody__img">
                  <img src={item?.thumbnail} alt={item?.title} />
                  <div>
                    <h1>{item?.title}</h1>
                    <p className="tbody__price">${item?.price}</p>
                  </div>
                </div>
                <div className="tbody__price">${item?.price}</div>
                <div className="tbody__counter">
                  {/* <button>
                      <FaMinus size={12} />
                    </button> */}
                  <h1 className="counter__num">{item?.quantity}</h1>
                  {/* <button>
                      <FaPlus size={12} />
                    </button> */}
                </div>
                <p className="total">${item?.total}</p>
                <button className="delete">{/* <AiOutlineDelete /> */}</button>
              </div>
               ); 
              })} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
