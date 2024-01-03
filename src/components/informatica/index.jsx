import React from 'react'
import './Informatica.css'
import BottomButton from '../bottomButtons'
import { useNavigate } from 'react-router-dom'

const Informatica = () => {
    const navigate = useNavigate()

    const handleClose = () => {
        navigate('/toolselection')
    }

    return (
        <div className="outer_layout">
            <div className="Rectangle-Copy">
                <div className="main">
                    <iframe className='iframe' src="https://dm-ap.informaticacloud.com/identity-service/home"></iframe>
                </div>
                <div className='info_bottom'>
                    <BottomButton name={"Close"} onClick={handleClose} />
                </div>
            </div>
        </div>
    )
}

export default Informatica
