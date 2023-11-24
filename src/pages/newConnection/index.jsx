import React from 'react'
import './connectionProps.css'
import { RightOutlined } from '@ant-design/icons'
import Navbar from '../../components/navbar/Navbar'
import TableHeading from '../../components/tableHeading'
import Textarea from '../../components/textbox'
import Dropdown from '../../components/dropdown'
import BottomButton from '../../components/bottomButtons'
const ConnnectionProps = () => {
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
            <Textarea label={"Connection Name"} placeholder={"Enter Here"} className={"connection"} />
            <div className='dropdown'>
              <span className='drop_title'>
                Database Type
              </span>
              <Dropdown />
            </div>
          </div>
            <div className='connectionprop_bottom_button'>
              <BottomButton name={"close"} className={"previous_step"} />
              <BottomButton name={"Test Connection"} className={"test_connection"} />
            </div>
        </div>
      </div>

    </>

  )
}

export default ConnnectionProps