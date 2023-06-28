import React from 'react'
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const navItem = [
    { key: 1, label: `HOME` },
    { key: 2, label: `BAND` },
    { key: 3, label: `TOUR` },
    { key: 4, label: `CONTACT` },
    {
        key: 5, label: `MORE`,
        children: [
            { key: 5.1, label: "Merchandies" },
            { key: 5.2, label: "Extras" },
            { key: 5.3, label: "Media" }
        ],
        icon: <DownOutlined />,
    },
]

const Headers = () => {
    return (
        <Header className="flex j-between a-center">
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={navItem}
            />

            <SearchOutlined className="search" />

        </Header>
    )
}

export default Headers