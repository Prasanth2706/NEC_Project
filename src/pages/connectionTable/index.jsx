import React, { useEffect, useState } from 'react'
import TableHeading from '../../components/tableHeading'
import Filter from '../../components/filter'
import Search from '../../components/search/search'
import CreateNew from '../../components/createNewButton'
import { Form, Input, Space, Table } from 'antd'
import './connection.css'
import Navbar from '../../components/navbar/Navbar'
import { Images } from '../../assets/Images'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { connectionTable, connectionTableDelete, connectionTableUpdate } from '../../action/ConnectionTable'

const Connection = () => {

  const navigate = useNavigate()
  const [ConnectionData, setConnectionData] = useState([])
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();
  const [idValue, setIdValue] = useState();
  const [editedValue, setEditedValue] = useState('')


  const updateData = async (id) => {
    setIdValue(id)
    const accessToken = localStorage.getItem("access-token");
    setEditingRow(id.id);

    console.log(id)
    // try {
    //   const url = `http://localhost:5000/updateconnection/${id.id}`;


    //   const response = await axios.put(url, { name: id.name }, {
    //     headers: { 
    //       "Content-Type": "application/json",
    //       "x-auth-token": accessToken,
    //     },
    //   });
    //   // navigate('/connectiondetail')
    //   console.log('Data updated successfully:', response.data);
    // } catch (error) {
    //   console.error('Error updating data:', error);
    // }


    // connectionTableUpdate((response) => {
    //   if (response === 'Request failed with status code 400') {
    //     console.error('Error updating data:', response);
    //   }
    //   else {

    //   }
    //   // console.log('Data updated successfully:', response.data);
    // }, payload, id.id)
  };


  const deleteData = async (id) => {
    const accessToken = localStorage.getItem("access-token");
    // try {
    //   const url = `http://localhost:5000/deleteconnection/${id.id}`;

    //   const response = await axios.delete(url, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "x-auth-token": accessToken,
    //     },
    //   });

    //   console.log('Data deleted successfully:', response.data);
    //   setConnectionData((prevData) =>
    //     prevData.filter((record) => record.id !== id.id)
    //   );
    // } catch (error) {
    //   console.error('Error deleting data:', error);
    // }\

    connectionTableDelete((response) => {
      // console.log('Data deleted successfully:', response.data);

      if (response.message === 'Request failed with status code 400') {
        console.error('Error deleting data:', response);
      }
      else {
        setConnectionData((prevData) =>
          prevData.filter((record) => record.id !== id.id)
        );
      }
    },
      null,
      id.id)
  }

  useEffect(() => {
    let payload = {
      name: idValue?.name
    }
    connectionTableUpdate((response) => {
      if (response === 'Request failed with status code 400') {
        console.error('Error updating data:', response);
      }
      else {

      }
      // console.log('Data updated successfully:', response.data);
    }, payload, idValue?.id)
  }, [editedValue])


  const handleCreateNewClick = () => {
    navigate('/connectiondetail');
  };


  const handleEdit = (record) => {
    form.setFieldsValue({ ...record });
  };

  const handleSave = async (record) => {
    try {
      let values = await form.validateFields();
      updateData({ ...record, ...values });
      setEditedValue(updateData({ ...record, ...values }))
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };


  let image = <img src={Images.edit} className='editicon' onClick={() => console.log('enter1')} alt="edit" />
  let deleteImage = <img src={Images.delete} className='deleteicon' onClick={() => console.log('enter2')} alt="edit" />

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("access-token");
      // try {
      //   const response = await axios.get('http://localhost:5000/connections?=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE3MDE3NzkyNzYsImV4cCI6MTcwMTc4MDQ3Nn0.xnUqcgP3889NYQ9nkpuQzx5UMz7JzHY_H1XKkLeEs14', {
      //     headers: { "x-auth-token": accessToken }
      //   });
      //   // console.log(response?.data?.connections, 'connectivafbsnsbonda')
      //   setConnectionData(response?.data?.connections)

      //   console.log(ConnectionData, 'connnectiondata')
      // } catch (error) {
      //   console.log(error, 'connectionerror')
      // }

      connectionTable((response) => {
        console.log(response?.connections, 'connectivafbsnsbonda')
        setConnectionData(response?.connections)

        console.log(ConnectionData, 'connnectiondata')
      })

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
      width: '45%',
      // editable: enabelEdit,
      render: (text, record) => (
        <Space size="small">
          {editingRow === record.id ? (
            <Form
              form={form}
              onFinish={() => handleSave(record)}
              initialValues={{ name: record.name }}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input a name!' }]}
              >
                <Input style={{ border: 'none' }} autoFocus={true} />
              </Form.Item>
            </Form>
          ) : (
            <span onClick={() => handleEdit(record)}>{record.name}</span>
          )}
        </Space>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      className: 'edit',
    },
    {
      dataIndex: 'image',
      align: 'right',
      width: "100%",
      render: (_, record) => (
        <Space size="small">
          <a onClick={() => { updateData(record) }}>{image}</a>
          <a onClick={() => { deleteData(record) }}>{deleteImage}</a>
        </Space>
      ),
    },
  ]

  // const ConnectionDataIcon = [
  //   {
  //     // key: '1',
  //     // name: '[\\SVM0\\\SVM0\Finace\CsPolicy\CsPolicy.xml]',
  //     // type: 'FlatFile',
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
              {/* <Filter /> */}
              {/* <Search /> */}
              <CreateNew onClick={handleCreateNewClick} />
            </div>
          </div>
          <div className='main_connection_table'>
            <Table rowKey="id"
              pagination={false} columns={conectionColumns} dataSource={ConnectionData} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Connection



