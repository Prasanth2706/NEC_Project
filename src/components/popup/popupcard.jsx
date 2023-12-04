import React, { useState } from "react";
import "./popupcard.css";
import { Images } from "../../assets/Images";

const PopupCard = (props) => {
    console.log(props, "props popup");

    return (
        <>
            {props.display && (
                <div className="overlay">
                    <div className="popup">
                        <div class="header">
                            <div>
                                {props.data.title}
                                {props.data.icon && (
                                    <img
                                        src={props.data.icon}
                                        alt="Image"
                                        className="success-icon"
                                    />
                                )}
                            </div>
                            <img
                                src={Images.cutimage}
                                alt="Image"
                                className="closeicon"
                                onClick={props.closingPopUp}
                            />
                        </div>

                        <div className="content">
                            <img src={props.data.image} alt="Image" />
                        </div>
                        <p class="footer">{props.data.paragraph}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupCard;
