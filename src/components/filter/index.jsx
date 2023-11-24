import React from 'react'
import filter from '../../Assets/noun-filters-220951@2x.png'
import './filter.css'

const Filter = () => {
    return (
        <div className='filter'>
            <img src={filter} alt="filter" />
            <p>Filter</p>
        </div>
    )
}

export default Filter