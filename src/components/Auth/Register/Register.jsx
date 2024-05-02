import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Google from "../../../assets/google.png"
import Facebook from "../../../assets/facebook.png"
const Register = ({toggle}) => {
  const [type, setType] = useState(false)
  const [registeredData, setRegisteredData] = useState([
    {id: 1, username: "sadriddin", email: "sadriddinravshanov19@gmail.com", password: "Sadriddin777"}
  ])
  useEffect(()=> {
    let data = JSON.parse(localStorage.getItem("registeredData"))
    setRegisteredData(data)
    console.log(data);
  },[])
  const handleAuth = (e) => {
    e.preventDefault()
    let payload = {
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        confirm: e.target[3].value,
    }
    let result = registeredData
    result.push(payload)
    let save = JSON.stringify(result)
    if (e.target[2].value === e.target[3].value) {
        setError(false)
        localStorage.setItem("registeredData", save)
    }else {
        setError(true)
    }
}
  const [error, setError] = useState(false)
  return (
    <div className="w-[100%] p-[30px] flex flex-col gap-[20px]">
      <form className="flex relative flex-col w-[100%] gap-[10px]" onSubmit={handleAuth}>
        <label className="w-[100%]">
          Enter your username and password to login.
        </label>
        <input
          type="text"
          className="border border-[#EAEAEA] rounded-[6px] px-[14px] py-[12px] focus:border-[#46a358] outline-none focus:border w-[100%]"
          placeholder="Username"
        />
        <input
          type="email"
          className="border border-[#EAEAEA] rounded-[6px] px-[14px] py-[12px] focus:border-[#46a358] outline-none focus:border w-[100%]"
          placeholder="Enter your email address"
        />
        <div className="flex flex-col items-end gap-[14px] relative">
          <input
            type={type ? "text" : "password"}
            className="border border-[#EAEAEA] rounded-[6px] px-[14px] py-[12px] focus:border-[#46a358] outline-none focus:border w-[100%]"
            placeholder="Password"
          />
          <IoEyeOffOutline size={24} className={`${type ? "block" : "hidden"}  text-gray-600 absolute top-[12px] right-[14px] cursor-pointer`} onClick={()=>setType(prev=> !prev)}/>
          <IoEyeOutline size={24} className={`${type ? "hidden" : "block"}  text-gray-600 absolute top-[12px] right-[14px] cursor-pointer`} onClick={()=>setType(prev=> !prev)}/>
        </div>
        <input
          type="Password"
          className="border border-[#EAEAEA] rounded-[6px] px-[14px] py-[12px] focus:border-[#46a358] outline-none focus:border w-[100%]"
          placeholder="Confirm Password"
        />
        <label className={`absolute bottom-[56px] text-[12px] text-[red] ${error ? "block" : "hidden"}`}>Paswords are not same</label>
        <button type="submit" className="w-[100%] py-[12px] text-[16px] font-[700] text-white bg-[#46a358] rounded-[6px] mt-[20px]" onClick={toggle}>Login</button>
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

export default Register;
