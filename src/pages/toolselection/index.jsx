import React, { useEffect, useState } from 'react'
import CreateJob from '../../components/createJob'
import Navbar from '../../components/navbar/Navbar'
import ToolOption from '../../components/toolOption'
import { Images } from '../../assets/Images'
import './toolselection.css'
import TableHeading from '../../components/tableHeading'
import BottomButton from '../../components/bottomButtons'
import StatusBar from '../../components/statusBar'
import { useNavigate } from 'react-router-dom'



const ToolSelection = () => {
    const [selectedTool, setSelectedTool] = useState('');
    const navigate = useNavigate()


    useEffect(() => {
        localStorage.removeItem('step1')
        localStorage.removeItem('step2');
        localStorage.removeItem('step3');
        localStorage.removeItem('migration');
    }, [])


    // const [selectTab, setSelectTab] = useState('false');

    const handleToolOptionClick = (toolTitle) => {
        setSelectedTool(toolTitle);
    };

    // const handleToolTab = () => {
    //     setSelectTab(true)
    // }

    const handleRunClick = () => {
        localStorage.setItem('step1', true)

        // setStepIndicator({
        //     ...stepIndicator,
        navigate('/tooldetail')
        //     step1: true
        // })
    }

    const handleClose = () => {
        navigate('/jobs')
    }

    return (
        <>
            <Navbar value={'/toolselection'} />
            <div className='job_wrap'>
                <div className='job_section'>
                    <CreateJob />
                </div>
                <div className='main_tool_area'>
                    <div className='tool_tabs'>
                        <StatusBar render={'render'} />
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
                            <BottomButton name={"Close"} onClick={handleClose} />
                            <BottomButton name={"Next"} className={"next"} IconSide={'right'} onClick={handleRunClick} />
                        </div>
                    </div>
                    {/* </div> */}

                </div>
            </div>


        </>
    )
}


export default ToolSelection


