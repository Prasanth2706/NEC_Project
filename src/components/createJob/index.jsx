import React from 'react'
import { Images } from '../../assets/Images'
import './createjob.css'
import { useNavigate } from 'react-router-dom'

const CreateJob = () => {

  const navigate = useNavigate()

  const handlenavJobs = ()=>{
    navigate('/jobs')
  }
  return (
    <div className='create_job'>
      <p className='jobs_title' onClick={handlenavJobs}>Jobs</p>
      <img className='job_img' src={Images.rightArrow} alt="" />
      
      <p>Create New Job</p>
    </div>
  )
}

export default CreateJob  