import React from "react";
import "./SinglePage.scss";
import ShopHeader from "../../components/Shop/ShopHeader/ShopHeader";
import Footer from "../../components/Home/Footer/Footer";
import ShopDesc from "../../components/Shop/ShopDesc/ShopDesc";
import CarouselSlider from "../../components/Shop/Related/Related";
const SinglePage = ({setSavedSize}) => {
  return (
    <div className="home">
      <h1 className="shop_route">Home / Shop</h1>
      <ShopHeader setSavedSize={setSavedSize}/>
      <CarouselSlider />
      <Footer />
    </div>
  );
};

export default SinglePage;
