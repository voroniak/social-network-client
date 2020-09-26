import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const HeaderContainer = ()=>{
   return( <Layout.Header >
   <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">My Posts</Menu.Item>
      <Menu.Item key="2">All Posts</Menu.Item>
    </Menu>
  </Header>
  </Layout.Header>
   )
}
export default HeaderContainer;