import React from "react";
import "./SinglePage.scss";
import ShopHeader from "../../components/Shop/ShopHeader/ShopHeader";
import Footer from "../../components/Home/Footer/Footer";
import ShopDesc from "../../components/Shop/ShopDesc/ShopDesc";
import IMG1 from "../../assets/plant1.png";
import IMG2 from "../../assets/plant2.png";
import IMG3 from "../../assets/plant3.png";
import CarouselSlider from "../../components/Shop/Related/Related";
const SinglePage = () => {
  return (
    <div className="home">
      <h1 className="shop_route">Home / Shop</h1>
      <ShopHeader />
      <ShopDesc />
      <CarouselSlider />
      <Footer />
    </div>
  );
};

export default SinglePage;
