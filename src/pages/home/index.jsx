import React from "react";
import Heading from "../../components/heading";
import Textarea from "../../components/textbox";
import Button from "../../components/button";
import wallpaper from "../../../src/Assets/krzysztof-kowalik-ki-h-2-td-gqry-unsplash.png";
import "./home.css";
import Account from "../../components/register";
import Login from "../../components/login";
const Home = () => {
  return (
    <div className="homeinfo">
      <div className="left-part">
        <img src={wallpaper} alt="images" className="loginImage" />
        <h1 className="Lorem-ipsum">LOREM IPSUM</h1>
      </div>
      <div className="right-part">
        <Heading title={"Welcome to Lorem Ipsum!"} />
        <div className="details">
          <Textarea label={"Email/ User Name"} placeholder={"e.g. John Joe"} />
          <Textarea label={"password"} placeholder={"Enter Password"} />
        </div>
        <div className="forgot-pass">
          <p>Forgot Password?</p>
        </div>
        <Button name={"Login"} className={"log"} />
        <div className="account">
          {/* <p>Don't have an account?</p>
                    <a href="##"  >Register now</a> */}
          <Account name={"Don't have an account?"} />
          <Login value={"Register now"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
