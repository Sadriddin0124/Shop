import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Google from "../../../assets/google.png"
import Facebook from "../../../assets/facebook.png"
import { useShopAuthStore } from "../../../store/Auth/ShopAuthStore";
const Login = () => {
  const [type, setType] = useState(false)
  const {Login} = useShopAuthStore()
  const handleLogin = async(e) => {
    e.preventDefault()
    let username = e.target[0].value
    let password = e.target[1].value
    const response = await Login({username, password})
    console.log(response);
    sessionStorage.setItem("me", JSON.stringify(response?.data))
    localStorage.setItem("token", response?.data?.token)
    if (response?.status === 200) {
      window.location.reload()
    }
  }
  return (
    <div className="w-[100%] p-[30px] flex flex-col gap-[20px]">
      <form className="flex flex-col w-[100%] gap-[10px]" onSubmit={handleLogin}>
        <label className="w-[100%]">
          Enter your username and password to login.
        </label>
        <input
          type="text"
          className="border border-[#EAEAEA] rounded-[6px] px-[14px] py-[12px] focus:border-[#46a358] outline-none focus:border w-[100%]"
          placeholder="Username"
        />
        <div className="flex flex-col items-end gap-[14px] relative">
          <input
            type={type ? "text" : "password"}
            className="border border-[#EAEAEA] rounded-[6px] px-[14px] py-[12px] focus:border-[#46a358] outline-none focus:border w-[100%]"
            placeholder="Password"
          />
          <Link className="text-[#46a358]">Forgot Password?</Link>
          <IoEyeOffOutline size={24} className={`${type ? "block" : "hidden"}  text-gray-600 absolute top-[12px] right-[14px] cursor-pointer`} onClick={()=>setType(prev=> !prev)}/>
          <IoEyeOutline size={24} className={`${type ? "hidden" : "block"}  text-gray-600 absolute top-[12px] right-[14px] cursor-pointer`} onClick={()=>setType(prev=> !prev)}/>
        </div>
        <button type="submit" className="w-[100%] py-[12px] text-[16px] font-[700] text-white bg-[#46a358] rounded-[6px] mt-[20px]">Login</button>
      </form>
      <div className="flex justify-center gap-[5px] items-center mt-[20px]">
        <div className="h-[1px] w-[100px] bg-gray-300"></div>
        <p className="text-[13px]">Or login with</p>
        <div className="h-[1px] w-[100px] bg-gray-300"></div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <button className="border flex justify-center border-[#EAEAEA] rounded-[6px] px-[14px] py-[12px] w-[100%]">
          <img src={Google} alt="login with" />
        </button>
        <button className="border flex justify-center border-[#EAEAEA] rounded-[6px] px-[14px] py-[12px] w-[100%]">
          <img src={Facebook} alt="login with" />
        </button>
      </div>
    </div>
  );
};

export default Login;
