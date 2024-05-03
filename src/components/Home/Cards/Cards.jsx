import React, { useEffect, useState } from "react";
import "./Cards.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useShopStore } from "../../../store/ShopStore/ShopStore";
import Card from "./Card/Card";
import { getProductSize } from "../../../plugins/getProductSize";

const Plants = () => {
  const { getProducts } = useShopStore();
  const pageActive = +sessionStorage.getItem("activePagePlant");
  useEffect(() => {
    receiveProducts();
    if (pageActive) {
      setActivePage(pageActive);
      setSkip(pageActive * limit);
    } else {
      setActivePage(1);
    }
    const savedItem = JSON.parse(localStorage.getItem("liked"))
    setLiked(savedItem)
  }, []);
  const [productsData, setProductsData] = useState([]);
  const totalPages = productsData?.total;
  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState((pageActive + 1) * limit);
  let pages = [];
  for (let index = 1; index < parseInt(totalPages / limit); index++) {
    pages.push(index);
  }
  const [activePage, setActivePage] = useState(1);
  const receiveProducts = async () => {
    const response = await getProducts(limit, skip);
    console.log(response);
    setProductsData(response?.data);
  };
  const changePage = async (item) => {
    setSkip(item * limit);
    setActivePage(item);
    sessionStorage.setItem("activePagePlant", item);
    const response = await getProducts(limit, skip);
    window.location.reload();
  };
  const prevPage = async (item) => {
    setSkip(item * limit);
    setActivePage(item - 1);
    sessionStorage.setItem("activePagePlant", item - 1);
    const response = await getProducts(limit, skip);
    window.location.reload();
  };
  const nextPage = async (item) => {
    setSkip(item * limit);
    setActivePage(item + 1);
    sessionStorage.setItem("activePagePlant", item + 1);
    const response = await getProducts(limit, skip);
    window.location.reload();
  };
  const [liked, setLiked] = useState([])
  const [activeSlice, setActiveSlice] = useState(3);
  const saveToFav = (id) => {
    liked.push(id)
    console.log(liked);
    localStorage.setItem("liked", JSON.stringify(liked))
    getProductSize()
}
  return (
    <>
      <div className="shops">
        {productsData?.products?.map((item, index) => {
          return (
            <Card
              key={index}
              title={item?.title}
              price={item?.price}
              img={item?.thumbnail}
              id={item?.id}
              saveToFav={saveToFav}
              category={item?.category}
            />
          );
        })}
      </div>
      <div className="shops__pages">
        <button className="shops__page" onClick={() => prevPage(activePage)}>
          <IoIosArrowBack size={22} />
        </button>
        {pages
          ?.slice(activePage - 1, activePage + activeSlice)
          ?.map((item, index) => {
            return (
              <button
                className={`shops__page ${
                  item === activePage ? "shops__page-active" : ""
                }`}
                onClick={() => changePage(item)}
                key={index}
              >
                {item}
              </button>
            );
          })}
        <button className="shops__page" onClick={() => nextPage(activePage)}>
          <IoIosArrowForward size={22} />
        </button>
      </div>
    </>
  );
};

export default Plants;
