import { Button } from 'antd';
import React from 'react';
import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import './bottomButtons.css'
import { useNavigate } from "react-router-dom"
// import { MigrationFailed, MigrationSuccess } from '../../pages/migrationStatus/MigrationInitiated';




const BottomButton = (props) => {

    // const migrationSuccess = props.migrationSuccess;
    // console.log(props.migrationSuccess, 'mgs')
    // console.log(MigrationSuccess,'mgs')
    console.log(props, "props")
    const navigate = useNavigate();

    // const handleNav = () => {
    //     if (props.name === 'Next') {

    //         navigate('/tooldetail')
    //     }

    //     else if (props.name === 'Run') {
    //         navigate('/migration')
    //     }
    //     else if(props.name === 'Close'){
    //         navigate('/connections')
    //     }

    //     else {
    //         props.onClick();
    //     }
    // }


    return (
        <div onClick={() => props.onClick()}>
            {props.IconSide === 'right' ? <Button className='next'>{props.name} <RightOutlined /> </Button > : <Button className={props.className === 'previous_step' ? 'previous_step' : props.className === 'run' ? 'run' : props.className === 'disable' ? 'disable' : props.className === 'save_connection' ? 'save_connection' : props.className === 'next' ? 'next' : props.className === 'back_to_home' ? 'back_to_home' : props.className === 'test_connection' ? 'test_connection' : 'close'
            } icon={props.name === 'Close' ? <CloseOutlined /> : props.name === 'Previous Step' ? <LeftOutlined /> : null}>{props.name}</Button>}
        </div>
    );
};

export default BottomButton;
