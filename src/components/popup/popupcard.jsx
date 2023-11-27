import React, { useState } from 'react';
import "./popupcard.css";
// import connectionImage from "../../../assets/images/done-rafiki-2.svg";
import closeIcon from "../../Assets/group-21.png"
// import tickIcon from "../../../assets/icons/check.png"


const PopupCard = (props) => {

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
    <div className="overlay">
    <div className="popup">
        <span class="header"> 
          {props.data.title}
          <div className="shape"></div>
          <img src={closeIcon} alt="Image" className={props.data.iconClassName} />
        </span>

        <div className="content">
          <img src={props.data.image} alt="Image" />
        </div>
        <p class="footer">
          {props.data.paragraph}
        </p>
      </div>
    </div>
      
    </>
  );
}

export default PopupCard;
