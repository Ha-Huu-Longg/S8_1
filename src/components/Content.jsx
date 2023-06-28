import React from 'react'
import { Breadcrumb, Card, Layout, theme } from 'antd';
import Meta from "antd/es/card/Meta";

const { Content } = Layout;
const Contents = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content className="p-content">
            <Breadcrumb className="m-breadcrumb" >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div
                className="site-layout-content"
                style={{
                    background: colorBgContainer,
                }}
            >
                <div className="content">
                    <h1 style={{ fontSize: 30, paddingTop: 20 }}>THE BAND</h1>
                    <p className='py-20'>We love music</p>
                    <p className='t-justify '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='flex j-between mt-30'>
                        {new Array(3).fill(null).map(() => (
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default Contents