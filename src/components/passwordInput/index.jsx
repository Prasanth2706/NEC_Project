import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Images } from '../../assets/Images';
import './password.css';

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='mail'>
            <label className={props.label === 'Confirm Password' ? 'ConfirmPassword' : 'label'}>{props.label}</label>
            <div className='password-container'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={props.value}
                    onChange={props.onChange}
                    required
                    onClick={props.onClick}
                    placeholder={props.placeholder}
                    className='email-input'
                />
                {/* <FontAwesomeIcon */}
                {/* //   icon={showPassword ? faEyeSlash : faEye} */}
                <img style={{ cursor: 'pointer' }} src={Images.eye} alt="" onClick={togglePasswordVisibility} className='eye_icon' />

                {/* /> */}
            </div>
        </div>
    );
};

export default PasswordInput;
