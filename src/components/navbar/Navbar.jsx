import React, { useState } from "react";
import "./navbar.css";

import { Images } from "../../assets/Images";
import { useNavigate } from "react-router-dom";
import Button from "../button";
import axios from "axios";
import { BellOutlined } from "@ant-design/icons";

const Navbar = () => {
  const navigate = useNavigate()
  const [activeJobs, setActiveJobs] = useState(true);
  const [activeConnection, setActiveConnection] = useState(false);
  const [activeAboutus, setActiveAboutus] = useState(false);

  const handleJobs = () => {
    // setActivePage();
    navigate('/jobs')
  }

  const handleConnection = () => {
    setActiveConnection(true)
    setActiveJobs(false)
    navigate('/connections')
  }

  const handlAboutus = () => {
    navigate('/aboutus')
    setActiveJobs(false)
    setActiveAboutus(true)
    setActiveConnection(false)

  }
  const pathName = window.location.pathname;
  console.log(pathName,'pathname'); 

  const getClassName = (value) => {
    if (value === pathName){
      return 'active'
    }
  }

  const handleLogOut = () => {
    const accessToken = localStorage.getItem("access-token");

    // console.log(`logging username and password: ${emailOrUsername} ${password}`);
    axios
      .post("http://localhost:5000/logout", null, {
        headers: {
          "x-auth-token": accessToken,
        }
      },)
      .then(
        (response) => {
          localStorage.removeItem(
            "access-token"
          );
          console.log(response, 'access-delete')
          localStorage.removeItem(
            "refresh-token",
          );
          navigate('/')
          localStorage.setItem("username",
            response?.data?.result?.username)
          // navigate('/jobs')
          console.log(response, "response");
        },
        (error) => {
          // alert('User does not exist, click register now for creating new id.')
          console.log(error);
        }
      );
  };

  return (
    <header className="main-header">
      <div className="left-section">
        <div className="logo"></div>
        <span class="nav_title" >NEC</span>
      </div>

      <div className="center-section">
        <nav>
          <ul>
            <li onClick={() => handleJobs()} className={getClassName('/jobs')}>
              Jobs
            </li>

            <li onClick={() => handleConnection()} className={getClassName('/connections')}>
              Connections
            </li>
            <li onClick={() => handlAboutus()} className={getClassName('/aboutus')}>
              About Us
            </li>
          </ul>
        </nav>
      </div>

      <div className="right-section">
        <div className="notification-icon">
          {/* <img src={notify} class="Group" alt="notify"/> */}
          <img src={Images.notify} alt="" />
        </div>
        <div className="profile">
          <BellOutlined />
          <div className="profile-image"><img className="profile_image" src={Images.personIcon} alt="" /></div>
          <div class="Oval"></div>
          <span className="profile-name">{localStorage.getItem('username')}</span>
          <span className="dropdown-icon">
            <img src={Images.downarrow} class="Group" alt="downarrow" />
          </span>
          <div >
            <Button name={"LogOut"} className={"logout"} onChange={handleLogOut} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
