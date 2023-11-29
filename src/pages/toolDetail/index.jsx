import React, { useState } from 'react'
import './tooldetail.css'
import Navbar from '../../components/navbar/Navbar'
import CreateJob from '../../components/createJob'
import TableHeading from '../../components/tableHeading'
import Textarea from '../../components/textbox'
import BottomButton from '../../components/bottomButtons'
import Dropdown from '../../components/dropdown'
import StatusBar from '../../components/statusBar'

const ToolDetail = () => {

    const [imageUploaded, setImageUploaded] = useState(false);
    // const [runButtonEnabled, setRunButtonEnabled] = useState(false);
    // const [stepIndicator, setStepIndicator] = useState({
    //     step1: false,
    //     step2: false,
    //     step3: false
    // })
    const handleImageUpload = () => {
        setImageUploaded(true)
        // setRunButtonEnabled(true)
    }
    // const handleRunClick = () => {
    //     setStepIndicator({
    //         ...stepIndicator,
    //         step1: true
    //     })
    // }
    return (
        <>
            <Navbar />
            <div className='tool_detail_wrap'>
                <div className='create_new'>
                    <CreateJob />
                </div>
                <div className='tool_detail_area'>

                    <div className='tool_detail_tab'>
                        <StatusBar />
                    </div>
                    <div className='main_detail'>
                        <TableHeading title={"Tool Details"} />
                        <a href="sd">Save as Draft</a>
                    </div>
                    <div className='main_detial_row'>
                        <Textarea label={"Task Name"} placeholder={"Enter Here"} typevalue="text" />
                        <Textarea label={"Upload XML File"} placeholder={"Drag and Drop files here or choose file "} typevalue="file" className={"image_input"} onchange={handleImageUpload}
                        />
                    </div>
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
                            {/* <button onClick={handleRunClick}>run</button> */}
                        </div>
                    </div>
                    {/* <div className='select_database'>
                        <div className='database_area'>
                            <Dropdown />
                            <Dropdown />
                        </div>
                    </div> */}

                </div>


            </div>


        </>
    )
}

export default ToolDetail