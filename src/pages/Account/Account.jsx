import React, { useEffect, useState } from "react";
import "./Account.scss";
import ProfileSideBar from "../../components/ProfileSideBar/ProfileSideBar";
import Button from "../../components/Button/Button";
const Account = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let me = JSON.parse(sessionStorage.getItem("me"));
    setData(me);
    console.log(me);
  }, []);
  console.log(data);
  return (
    <div className="home">
      <div className="account">
        <div className="account__left">
        <ProfileSideBar />
        </div>
        <div className="account__right">
          <h1 className="account__title">Personal Information</h1>
          <div className="account__infos">
            <div className="account__img">
              <div>
              <img src={data?.image} alt={data?.username} />
              </div>
              <Button text="Profile"/>
            </div>
            <div className="account__data">
              <div className="account__info">
                <h4 className="account__info-title">FirstName</h4>
                <div className="account__info-data">{data?.firstName}</div>
              </div>
              <div className="account__info">
                <h4 className="account__info-title">LastName</h4>
                <div className="account__info-data">{data?.lastName}</div>
              </div>
              <div className="account__info">
                <h4 className="account__info-title">Username</h4>
                <div className="account__info-data">{data?.username}</div>
              </div>
              <div className="account__info">
                <h4 className="account__info-title">Email</h4>
                <div className="account__info-data">{data?.email}</div>
              </div>
              <div className="account__info">
                <h4 className="account__info-title">Gender</h4>
                <div className="account__info-data">{data?.gender}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
