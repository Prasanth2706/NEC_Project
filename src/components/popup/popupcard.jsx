import React, { useState } from "react";
import "./popupcard.css";
// import connectionImage from "../../../assets/images/done-rafiki-2.svg";
import closeIcon from "../../Assets/group-21.png";
// import tickIcon from "../../../assets/icons/check.png"
import correctIcon from "../../Assets/correct.svg";

const PopupCard = (props) => {
  console.log(props.data, "hello");
  // const [isPopupVisible, setPopupVisible] = useState(false);

  // const handleButtonClick = () => {
  //   setPopupVisible(true);
  // };

  // const handlePopupClose = () => {
  //   setPopupVisible(false);
  // };

  // handleButtonClick();
  return (
    <>
      User
      <div className="overlay">
        <div className="popup">
          <div class="header">
            <div>
              {props.data.title}
             {props.data.icon &&  <img src={props.data.icon} alt="Image" className="success-icon"/>}
            </div>
            <img src={closeIcon} alt="Image" className="closeicon" />
          </div>

          <div className="content">
            <img src={props.data.image} alt="Image" />
          </div>
          <p class="footer">{props.data.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default PopupCard;
