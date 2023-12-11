import React, { useEffect } from "react";
import { RightOutlined } from '@ant-design/icons'
import BottomButton from '../../components/bottomButtons'
import Navbar from '../../components/navbar/Navbar'
import './migrationStatus.css'
import StatusBar from "../../components/statusBar";

const MigrationStatus = (props) => {
    const hasWindow = typeof window !== 'undefined';

    const migrate = hasWindow && localStorage.getItem('migration')

    // useEffect(() => {
    //     debugger
    // }, [])

    // useEffect(()=>{

    // },[props.data.title])
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

                        <StatusBar render={'render33333'} />

                        <span className="migration-header">{props.data.title}</span>
                        <div>


                            <div className="migration-content">
                                <img className="migration_image" src={props.data.image} alt="Image" />
                            </div>
                            <p class="migration-footer">
                                {props.data.paragraph}
                            </p>
                        </div>
                    </div>

                    <div className="migration_bottom_part">
                        <p>Started creating on: 25-02-2022 | 12.00 PM</p>
                        <div className="migration_bottom_section">
                            {migrate && <div className="migration_bottom_button">
                                <BottomButton name={"Previous Step"} className={"previous_step"} />
                            </div>}
                            <div className="migration_bottom_button">
                                <BottomButton name={"Back to Home"} className={"back_to_home"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MigrationStatus;