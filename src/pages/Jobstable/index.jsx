import React, { useState } from 'react'
import TableHeading from '../../components/tableHeading'
import Filter from '../../components/filter'
import Search from '../../components/search/search'
import CreateNew from '../../components/createNewButton'
// import editImage from '../../Assets/group.png'

import { Badge, Table } from 'antd'
import './jobstable.css'
import Navbar from '../../components/navbar/Navbar'
import { Images } from '../../assets/Images'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import ver from '../../Assets/delete.png'

const Jobs = () => {
    const navigate = useNavigate()
    const [jobsData, setJobsData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const accessToken = localStorage.getItem("access-token");

            try {
                const response = await axios.get('http://localhost:5000/listjobs', {
                    headers: { "x-auth-token": accessToken }
                });
                console.log(response, 'fsdfsfwervwefcwe')
                setJobsData(response?.data?.jobs)
            } catch (error) {
                console.log(error, 'job-error')
            }
        }
        fetchData();
    }, [])

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
                            <CreateNew onClick = {()=>navigate('/toolselection')}/>
                        </div>
                    </div>
                    <div className='main_connection_info_table'>
                        <Table columns={JobsColumns} dataSource={jobsData} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Jobs