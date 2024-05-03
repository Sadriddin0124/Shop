import React, { useEffect, useState } from 'react'
import "./Favourites.scss"
import ProfileSideBar from '../../components/ProfileSideBar/ProfileSideBar'
import Card from '../../components/Home/Cards/Card/Card'
import { useShopStore } from '../../store/ShopStore/ShopStore'
const Favourites = () => {
  const {getProductFilter} = useShopStore()
  const [liked, setLiked] = useState([])
  useEffect(() => {
    receiveProducts();
    const savedItem = JSON.parse(localStorage.getItem("liked"))
    setLiked(savedItem);
  }, []);
  const [productsData, setProductsData] = useState([]);
  const receiveProducts = async () => {
    const response = await getProductFilter();
    console.log(response);
    setProductsData(response?.data?.products);
  };
  console.log(liked);
  const Unlike = () => {

  }
  return (
    <div className='home'>
      <div className="liked">
        <div className='liked__sidebar'>
        <ProfileSideBar/>
        </div>
        <div className='liked__cards'>
        {productsData?.filter(item=> liked.includes(item?.id))?.map((item, index) => {
          return (
            <Card
              key={index}
              title={item?.title}
              price={item?.price}
              img={item?.thumbnail}
              id={item?.id}
              Unlike={Unlike}
              category={item?.category}
            />
          );
        })}
        </div>
      </div>
    </div>
  )
}
export default Favourites
