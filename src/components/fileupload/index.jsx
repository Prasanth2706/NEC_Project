import React from 'react'

const FileUpload = ({fileDetail,images}) => {
    // console.log(props,'porps')
    return (


        <div className='file_details'>
            <div className='file_area'>

                <img className='file_img' src={images} alt="" />
                <div className='file_specs'>
                    <p className='file_name'>{fileDetail.fileName}</p>
                    <p className='file_size'>{fileDetail.fileSize}kb</p>
                </div>
            </div>

            <img className='file_img' src={images} alt="" />
        </div>

    )
}

export default FileUpload