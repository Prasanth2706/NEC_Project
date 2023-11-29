import React, { useState } from "react";
import Heading from "../../components/heading";
import Textarea from "../../components/textbox";
import Button from "../../components/button";
import wallpaper from "../../../src/Assets/krzysztof-kowalik-ki-h-2-td-gqry-unsplash.png";
import "./signup.css";
import Account from "../../components/register";
import Login from "../../components/login";
import axios from "axios";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log("email", email, userName, password.confirmPassword);

  const onHandleClick = () => {
    debugger;
    console.log(userName, email);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleconfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="homeinfo">
      <div className="left-part">
        <img src={wallpaper} alt="images" className="loginImage" />
        <h1 className="Lorem-ipsum">LOREM IPSUM</h1>
      </div>
      <div className="right-part">
        <Heading title={"Welcome to Lorem Ipsums!"} />
        <div className="details">
          <Textarea
            label={"User Name"}
            placeholder={"e.g. John Joe"}
            value={userName}
            // handleEmailChange={handleEmailChange}
          />
          <Textarea
            label={"Email/ User Name"}
            placeholder={"e.g. John Joe"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            label={"Password"}
            placeholder={"Enter Password"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Textarea
            label={"Confirm Password"}
            placeholder={"Enter Password"}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="forgot-pass">
          <p>Forgot Password?</p>
        </div>
        <Button
          //   onHandleClick={onHandleClick}
          name={"Sign Up"}
          className={"sign"}
        />
        <div className="account">
          {/* <p>Don't have an account?</p>
                    <a href="##"  >Register now</a> */}
          <Account name={"Already have an account?"} />
          <Login value={"Log In"} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
