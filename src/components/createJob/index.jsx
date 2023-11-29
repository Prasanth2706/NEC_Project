import React from 'react'
import { Images } from '../../assets/Images'
import './createjob.css'

const CreateJob = () => {
  return (
    <div className='create_job'>
      <p className='jobs_title'>Jobs</p>
      <img className='job_img' src={Images.rightArrow} alt="" />
      
      <p>Create New Job</p>
    </div>
  )
}

export default CreateJob  