// import React, {useState} from 'react';
import './statusbar.css';
// import { Images } from '../../assets/Images';

const StatusBar = () => {
    // {{stepIndicator.step1 ? <img src={Images.tickIcon} /> : 1}}
    // <div className='line' style={stepIndicator.step1 ? { backgroundColor: 'green' } : {}}></div>

   
    return (
        <>
            <div className='status-bar'>
                <div className='status-shape'>
                    <div className='status-num' style={{ backgroundColor: 'green', color: 'white' }}>1</div>
                </div>

                <div className='line' ></div>

                <div className='status-shape'>
                    <div on className='status-num'  >2</div>
                </div>

                <div className='line'></div>

                <div className='status-shape'>
                    <div className='status-num'>3</div>

                </div>
            </div>
            <div className='status_bar_title'>
                <p>Tool Selection</p>
                <p>Details</p>
                <p>Migration</p>
            </div>
        </>
    );
};

export default StatusBar;
