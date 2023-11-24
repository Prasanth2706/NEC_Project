import { Button } from 'antd';
import React from 'react';
import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import './bottomButtons.css'




const BottomButton = (props) => {
    return (
        <div>
            <Button className={props.className === 'previous_step' ? 'previous_step' : props.className === 'next' ? 'next' : props.className === 'test_connection' ? 'test_connection' : 'close'
            } icon={props.name === 'close' ? <CloseOutlined /> : props.name === 'next' ? <RightOutlined /> : props.name === 'Previous Step' ? <LeftOutlined /> : null}>{props.name}</Button>
        </div>
    );
};

export default BottomButton;
