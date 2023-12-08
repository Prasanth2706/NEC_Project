import React, { useEffect, useState } from 'react'
import './tooldetail.css'
import Navbar from '../../components/navbar/Navbar'
import CreateJob from '../../components/createJob'
import TableHeading from '../../components/tableHeading'
import Textarea from '../../components/textbox'
import BottomButton from '../../components/bottomButtons'
import Dropdown from '../../components/dropdown'
import StatusBar from '../../components/statusBar'
import { Images } from '../../assets/Images'
import FileUploadButton from '../../components/fileuploadbutton/FileUploadButton'
import FileUpload from '../../components/fileupload'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
// import axios from 'axios'

const ToolDetail = () => {

    const [selectedFile, setSelectedFile] = useState(null)
    const [selectedDropValue, setSelectesDropValue] = useState(null)
    const [imageUploaded, setImageUploaded] = useState(false);
    const [taskName, setTaskname] = useState('')
    const [fileName, setFileName] = useState('no file')
    const [fileSize, setFileSize] = useState('0kb')
    const [fileDetail, setFileDetail] = useState(null)
    const [connectionData, setConnectionData] = useState()
    // const [migrationSuccess, setMigrationSuccess] = useState(false)




    const handleFileUpload = ({ target: { files } }) => {


        console.log(imageUploaded, 'imageuplloaded')
        // setFileName(files[0].name)
        // setFileSize(files[0].size)
        // console.log(files[0].name, 'filevalue')
        // console.log(files[0].size, 'filevalue')
        const uploadedFile = files[0];
        if (uploadedFile) {
            const allowedExtension = ['xml'];
            const fileExtension = uploadedFile.name.split('.').pop().toLowerCase();

            if (allowedExtension.includes(fileExtension)) {
                const formattedFileSize = (uploadedFile.size / 1024).toFixed(2);

                setFileDetail({
                    fileName: uploadedFile.name,
                    fileSize: formattedFileSize,
                });
                console.log(uploadedFile, 'file')
                setSelectedFile(uploadedFile)
                setImageUploaded(true)

                // setRunButtonEnabled(true)
            } else {
                alert('Invalid file format. Only XML files are allowed.');

            }
        }
        else {
            setImageUploaded(false)
            // setRunButtonEnabled(false)
        }

    }

    const handlePrevios = () => {
        setImageUploaded(false)
        setFileDetail(null)
    }

    const handleTaskname = (e) => {
        setTaskname(e.target.value)
    }

    const selectedData = (id) => {

        setSelectesDropValue(id);
    }


    const url = window.location.href;
    useEffect(() => {
        const handleVisibilityChange = async () => {
            const accessToken = localStorage.getItem("access-token");

            if (document.hidden && url !== '/migration') {
                let formaData = new FormData()
                formaData.append('taskName', taskName);
                formaData.append('xmlFile', selectedFile);
                formaData.append('sourceDbId', selectedDropValue);
                formaData.append('destinationDbId', selectedDropValue);
                await (axios.post('http://localhost:5000/createjob', formaData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "x-auth-token": accessToken,
                        }
                    },).then(response => {
                        // setMigrationSuccess(true)
                        localStorage.setItem('step3', true)
                        navigate('/popup', { state: { migrationSuccess: 'Success' } })

                        console.log(response, 'clhsdc')
                    }).catch(error => {
                        // setMigrationSuccess(false)
                        localStorage.setItem('migration', "failed")
                        navigate('/popup', { state: { migrationSuccess: 'Failed' } })
                        console.log(error, 'error')
                    }))
            }
            // navigate('/popup');
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        // return () => {
        //     document.removeEventListener('visibilitychange', handleVisibilityChange);
        // };
    }, [url]);


    const navigate = useNavigate();
    const handleRunClik = () => {

        const accessToken = localStorage.getItem("access-token");
        // axios.post('http://localhost:5000/createjob', {
        //     taskName:  taskName ,
        //     xmlFile:  selectedFile ,
        //     sourceDbId:  selectedDropValue ,
        //     destinationDbId:  selectedDropValue ,
        // }, {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "x-auth-token": accessToken,
        //     },
        // })
        let formaData = new FormData()
        formaData.append('taskName', taskName);
        formaData.append('xmlFile', selectedFile);
        formaData.append('sourceDbId', selectedDropValue);
        formaData.append('destinationDbId', selectedDropValue);

        axios.post('http://localhost:5000/createjob', formaData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "x-auth-token": accessToken,
                }
            },).then(response => {
                // setMigrationSuccess(true)
                localStorage.setItem('step3', true)
                navigate('/migration', { state: { migrationSuccess: 'Success' } })

                console.log(response, 'clhsdc')
            }).catch(error => {
                // setMigrationSuccess(false)
                localStorage.setItem('migration', "failed")
                navigate('/migration', { state: { migrationSuccess: 'Failed' } })
                console.log(error, 'error')
            })
        localStorage.setItem('step1', true)
        localStorage.setItem('step2', true);

        // if(migrationSuccess){
        //     navigate('/jobs')
        // }else{
        //     navigate('/signupu')
        // }
    }
    // let response;
    const handleGetConnection = async () => {
        const accessToken = localStorage.getItem("access-token");

        const response = await axios.get('http://localhost:5000/connections?=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE3MDE3NzkyNzYsImV4cCI6MTcwMTc4MDQ3Nn0.xnUqcgP3889NYQ9nkpuQzx5UMz7JzHY_H1XKkLeEs14', {
            headers: { "x-auth-token": accessToken }
        })
        setConnectionData(response?.data?.connections)
        // setSelectesDropValue(response?.data?.connections?.type)

    }

    useEffect(() => {
        handleGetConnection();
    }, [])


    return (
        <>
            <Navbar />
            <div className='tool_detail_wrap'>
                <div className='create_new'>
                    <CreateJob />
                </div>
                <div className='tool_detail_area'>

                    <div className='tool_detail_tab'>
                        <StatusBar render={'render'} />
                    </div>
                    <div className='main_detail'>
                        <TableHeading title={"Tool Details"} />
                        <a href="sd">Save as Draft</a>
                    </div>
                    <div className='main_detial_row'>
                        <Textarea label={"Task Name"} placeholder={"Enter Here"} typevalue="text" value={taskName} onChange={handleTaskname} />
                        {/* <Textarea label={"Upload XML File"} image = {Images.upload} placeholder={"Drag and Drop files here or choose file "} typevalue="file" className={"image_input"} onChange={handleImageUpload}
                        /> */}
                        {fileDetail ? (
                            <FileUpload fileDetail={fileDetail} images={Images.delete} />
                        ) : (
                            <FileUploadButton
                                label={"Upload XML File"}
                                placeholder={"Drag and Drop files here or "}
                                onChange={handleFileUpload}
                                setImageUploaded={setImageUploaded}
                            // setRunButtonEnabled={setRunButtonEnabled}
                            />
                        )}
                    </div>
                    {/* <FileUpload fileDetail={fileDetail} images={Images.delete} /> */}
                    {/* {fileDetail && <div className='file_details'>
                        <div className='file_area'>
                            <img className='file_img' src={Images.delete} alt="" />
                            <div className='file_specs'>
                                <p className='file_name'>{fileDetail.fileName}</p>
                                <p className='file_size'>{fileDetail.fileSize}kb</p>
                            </div>
                        </div>
                        <img className='file_img' src={Images.delete} alt="" />
                    </div>} */}
                    {imageUploaded && <div className='select_database'>
                        <div className='database_area'>
                            <div className='database_area_dropOne'>
                                <span className="drop_title">Source Database</span>
                                <Dropdown title={"Source Database"} data={connectionData ? connectionData : null} selectedData={selectedData} />
                            </div>
                            <div className='database_area_dropTwo'>
                                <span className="drop_title">Target Database</span>
                                <Dropdown title={"Target Database"} data={connectionData ? connectionData : null} selectedData={selectedData} />
                            </div>
                        </div>
                    </div>}
                    <div className='toolDetail_bottom_part'>
                        <p>Started creating on: 25-02-2022  |  12.00 PM</p>
                        <div className='toolDetail_bottom_button'>
                            <BottomButton name={"Previous Step"} className={"previous_step"} onClick={handlePrevios} />
                            <BottomButton name={"Run"} className={imageUploaded && 'disable' ? 'run' : ''} onClick={handleRunClik} />
                            {/* {runButtonEnabled && <button onClick={handleRunClick}>run</button>} */}
                        </div>
                    </div>


                </div>


            </div>


        </>
    )
}

export default ToolDetail