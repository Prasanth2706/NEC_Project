import { RightOutlined } from '@ant-design/icons'
import React from 'react'
import TableHeading from '../../components/tableHeading'
import Textarea from '../../components/textbox'
import Dropdown from '../../components/dropdown'
import BottomButton from '../../components/bottomButtons'
import Navbar from '../../components/navbar/Navbar'
import './connectionDetail.css'

const ConnectionDetail = () => {
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
                            <BottomButton name={"Test Connection"} className={"test_connection"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectionDetail
