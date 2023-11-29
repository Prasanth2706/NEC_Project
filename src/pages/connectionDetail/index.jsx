import { RightOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import TableHeading from '../../components/tableHeading'
import Textarea from '../../components/textbox'
import Dropdown from '../../components/dropdown'
import BottomButton from '../../components/bottomButtons'
import Navbar from '../../components/navbar/Navbar'
import './connectionDetail.css'
// import PopupCard from '../../components/popup/popupcard'
import { ConnectionSuccess, ConnectionFailed } from '../../components/popup/popup';
import PopupCard from '../../components/popup/popupcard'
import successAnimation from '../../Assets/Animation - 1701147458535.gif'
import successImage from "../../Assets/done-rafiki-2.png"
import correctIcon from '../../Assets/correct.svg';


// function TestDetails(){
//     console.log("welcome");
//     return <ConnectionSuccess/>
// }

const ConnectionDetail = () => {

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [data,setData] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };
  const connectiondata = {title:"Connection test successful.", icon:correctIcon,
  image:successImage,
  paragraph:"Thanks for being patient, connection test is successfully completed"
}

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const clickData = () => {
    setData(true);
    console.log("Data ==> ", data);
  };



    return (
        <>
            <Navbar />
            <div className='outer_wrap'>
                <div className='connection_section'>
                    <p className='main_connection_heading'>Connection</p>
                    <RightOutlined className='rightarrow' />
                    <p className='new_connection'> Create New Connection</p>
                </div>
                <div className='connection_detail'>
                    <div className='main_connection_detail'>
                        <TableHeading title={"Connection Details"} />
                        <a href="sd">Save as Draft</a>
                    </div>
                    <div className='connection_input'>
                        <Textarea label={"Connection Name"} placeholder={"Lorem Connection"} className={"connection"} />
                        <div className='dropdown'>
                            <span className='drop_title'>
                                Database Type
                            </span>
                            <Dropdown />
                        </div>
                    </div>


                    <div className='sub_connection_detail'>
                        <TableHeading title={"MySQL Connection Properties:"} />
                    </div>
                    <div className='connection_props'>
                        <Textarea label={'User Name'} placeholder={"Admin"} />
                        <Textarea label={'Host'} placeholder={"127.0.0.1"} />
                    </div>
                    <div className='port'>
                        <Textarea label={"Port"} placeholder={"3306"} />
                    </div>
                    
                    <div className='connection_bottom_part'>
                        <p>Started creating on: 25-02-2022  |  12.00 PM</p>
                        <div className='connection_bottom_button'>
                            <BottomButton name={"Previous Step"} className={"previous_step"} />
                            <BottomButton onClick={clickData} name={"Test Connection"} className={"test_connection"} />  
                        </div>
                    </div>
                </div>

                <PopupCard data = {connectiondata} display={data} closingPopUp={()=>{setData(!data)}}/>

            </div>
        </>
    )
}

export default ConnectionDetail
