import React from 'react'
import TableHeading from '../../components/tableHeading'
import Filter from '../../components/filter'
import Search from '../../components/search/search'
import CreateNew from '../../components/createNewButton'
// import editImage from '../../Assets/group.png'

import { Badge, Table } from 'antd'
import './jobstable.css'
import Navbar from '../../components/navbar/Navbar'
import { Images } from '../../assets/Images'
// import ver from '../../Assets/delete.png'

const Jobs = () => {
    const JobsColumns = [
        {
            title: 'Instance Name',
            dataIndex: 'name',
            width: '45%'
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
        },
        {
            title: 'End Time',
            dataIndex: 'endtime',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (text) => <Badge
                className="site-badge-count-109"
                count={text}
                style={{ backgroundColor: '#52c41a' }}></Badge>
        },
        {
            dataIndex: 'detail',
            
        }

    ]

    const JobsData = [
        {
            key: '1',
            name: '[\\SVM0\\\SVM0\Finace\CsPolicy\CsPolicy.xml]',
            startTime: '25-02-2022  |  12.00 PM',
            endtime: '25-02-2022  |  12.00 PM',
            status: 'In Progress',
            detail: 'View Details'

        }
    ]

    return (

        <div >
            <Navbar />
            <div className='jobinfo_table'>
                <div className='joblistinfo_Table'>
                    <div className='connectioninfno-table'>
                        <div className='table-heading_info'>
                            <TableHeading title={"Jobs"} />
                        </div>
                        <div className='table_info_details'>
                            <Filter />
                            <Search />
                            <CreateNew />
                        </div>
                    </div>
                    <div className='main_connection_info_table'>
                        <Table columns={JobsColumns} dataSource={JobsData} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Jobs