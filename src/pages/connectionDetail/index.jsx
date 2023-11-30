import { RightOutlined } from '@ant-design/icons'
import React, { useState ,useEffect} from 'react'
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
import axios from 'axios';



const ConnectionDetail = () => {

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [data,setData] = useState(false);

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [host, setHost] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [database, setDatabase] = useState("");
    const [tableName, setTableName] = useState("");
    


    const handleConnection = () => {

        axios
        .post("http://localhost:5000/testconnection?dhjasjasdj&", {
          name: name,
          type: type,
          host: host,
          username: userName,
          password: password,
          database: database,
          tableName:tableName,

        })
        .then(
          (response) => {
            // localStorage.setItem(
            //   "access-token",
            //   response?.data?.result?.accessToken
            // );
            // localStorage.setItem(
            //   "refresh-token",
            //   response?.data?.result?.refreshToken
            // );
            console.log(response, "response");
          },
          (error) => {
            console.log(error);
          }
        );

    }

    const handleNameChange = (e) => {   
        setName(e.target.value);
    };
    const handleTypeChange = (e) => {
        setType(e.target.value);
    };
    const handleHostChange = (e) => {
        setHost(e.target.value);
    };
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };
    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };
    const handleDatabaseChange = (e) => {
        setDatabase(e.target.value);
    };
    const handleTableNameChange =(e) => {
        setTableName(e.target.value);
    }


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
                            <BottomButton onClick={clickData} name={"Test Connection"} className={"test_connection"} onChange={handleConnection}/>  
                        </div>
                    </div>
                </div>

                <PopupCard data = {connectiondata} display={data} closingPopUp={()=>{setData(!data)}}/>

            </div>
        </>
    )
}

export default ConnectionDetail
