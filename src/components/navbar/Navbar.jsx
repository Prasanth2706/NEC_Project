import React, { useState } from "react";
import "./navbar.css";

import { Images } from "../../assets/Images";
import { useNavigate } from "react-router-dom";
import Button from "../button";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState(true);
  const [activeConnection, setActiveConnection] = useState(false);
  const [activeAboutus, setActiveAboutus] = useState(false);

  const handleJobs = () => {
    // setActivePage();
  }

  const handleConnection = () => {
    setActiveConnection(true)
    setActivePage(false)
    navigate('/connections')
  }

  const handlAboutus = () => {
    navigate('/aboutus')
    setActivePage(false)
    setActiveAboutus(true)
    setActiveConnection(false)

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
            <li onClick={() => handleJobs()} className={activePage ? 'active' : ''}>
              Jobs
            </li>

            <li onClick={() => handleConnection()} className={activeConnection ? 'active' : ''}>
              Connections
            </li>
            <li onClick={() => handlAboutus()} className={activeAboutus ? 'active' : ''}>
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
          <div className="profile-image"> </div>
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
