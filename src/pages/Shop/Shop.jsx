import React from "react";
import "./Shop.scss";
import ShopHeader from "../../components/Shop/ShopHeader/ShopHeader";
import Footer from "../../components/Home/Footer/Footer";
import ShopDesc from "../../components/Shop/ShopDesc/ShopDesc";
import Related from "../../components/Shop/Related/Related";
import ShoppingCart from "../../components/Shop/ShoppingCart/ShoppingCart";
import IMG1 from "../../assets/plant1.png";
import IMG2 from "../../assets/plant2.png";
import IMG3 from "../../assets/plant3.png";
import CarouselSlider from "../../components/Shop/Related/Related";
const Shop = () => {
  const images = [IMG1, IMG2, IMG3];
  return (
    <div className="home">
      <h1 className="shop_route">Home / Shop</h1>
      <ShopHeader />
      <ShoppingCart />
      <ShopDesc />
      {/* <Related/> */}
      <CarouselSlider images={images} />
      <Footer />
    </div>
  );
};

export default Shop;
