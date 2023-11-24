import React from 'react'
import rightArrow from '../../Assets/rightArrow.png'
import './jobs.css'

const JobSection = () => {
    return (
        <div className='jobs_sec'>
            <p>Jobs</p>
            <img className='job_arrow' src={rightArrow} alt="rightarrow" />
            <p className='create_new'>Create New Job</p>
        </div>
    )
}

export default JobSection
