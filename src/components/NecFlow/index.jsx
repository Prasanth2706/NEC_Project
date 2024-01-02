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
        This is a pop up.
        <div className='bottom_area'>
        <BottomButton name={"Close"} onClick={props.onClose} />
        </div>
      </div>
    </div>
  )
}

export default NecPopUp