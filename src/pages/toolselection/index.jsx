import React, { useState } from 'react'
import CreateJob from '../../components/createJob'
import Navbar from '../../components/navbar/Navbar'
import ToolOption from '../../components/toolOption'
import { Images } from '../../assets/Images'
import './toolselection.css'
import TableHeading from '../../components/tableHeading'
import BottomButton from '../../components/bottomButtons'
import StatusBar from '../../components/statusBar'



const ToolSelection = () => {

    const [selectedTool, setSelectedTool] = useState('');
    // const [selectTab, setSelectTab] = useState('false');

    const handleToolOptionClick = (toolTitle) => {
        setSelectedTool(toolTitle);
    };

    // const handleToolTab = () => {
    //     setSelectTab(true)
    // }

    return (
        <>
            <Navbar />
            <div className='job_wrap'>
                <div className='job_section'>
                    <CreateJob />
                </div>
                <div className='main_tool_area'>
                    <div className='tool_tabs'>
                        <StatusBar />
                    </div>

                    <div className='main_tool_detail'>
                        <TableHeading title={"Tool Selection"} />
                        <a href="sd">Save as Draft</a>
                    </div>
                    <div className='tool_selection_option'>
                        <ToolOption className={selectedTool === 'Data Stage to Glue' ? 'first_tool_option' : 'tool_option'} image={Images.awsimage} title={"Data Stage to Glue"} value={"Use data stage to glue tool to initiate migration."} selectedTool='Data Stage to Glue'
                          onChange={handleToolOptionClick} />
                        <ToolOption className={selectedTool === 'Data Stage to Informatica' ? 'first_tool_option' : 'tool_option'}
                            image={Images.bitmap} title={"Data Stage to Informatica"} value={"Use data stage to informatica tool to initiate migration."} selectedTool='Data Stage to Informatica'
                            onChange={handleToolOptionClick} />
                    </div>
                    <div className='job_bottom_part'>
                        <p>Started creating on: 25-02-2022  |  12.00 PM</p>
                        <div className='job_bottom_button'>
                            <BottomButton name={"Close"} />
                            <BottomButton name={"next"} className={"next"} IconSide={'right'} />
                        </div>
                    </div>
                    {/* </div> */}

                </div>
            </div>


        </>
    )
}


export default ToolSelection


