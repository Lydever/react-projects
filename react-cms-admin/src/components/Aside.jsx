import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import {useNavigate, useLocation} from 'react-router-dom'
import { ReadOutlined, HomeOutlined, UserOutlined, EditOutlined, DatabaseOutlined } from '@ant-design/icons';
import '../assets/base.less'
export default function Aside() {
    const navigate = useNavigate()
    const location = useLocation()
    const [defaultKey, setDefaultKey] = useState('')

    // 一般加个空数组就是为了模仿componentDidMounted
    useEffect(()=>{
        let path = location.pathname;
        let key = path.split('/')[1];
        setDefaultKey(key)
    }, [location.pathname])

    const handleClick = e => {
        navigate('/'+e.key)
        setDefaultKey(e.key)
    };
    return (
        <Menu
            onClick={handleClick}
            style={{ width: 180 }}
            selectedKeys={[defaultKey]}
            mode="inline"
            className='aside'
            theme="dark"
        >
            <Menu.Item key="home"><HomeOutlined /> 首页</Menu.Item>
            <Menu.Item key="listlist"><ReadOutlined /> 文章列表List</Menu.Item>
            <Menu.Item key="listtable"><ReadOutlined /> 文章列表Table</Menu.Item>
            <Menu.Item key="edit"><EditOutlined /> 编辑新增</Menu.Item>
            <Menu.Item key="means"><UserOutlined /> 修改资料</Menu.Item>
        </Menu>
    )
}
