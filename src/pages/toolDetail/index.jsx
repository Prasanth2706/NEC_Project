import React, { useState } from 'react'
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
// import axios from 'axios'

const ToolDetail = () => {

    const [imageUploaded, setImageUploaded] = useState(false);
    const [taskName, setTaskname] = useState('')
    const [runButtonEnabled, setRunButtonEnabled] = useState(false);
    const [stepIndicator, setStepIndicator] = useState({
        step1: false,
        step2: false,
        step3: false
    })

    const [fileName, setFileName] = useState('no file')
    const [fileSize, setFileSize] = useState('0kb')
    const [fileDetail, setFileDetail] = useState(null)



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
                setImageUploaded(true)
                setRunButtonEnabled(true)
            } else {
                alert('Invalid file format. Only XML files are allowed.');

            }
        }
        else {
            setImageUploaded(false)
            setRunButtonEnabled(false)
        }

    }
    const handleRunClick = () => {
        setStepIndicator({
            ...stepIndicator,
            step1: true
        })
    }

    const handleTaskname = (e) => {
        setTaskname(e.target.value)
    }

    return (
        <>
            <Navbar />
            <div className='tool_detail_wrap'>
                <div className='create_new'>
                    <CreateJob />
                </div>
                <div className='tool_detail_area'>

                    <div className='tool_detail_tab'>
                        <StatusBar stepIndicator={stepIndicator} />
                    </div>
                    <div className='main_detail'>
                        <TableHeading title={"Tool Details"} />
                        <a href="sd">Save as Draft</a>
                    </div>
                    <div className='main_detial_row'>
                        <Textarea label={"Task Name"} placeholder={"Enter Here"} typevalue="text" value={taskName} onclick={handleTaskname} />
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
                                setRunButtonEnabled={setRunButtonEnabled}
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
                            <Dropdown title={"Source Database"} />
                            <Dropdown title={"Target Database"} />
                        </div>
                    </div>}
                    <div className='toolDetail_bottom_part'>
                        <p>Started creating on: 25-02-2022  |  12.00 PM</p>
                        <div className='toolDetail_bottom_button'>
                            <BottomButton name={"Previous Step"} className={"previous_step"} />
                            <BottomButton name={"run"} className={'run'} />
                            {runButtonEnabled && <button onClick={handleRunClick}>run</button>}
                        </div>
                    </div>


                </div>


            </div>


        </>
    )
}

export default ToolDetail