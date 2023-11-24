import React from 'react'
import TableHeading from '../../components/tableHeading'
import Filter from '../../components/filter'
import Search from '../../components/search/search'
import CreateNew from '../../components/createNewButton'
import editImage from '../../Assets/group.png'

import { Table } from 'antd'
import './connection.css'
import Navbar from '../../components/navbar/Navbar'
import ver from '../../Assets/delete.png'

const Connection = () => {
  const conectionColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '45%'
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      dataIndex: 'image',
    },
    {
      dataIndex: 'image1',
    }
  ]

  const ConnectionData = [
    {
      key: '1',
      name: '[\\SVM0\\\SVM0\Finace\CsPolicy\CsPolicy.xml]',
      type: 'FlatFile',
      image: [<img src={editImage} className='editicon' onClick={() => console.log('enter1')} alt="edit" />, <img src={ver} className='deleteicon'  onClick={() => console.log('enter2')} alt="edit" />],


    }
  ]

  return (

    <div >
      <Navbar />
      <div className='job_table'>
        <div className='joblist_Table'>
          <div className='connection-table'>
            <div className='table-heading'>
              <TableHeading title={"Connection"} />
            </div>
            <div className='table-details'>
              <Filter />
              <Search />
              <CreateNew />
            </div>
          </div>
          <div className='main_connection_table'>
            <Table columns={conectionColumns} dataSource={ConnectionData} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Connection