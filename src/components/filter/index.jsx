import React from 'react'
import { Images } from '../../assets/Images'
import './filter.css'

const Filter = () => {
    return (
        <div className='filter'>
            <img src={Images.filter} alt="filter" />
            <p>Filter</p>
        </div>
    )
}

export default Filter