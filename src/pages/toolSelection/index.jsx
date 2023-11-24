import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Jobs from '../Jobstable'
import TableHeading from '../../components/tableHeading'
import aws from '../../Assets/aws-glue.png'
import ToolData from '../../components/toolSelectionData'
import bitmap from '../../Assets/bitmap.png'
import BottomButton from '../../components/bottomButtons'
import JobSection from '../../components/jobsSection'
import './toolselection.css'

const ToolSelection = () => {
    return (
        <div>
            <Navbar />
            <div className='job_wrap'>
                <div className='job_topbar'>

                    <JobSection />
                </div>
                <div className='job_area'>
                    <div className='job_nav'>
                        1 2 4
                    </div>
                    <div className='tools_detail'>

                        <div className='tool_selection'>
                            <TableHeading title={"Tool Selection"} />
                            <a href="sd">Save as Draft</a>
                        </div>

                        <ToolData title={"Data Stage to Glue"} data={"Use data stage to glue tool to initiate migration."} icon={aws} />
                        <ToolData title={"Data Stage to Informatica"} data={"Use data stage to informatica tool to initiate migration."} icon={bitmap} />
                        <div className='tool_selection_bottom_part'>
                            <p>Started creating on: 25-02-2022  |  12.00 PM</p>
                            <div className='tool_selection_button'>
                                <BottomButton name={"Close"} />
                                <BottomButton name={"Next"} className={"next"} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default ToolSelection
