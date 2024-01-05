import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BottomButton from "../../components/bottomButtons";
import './Aboutus.css'
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/jobs')
  }

  return (

    <>
      <Navbar />

      <div className="outer_layout">
        <div className="Rectangle-Copy">
          <div className="main">
            <h2 className="aboutus-heading">About US</h2>
            {/* <h4 className="aboutus-content">
              **About Us: NEC Project**
            </h4> */}
            <p>

              Welcome to NEC Project, your go-to solution for streamlined connection management and testing. At NEC Project, we are committed to revolutionizing the way connections are created, saved, and tested. Our vision is to provide a seamless and intuitive experience, making connection management an effortless task for individuals and organizations alike. With a focus on efficiency, reliability, and innovation, NEC Project stands as a testament to our commitment to empowering users in an interconnected world.
              Our software offers a range of key features, including an intuitive interface for easy connection creation and storage, robust testing capabilities, and efficient job management with clear start and end times. NEC Project is designed to redefine efficiency, ensuring that users can manage connections with ease. With reliability at its core, innovative connectivity solutions, and dedicated customer support, NEC Project is your trusted partner in achieving success in every project. Choose NEC Project and experience a new era of connectivity management, where efficiency meets innovation.
            </p>
          </div>

          <div className="aboutus-footer">
            <p className="aboutus_info">Started creating on: 25-02-2022 | 12.00 PM</p>
            <div className="connection_bottom_button">
              <BottomButton name={"Back to Home"} className={"previous_step"} onClick={handleHome} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;