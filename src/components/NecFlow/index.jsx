import React from 'react'
import './necpopup.css'
import BottomButton from '../bottomButtons';

const NecPopUp = (props) => {
  // console.log(props.isopen, 'openpop')
  // console.log(props.onClose, 'v;kjasbvisbviuawrbpwqrv;evj ')
  if (!props.isopen) {
    return null;
  }
  return (
    <div className='modal'>
      <div className='modal-content'>
        <p>
          Welcome to NEC Project, your go-to solution for streamlined connection management and testing. At NEC Project, we are committed to revolutionizing the way connections are created, saved, and tested. Our vision is to provide a seamless and intuitive experience, making connection management an effortless task for individuals and organizations alike. With a focus on efficiency, reliability, and innovation, NEC Project stands as a testament to our commitment to empowering users in an interconnected world. Our software offers a range of key features, including an intuitive interface for easy connection creation and storage, robust testing capabilities, and efficient job management with clear start and end times. NEC Project is designed to redefine efficiency, ensuring that users can manage connections with ease. With reliability at its core, innovative connectivity solutions, and dedicated customer support, NEC Project is your trusted partner in achieving success in every project. Choose NEC Project and experience a new era of connectivity management, where efficiency meets innovation.
        </p>
        <div className='bottom_area'>
          <BottomButton name={"Close"} onClick={props.onClose} />
        </div>
      </div>
    </div>
  )
}

export default NecPopUp