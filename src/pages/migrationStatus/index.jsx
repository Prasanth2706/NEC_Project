import React from "react";
import SuccessImage from "../../Assets/done-rafiki-2.png";
import { RightOutlined } from '@ant-design/icons'
import BottomButton from '../../components/bottomButtons'
import Navbar from '../../components/navbar/Navbar'
import { MigrationInitiated,MigrationSuccess,MigrationFailed } from "./migrationService";
import './migrationstatus.css'
import StatusBar from "../../components/statusbar/statusbar";

const MigrationStatus = (props) => {
  return (
    <>
      <Navbar />
      
      <div className="outer_wrap">
        <div className="connection_section">
          <p className="main_connection_heading">Connection</p>
          <RightOutlined className="rightarrow" />
          <p className="new_connection"> Create New Connection</p>
        </div>

        

        <div class="Rectangle-Copy">
        <div>

        <StatusBar/>    

          <span className="migration-header">{props.data.title}</span>

          <div className="migration-content">
            <img src={props.data.image} alt="Image" />
          </div>
          <p class="migration-footer">
            {props.data.paragraph}
          </p>
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

export default MigrationStatus;
