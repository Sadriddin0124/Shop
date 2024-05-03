import React, { useState } from 'react'
import "./ProfileSideBar.scss"
import { CiShoppingCart, CiUser } from 'react-icons/ci'
import { GoHeart } from 'react-icons/go'
import { TbPhoneCall } from 'react-icons/tb'
import { IoIosLogOut } from 'react-icons/io'
import { Link } from 'react-router-dom'
const ProfileSideBar = () => {
    const [profileSidebar, setProfileSidebar] = useState([
        {text: "Account Details", path: "/account", icon: <CiUser size={20}/>}, 
        {text: "Orders", path: "/orders", icon: <CiShoppingCart size={20}/>}, 
        {text: "Favourites", path: "/liked", icon: <GoHeart size={20}/>}, 
        {text: "Contact us", path: "/contact", icon: <TbPhoneCall size={20}/>}, 
      ])
      const url = "/" + window.location.href.split("/")[3]
  return (
    <div className='prof__sidebar'>
      <h1 className='prof__sidebar-title'>My Account</h1>
      <ul className='prof__sidebar-list'>
        {
            profileSidebar?.map((item,index)=> {
                return <li key={index} className={`prof__sidebar-item ${url === item?.path ? "prof__sidebar-item-active" : ""}`}>
                    <span>{item?.icon}</span>
                    <p>{item?.text}</p>
                    <Link to={item?.path}></Link>
                </li>
            })
        }
      </ul>
      <button className='prof__sidebar-logout'>
        <IoIosLogOut size={20}/> Logout
      </button>
    </div>
  )
}

export default ProfileSideBar
