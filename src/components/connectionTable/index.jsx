// import React from 'react';
// import { Table, Divider, Badge } from 'antd';
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Type',
//     dataIndex: 'address',
//   },
// ];
// const jobsColumns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     render:(text)=> <p style={{color:'red'}}>{text}</p>
//   },
//   {
//     title: 'Type',
//     dataIndex: 'type',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     render:(text)=> <Badge
//     className="site-badge-count-109"
//     count={text}
//     style={{ backgroundColor: '#52c41a' }}
//   />
//   },
// ];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     address: 'Sydney No. 1 Lake Park',
//   },
// ];
// const jobsData = [
//   {
//     key: '1',
//     name: 'John Brown',
//     type:"ABC",
//     age:'20',
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'John',
//     type:"ABC",
//     age:'20',
//     address: 'New York No. 1 Lake Park',
//   },
// ];
// const ConnectionTable = () => (
//   <>
//     <Divider>Middle size table</Divider>
//     <Table columns={jobsColumns} dataSource={jobsData} size="middle" />
//   </>
// );
// export default ConnectionTable;