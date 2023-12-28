import { RightOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import TableHeading from '../../components/tableHeading'
import Textarea from '../../components/textbox'
import Dropdown from '../../components/dropdown'
import BottomButton from '../../components/bottomButtons'
import Navbar from '../../components/navbar/Navbar'
import './connectionDetail.css'
import { Images } from '../../assets/Images'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/passwordInput'


const ConnectionDetail = () => {
    const [data, setData] = useState(false);
    const [isError, setIsError] = useState(false);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [port, setPort] = useState("");
    const [host, setHost] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [database, setDatabase] = useState("");
    const [isConnectionSaved, setConnectionSaved] = useState(false)
    const [tableName, setTableName] = useState("");
    const [fullConnectionProps, setFullConnectionProps] = useState(false)
    const [enableSaveButton, setenableSaveButton] = useState(false)
    const [connectionDetailBottom, setConnectionDetailBottom] = useState(true)
    const [errorValue, setErrorValue] = useState([])
    const [isLoding, setIsLoading] = useState(false)
    const [savedConnectionError, setSavedConnectionError] = useState([])

    const navigate = useNavigate();

    const handleConnection = () => {


        const accessToken = localStorage.getItem("access-token");
        console.log(accessToken, "accessToken");
        setIsLoading(true)
        axios
            .post(
                "http://localhost:5000/testconnection",
                {
                    name: name,
                    type: type,
                    port: port,
                    host: host,
                    username: userName,
                    password: password,
                    database: database,
                    tableName: tableName,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": accessToken,
                    },
                }
            )
            .then(
                (response) => {
                    console.log(response, "response");
                    if (response.status === 200) {
                        setData(true);
                        setenableSaveButton(true)
                        console.log("hello");
                    }
                },
                (error) => {
                    if (error.response.status === 400) {
                        console.log(error?.response?.data?.errors, "this is Error ");
                        setErrorValue(error?.response?.data?.errors)
                        setData(true);
                        setIsError(true);
                        setenableSaveButton(false)
                    }
                }
            )
            .finally(() => {
                setIsLoading(false)
            })
        // setData(true);
    };

    const handlePrevious = () => {
        navigate('/connections')
    }


    const handleSaveConnection = () => {
        const accessToken = localStorage.getItem("access-token");
        console.log(accessToken, "accessToken");
        axios
            .post(
                "http://localhost:5000/saveconnection",
                {
                    name: name,
                    type: type,
                    port: port,
                    host: host,
                    username: userName,
                    password: password,
                    database: database,
                    tableName: tableName,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": accessToken,
                    },
                }
            )
            .then(
                (response) => {
                    console.log(response, "response");
                    setConnectionSaved(true)
                    navigate('/jobs')
                    setTimeout(() => {
                        setConnectionSaved(false);
                    }, 7000);
                },
                (error) => {
                    console.log(error, "this is SavedError ");
                    setSavedConnectionError(error?.response?.data?.error)
                }
            );
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };


    const handleTypeChange = (value) => {
        setType(value);
        setFullConnectionProps(true);
        setConnectionDetailBottom(false)
    };
    const handleHostChange = (e) => {
        setHost(e.target.value);
    };
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };
    const handlePortChange = (e) => {
        setPort(e.target.value);
    };
    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };
    const handleDatabaseChange = (e) => {
        setDatabase(e.target.value);
    };
    const handleTableNameChange = (e) => {
        setTableName(e.target.value);
    };


    // setPopupVisible(true);

    // const connectiondata = {
    //     title: "Connection test successful.",
    //     icon: Images.tickIcon,
    //     image: Images.doneimage,
    //     paragraph:
    //         "Thanks for being patient, connection test is successfully completed",
    // };

    // const connectiondataIsError = {
    //     title: "Connection test failed.",
    //     icon: Images.cutimage,
    //     image: Images.errorimage,
    //     paragraph: (
    //         <>
    //             Sorry, Due to some unfortunate error the connect test is failed. Please
    //             check once or <a href="#">Create New Connection.</a>
    //         </>
    //     ),
    // };

    const handleClose = () => {
        navigate('/connections')
    }

    const handleNavConnection = () => {
        navigate('/connections')
    }

    return (
        <>
            <Navbar />
            <div className="outer_wrap">
                <div className="connection_section">
                    <p className="main_connection_heading" onClick={handleNavConnection}>Connection</p>
                    <RightOutlined className="rightarrow" />
                    <p className="new_connection"> Create New Connection</p>
                </div>
                <div className="connection_detail">
                    <div className="main_connection_detail">
                        <TableHeading title={"Connection Details"} />
                        <a href="sd">Save as Draft</a>
                    </div>
                    <div className="connection_input">
                        <Textarea
                            label={"Connection Name"}
                            placeholder={"Lorem Connection"}
                            className={"connection"}
                            value={name}
                            onChange={handleNameChange}
                        />
                        <div className="dropdown">
                            <span className="drop_title">Database Type</span>
                            <Dropdown
                                selectedData={handleTypeChange}
                                name={name}
                                data={['Postgres', 'MySQL']}
                            />
                        </div>
                    </div>
                    {connectionDetailBottom && <div className='connectionprop_bottom_button'>
                        <BottomButton name={"Close"} className={"previous_step"} onClick={handleClose} />
                        <BottomButton name={"Test Connection"} className={"test_connection"} />
                    </div>}
                    {fullConnectionProps && <div className='second_sub_connection_detail'>
                        <div className="sub_connection_detail">
                            <TableHeading title={"MySQL Connection Properties:"} />
                        </div>
                        <div className="connection_props">
                            <Textarea
                                label={"User Name"}
                                placeholder={"Admin"}
                                value={userName}
                                onChange={handleUserNameChange}
                            />
                            {/* <Textarea
                                label={"password"}
                                placeholder={"password"}
                                value={password}
                                onChange={handlePassChange}
                            /> */}
                            <PasswordInput
                                label={"password"}
                                placeholder={"password"}
                                value={password}
                                onChange={handlePassChange} />
                        </div>
                        <div className="port">
                            <Textarea
                                label={"Port"}
                                placeholder={"3306"}
                                value={port}
                                onChange={handlePortChange}
                            />
                            <Textarea
                                label={"Host"}
                                placeholder={"127.0.0.1"}
                                value={host}
                                onChange={handleHostChange}
                            />
                        </div>
                        <div className="user">
                            <Textarea
                                label={"Tablename"}
                                placeholder={"order_details"}
                                value={tableName}
                                onChange={handleTableNameChange}
                            />
                            <Textarea
                                label={"Database"}
                                placeholder={"pmtool"}
                                value={database}
                                onChange={handleDatabaseChange}
                            />
                        </div>
                        {/* {isError && <p className='errorValue'>*{errorValue}</p>} */}
                        {isConnectionSaved && <p className='connection_saved'>Connection details saved!</p>}
                        {isLoding && <div className='connection_pending' style={{ color: 'red' }}>Connection process is pending...</div>}
                        {savedConnectionError && null && <p className='errorValue'>*{savedConnectionError}</p>}
                        <div className="connection_bottom_part">
                            <p>Started creating on: 25-02-2022 | 12.00 PM</p>
                            <div className="connection_bottom_button">
                                <BottomButton
                                    name={"Previous Step"}
                                    className={"previous_step"}
                                    onClick={handlePrevious}
                                />
                                <BottomButton
                                    name={"Test Connection"}
                                    className={"test_connection"}
                                    onClick={handleConnection}
                                />
                                {enableSaveButton && <BottomButton
                                    name={"Save Connection"}
                                    className={"save_connection"}
                                    onClick={handleSaveConnection}
                                />}
                            </div>
                        </div>
                    </div>}
                </div>

            </div>
        </>
    );
};

export default ConnectionDetail




