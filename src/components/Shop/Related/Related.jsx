import React, { useEffect, useState } from "react";
import "./Related.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useShopStore } from "../../../store/ShopStore/ShopStore";
import RelatedCard from "./RelatedCard/RelatedCard";
const CarouselSlider = ({ images }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const { getProductFilter } = useShopStore();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [category,setCategory] = useState("")
  useEffect(() => {
    receiveProducts();
  }, []);
  const receiveProducts = async () => {
    const response = await getProductFilter();
    setRelatedProducts(response?.data?.products);
    const category = sessionStorage.getItem("category")
    setCategory(category)
  };
  return (
    <div className="my-[100px]">
      <div className="related__top">
        <h1>Related products</h1>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true} // Change to true or false depending on device type
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={""} // Pass the device type here (desktop, tablet, mobile)
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {relatedProducts
          ?.filter((item) => item?.category === category)
          ?.map((item, index) => {
            return (
              <RelatedCard
                key={index}
                img={item?.images[0]}
                title={item?.title}
                price={item?.price}
                id={item?.id}
                category={item?.category}
              />
            );
          })}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
