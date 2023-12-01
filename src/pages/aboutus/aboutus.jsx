import React from "react";
import "./aboutus.css";
import Navbar from "../../components/navbar/Navbar";
import BottomButton from "../../components/bottomButtons";

const AboutUs = () => {
  return (
    //    <div>
    //       <Navbar/>
    //       <div className="main">
    //         <h2 className="heading">About US</h2>
    //         <h4 className="content">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry.
    //         </h4>
    //       </div>

    //       <div className="connection_bottom_part">
    //           <p>Started creating on: 25-02-2022 | 12.00 PM</p>
    //           <div className="connection_bottom_button">
    //             <BottomButton name={"Back to Home"} className={"previous_step"} />
    //           </div>
    //         </div>
    //    </div>

    <>
      <Navbar />

      <div className="outer_wrap">
        <div class="Rectangle-Copy">
         
          <div className="main">
             <h2 className="heading">About US</h2>
            <h4 className="content">
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry.
             </h4>
           </div>

          <div className="connection_bottom_part">
            <p>Started creating on: 25-02-2022 | 12.00 PM</p>
            <div className="connection_bottom_button">
              <BottomButton name={"Back to Home"} className={"previous_step"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
