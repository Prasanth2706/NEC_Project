import React, { useEffect, useState } from 'react';
import './statusbar.css';
import { Images } from '../../assets/Images';

const StatusBar = (props) => {
    console.log(localStorage.getItem('step1'), "LOCAL")
    const hasWindow = typeof window !== 'undefined';
  const steps = hasWindow && localStorage.getItem('step3')
  const migrate=hasWindow && localStorage.getItem('migration')
    const [status1, setStatus1] = useState();
    const [status2, setStatus2] = useState();
    const [status3, setStatus3] = useState();
    const [migration,setMigration]=useState();
    // console.log(stepIndicator,'step')
    // {{stepIndicator.step1 ? <img src={Images.tickIcon} /> : 1}}
    // <div className='line' style={stepIndicator.step1 ? { backgroundColor: 'green' } : {}}></div>


    console.log("rendered",props.render)
    useEffect(() => {
        console.log("rendered useEffect",props.render,localStorage.getItem('step3'))
        debugger
        setStatus1(localStorage.getItem('step1'));
        setStatus2(localStorage.getItem('step2'))
        setStatus3(localStorage.getItem('step3'))
        setMigration(localStorage.getItem('migration'))
    }, [steps,migrate])

    return (
        <>
            <div className='status-bar'>
                <div className='status-shape'>
                    <div className='status-num' style={{ backgroundColor: 'green', color: 'white' }}>{status1 ? <img src={Images.tickIcon} /> : 1}</div>
                </div>

                <div className='line' style={status1 ? { backgroundColor: 'green' } : {}} ></div>

                <div className='status-shape' >
                    <div on className='status-num' style={status1 ? { backgroundColor: 'green', color: 'white' }:{}} >{status2 ? <img src={Images.tickIcon} /> : 2}</div>
                </div>

                <div className='line' style={status2 ? { backgroundColor: 'green' } : {}} ></div>

                <div className='status-shape'>
                    <div className='status-num' style={migration?{backgroundColor: 'red', color: 'white' }:status2 ? { backgroundColor: 'green', color: 'white' }:{}}>{status3 ? <img src={Images.tickIcon} /> : 3}</div>
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
