import React from 'react';
// import './textbox.css';
import './fileupload.css'
import { Images } from '../../assets/Images';
const FileUploadButton = (props) => {

    
    return (
        <div className='mail'>
            <label className='label'>{props.label}</label>
            <div className='file-upload-container'>
                <label htmlFor='fileInput' className='file-upload-label'>
                    <img src={Images.upload} alt='Upload Icon' className='upload-icon' />
                    {props.placeholder.substring("Choose File")}  <span className='choose-file-text'>Choose File</span></label>

                <input
                    id='fileInput'
                    type='file'
                    onChange={props.onChange}
                    className='file-input'
                />
            </div>
        </div>
    );
};

export default FileUploadButton;
