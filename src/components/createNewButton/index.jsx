import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './createnew.css';


const CreateNew = (props) => {
    return (
        <Button className='createnew' type="primary" icon={<PlusOutlined />} onClick={props.onClick}>
            Create New
        </Button>)
}

export default CreateNew