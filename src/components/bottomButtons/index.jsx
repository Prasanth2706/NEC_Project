import { Button } from 'antd';
import React from 'react';
import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import './bottomButtons.css'
import { useNavigate } from "react-router-dom"




const BottomButton = (props) => {
    console.log(props,"props")
    const navigate = useNavigate();
    return (
        <div onClick={props.name === 'next' ? () => navigate('/tooldetail')  : props.onClick}>
            {props.IconSide === 'right' ? <Button className='next'>{props.name} <RightOutlined /> </Button > : <Button className={props.className === 'previous_step' ? 'previous_step' : props.className === 'run' ? 'run' : props.className === 'save_connection' ? 'save_connection':  props.className === 'next' ? 'next' : props.className === 'test_connection' ? 'test_connection' : 'close'
            } icon={props.name === 'Close' ? <CloseOutlined /> : props.name === 'Previous Step' ? <LeftOutlined /> : null}>{props.name}</Button>}
        </div>
    );
};

export default BottomButton;
