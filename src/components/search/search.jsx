import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './search.css';

const Search = () => {
    return (
        <Button className='button' icon={<SearchOutlined />}>Search</Button>
    )
}

export default Search