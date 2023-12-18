import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BottomButton from "../../components/bottomButtons";
import './Aboutus.css'
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

  const navigate = useNavigate();
  
  const handleHome = () =>{
    navigate('/jobs')
  }

  return (
    
    <>
      <Navbar/>

      <div className="outer_layout">
        <div className="Rectangle-Copy">
          <div className="main">
            <h2 className="aboutus-heading">About US</h2>
            <h4 className="aboutus-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h4>
          </div>

          <div className="aboutus-footer">
            <p className="aboutus_info">Started creating on: 25-02-2022 | 12.00 PM</p>
            <div className="connection_bottom_button">
              <BottomButton name={"Back to Home"} className={"previous_step"} onClick = {handleHome}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;