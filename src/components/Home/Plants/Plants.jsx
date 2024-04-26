import React, { useEffect, useState } from 'react'
import PlantCard from './PlantCard/PlantCard'
import Plant1 from "../../../assets/plant1.png"
import Plant2 from "../../../assets/plant2.png"
import Plant3 from "../../../assets/plant3.png"
import Plant4 from "../../../assets/plant4.png"
import Plant5 from "../../../assets/plant5.png"
import Plant6 from "../../../assets/plant6.png"
import Plant7 from "../../../assets/plant7.png"
import Plant8 from "../../../assets/plant8.png"
import Plant9 from "../../../assets/plant9.png"
import "./Plants.scss"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useShopStore } from '../../../store/ShopStore/ShopStore'

const Plants = () => {
    const [plants, setPlants] = useState([
        {id: 1, img: Plant1, title: "Barberton Daisy", price: "$119.00"},
        {id: 2, img: Plant2, title: "Angel Wing Begonia", price: "$169.00"},
        {id: 3, img: Plant3, title: "African Violet", price: "$199.00"},
        {id: 4, img: Plant4, title: "Beach Spider Lily", price: "$129.00"},
        {id: 5, img: Plant5, title: "Blushing Bromeliad", price: "$139.00"},
        {id: 6, img: Plant6, title: "Aluminum Plant", price: "$179.00"},
        {id: 7, img: Plant7, title: "Bird's Nest Fern", price: "$99.00"},
        {id: 8, img: Plant8, title: "Barberton Daisy", price: "$59.00"},
        {id: 9, img: Plant9, title: "Chinese Evergreen", price: "$39.00"},
    ])
    const {getProducts} = useShopStore()
    const pageActive = +sessionStorage.getItem("activePagePlant")
    useEffect(()=> {
      receiveProducts()
      if (pageActive) {
        setActivePage(pageActive)
        setSkip((pageActive) * limit)
      }else {
        setActivePage(0)
      }
    },[])
    const [plantData, setPlantData] = useState([])
    const totalPages = plantData?.total
    const [limit, setLimit] = useState(9)
    const [skip, setSkip] = useState((pageActive + 1) * limit)
    let pages = []
    for (let index = 1; index < parseInt(totalPages / limit); index++) {
      pages.push(index)
    }
    const [activePage, setActivePage] = useState(1)
    const receiveProducts = async() => {
      const response = await getProducts(limit, skip)
      console.log(response);
      setPlantData(response?.data)
    }
    const changePage = async(item)=> {
      setSkip(item * limit)
      setActivePage(item)
      sessionStorage.setItem("activePagePlant", item)
      const response = await getProducts(limit, skip)
      window.location.reload()
    }
    const prevPage = async(item)=> {
      setSkip(item * limit)
      setActivePage(item - 1)
      sessionStorage.setItem("activePagePlant", item - 1)
      const response = await getProducts(limit, skip)
      window.location.reload()
    }
    const nextPage = async(item)=> {
      setSkip(item * limit)
      setActivePage(item + 1)
      sessionStorage.setItem("activePagePlant", item + 1)
      const response = await getProducts(limit, skip)
      window.location.reload()
    }
    const [activeSlice, setActiveSlice] = useState(3)
  return (
    <div>
        <div className='plants'>
      {
        plantData?.products?.map((item,index)=> {
            return <PlantCard key={index} title={item?.title} price={item?.price} img={item?.images[0]}/>
        })
      }
    </div>
    <div className='plants__pages'>
      <button className="plant__page" onClick={()=>prevPage(activePage)}><IoIosArrowBack size={22}/></button>
      {
        pages?.slice(activePage - 1, activePage + activeSlice)?.map((item,index)=> {
          return <button className={`plant__page ${item === activePage ? "plant__page-active" : ""}`} onClick={()=>changePage(item)} key={index}>{item}</button>
        })
      }
      <button className="plant__page" onClick={()=>nextPage(activePage)}><IoIosArrowForward size={22}/></button>
    </div>
    </div>
  )
}

export default Plants
