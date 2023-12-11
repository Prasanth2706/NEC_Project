import React, { useEffect, useState } from 'react'
import TableHeading from '../../components/tableHeading'
import Filter from '../../components/filter'
import Search from '../../components/search/search'
import CreateNew from '../../components/createNewButton'
import { Table } from 'antd'
import './connection.css'
import Navbar from '../../components/navbar/Navbar'
import { Images } from '../../assets/Images'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Connection = () => {

  const navigate = useNavigate()
  const [ConnectionData, setConnectionData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("access-token");

      try {
        const response = await axios.get('http://localhost:5000/connections?=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE3MDE3NzkyNzYsImV4cCI6MTcwMTc4MDQ3Nn0.xnUqcgP3889NYQ9nkpuQzx5UMz7JzHY_H1XKkLeEs14', {
          headers: { "x-auth-token": accessToken }
        });
        console.log(response, 'connectiondata')
        setConnectionData(response?.data?.connections)
      } catch (error) {
        console.log(error, 'connectionerror')
      }
    }
    fetchData();
  }, [])

  // useEffect(() => {
  // const image = [<img src={Images.edit} className='editicon' onClick={() => console.log('enter1')} alt="edit" />, <img src={Images.delete} className='deleteicon' onClick={() => console.log('enter2')} alt="edit" />]

  // },[fetchData()])

  const conectionColumns = [

    {
      title: 'Name',
      dataIndex: 'name',
      width: '45%'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      className: 'edit'
    },
    {
      dataIndex: 'image',
      align: 'right',
      title: 'deleteIcon',
      width: "100%",
    },
    {
      dataIndex: 'image1',
      // align: 'right'
      title: 'deleteIcon',

    }
  ]

  // const ConnectionDataIcon = [
  //   {
  //     // key: '1',
  //     // name: '[\\SVM0\\\SVM0\Finace\CsPolicy\CsPolicy.xml]',
  //     // type: 'FlatFile',
  //     image: [<img src={Images.edit} className='editicon' onClick={() => console.log('enter1')} alt="edit" />, <img src={Images.delete} className='deleteicon' onClick={() => console.log('enter2')} alt="edit" />],


  //   }
  // ]



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
              <CreateNew onClick={() => navigate('/connectiondetail')} />
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