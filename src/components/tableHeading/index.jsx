import React from 'react'
import './tableHeading.css'

const TableHeading = (props) => {
  return (
    <div className='tableHeading'>
        <p>{props.title}</p>
    </div>
  )
}

export default TableHeading