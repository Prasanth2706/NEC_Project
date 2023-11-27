import { Button } from 'antd';
import React from 'react';
import { CloseOutlined, LeftOutlined } from '@ant-design/icons';
import './bottomButtons.css'



const BottomButton = (props) => {
    return (
        <div>
            <Button onClick={props.onClick} className={props.className === 'previous_step' ? 'previous_step' : props.className === 'test_connection' ? 'test_connection' : 'close'
            } icon={props.name === 'close' ? <CloseOutlined /> : props.name === 'Previous Step' ? <LeftOutlined /> : null}>{props.name}</Button>
        </div>
    );
};

export default BottomButton;
