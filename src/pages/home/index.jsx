import React, { useState } from "react";
import Heading from "../../components/heading";
import Textarea from "../../components/textbox";
import Button from "../../components/button";
import "./home.css";
import Account from "../../components/register";
import axios from "axios";
import Login from "../../components/login";
import { Images } from "../../assets/Images";
import { Navigate, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/passwordInput";
// import {observer} from 'mobx-react-lite';
// import { Observer } from 'mobx-react-lite'
// import ProjectStore from '../../Apistore'

const Home = () => {
  const navigate = useNavigate();

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false)
  const [errorvalue, setErrorValue] = useState([])
  const [emailUserCheck, setEmailUserCheck] = useState(false)

  console.log(localStorage.getItem("access-token"), "hello")
  if (localStorage.getItem("access-token")) {
    return <Navigate to="/jobs" />;
  }


  const handleLogin = () => {
    // console.log(`logging username and password: ${emailOrUsername} ${password}`);
    axios
      .post("http://localhost:5000/login", {
        email: emailOrUsername,
        password: password,
        username: emailOrUsername,
      })
      .then(
        (response) => {
          localStorage.setItem(
            "access-token",
            response?.data?.result?.accessToken
          );
          localStorage.setItem(
            "refresh-token",
            response?.data?.result?.refreshToken,
          );
          localStorage.setItem("username",
            response?.data?.result?.username)
          navigate('/jobs')
          // alert('Logged in Successfully!')
          console.log(response, "response");
        },
        (error) => {
          // alert('User does not exist, click register now for creating new id.')
          setShowError(true)
          console.log(error?.response?.data?.message, 'homeerror');
          setErrorValue(error?.response?.data?.message)
        }
      );
  };

  const handleForgotPassword = () => {
    axios.post('http://localhost:5000/forgotpassword', {
      email: emailOrUsername,
    })
      .then(
        (response) => {
          console.log(response, "response");
        },
        (error) => {
          console.log(error);
        }
      );
    console.log(`sending password reset email to ${emailOrUsername}`);
  };

  const handleChange = (e) => {
    const userEmail = e.target.value;
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let isValidEmail = regex.test(userEmail);

    if (isValidEmail) {
      setEmailUserCheck(false)
    } else {

      setEmailUserCheck(true)
    }

    setEmailOrUsername(userEmail);

    // setEmailOrUsername(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="homeinfo">
      <div className="left-part">
        <img src={Images.wallpaper} alt="" className="left_image" />
        <h1 className="Lorem-ipsum">NEC</h1>
      </div>
      <div className="right-part">
        <Heading title={"Welcome to NEC"} name={'home'} />
        <div className="details">
          <Textarea
            label={"Email/ User Name"}
            placeholder={"e.g. John Joe"}
            typevalue={"email"}
            value={emailOrUsername}
            onChange={handleChange}
          />
          {emailUserCheck && <p style={{ color: 'red' }}>*{'Invalid Email Address'}</p>}

          {/* <Textarea
            label={"password"}
            placeholder={"Enter Password"}
            typevalue={"password"}
            value={password}
            onChange={handlePassChange}
          /> */}

          <PasswordInput
            label={"Password"}
            placeholder={"Enter Password"}
            value={password}
            onChange={handlePassChange}
          />
        </div>
        <div>
          {showError && <div style={{ color: 'red' }} >
            <p>{errorvalue}</p>
          </div>}
          <div className="forgot-pass" onClick={handleForgotPassword}>
            <p>Forgot Password?</p>
          </div>
        </div>
        <Button name={"Login"} className={"log"} onChange={handleLogin} />
        <div className="account">
          <Account name={"Don't have an account?"} />
          <Login value={"Register now"} onClick={() => navigate('/signup')} />
        </div>
      </div>
    </div>
  );
};

export default Home;

