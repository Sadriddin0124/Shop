import Plant1 from "../../../assets/plant4.png";
import Plant2 from "../../../assets/plant5.png";
import Plant3 from "../../../assets/plant6.png";
import Plant4 from "../../../assets/plant7.png";
import Plant5 from "../../../assets/plant9.png";
import PlantCard from "../../Home/Plants/PlantCard/PlantCard";
import React, { useEffect, useState } from "react";
import "./Related.scss"; // Import CSS for styling
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useShopStore } from "../../../store/ShopStore/ShopStore";
const CarouselSlider = ({ images }) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
const {getProducts} = useShopStore()
const [relatedPlants, setRelatedPlants] = useState([])
const [limit, setLimit] = useState(18)
const [skip, setSkip] = useState(9)
useEffect(()=> {
    receiveProducts()
},[])
const receiveProducts = async() => {
    const response = await getProducts(limit, skip)
    setRelatedPlants(response?.data?.products)
    console.log(response);
  }
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
    removeArrowOnDeviceType={['tablet', 'mobile']}
    deviceType={''} // Pass the device type here (desktop, tablet, mobile)
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
      {relatedPlants?.map((item, index) => {
        return (
          <PlantCard
            key={index}
            img={item?.images[0]}
            title={item?.title}
            price={item?.price}
          />
        );
      })}
    </Carousel>
    </div>
  );
};

export default CarouselSlider;
