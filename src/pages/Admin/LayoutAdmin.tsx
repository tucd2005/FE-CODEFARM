import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Link, Outlet, useLocation } from 'react-router-dom';

import logoCF from '../../assets/images/logoCF.jpg'
import {
  DashboardOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  UserOutlined,
  OrderedListOutlined,
  FileTextOutlined,
  SafetyOutlined,
} from '@ant-design/icons';

const menuItems = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
    path: '/admin/dashboard',
  },
  {
    key: 'categories',
    icon: <AppstoreOutlined />,
    label: 'Quản lí Danh mục',
    path: '/admin/categories',
  },
  {
    key: 'products',
    icon: <ShoppingOutlined />,
    label: 'Quản lí Sản phẩm',
    path: '/admin/products',
  },
  {
    key: 'users',
    icon: <UserOutlined />,
    label: 'Quản lý người dùng',
    path: '/admin/users',
  },
  {
    key: 'orders',
    icon: <OrderedListOutlined />,
    label: 'Quản lý đơn hàng',
    path: '/admin/orders',
  },
  {
    key: 'posts',
    icon: <FileTextOutlined />,
    label: 'Quản lý bài viết / tin tức',
    path: '/admin/posts',
  },
  {
    key: 'roles',
    icon: <SafetyOutlined />,
    label: 'Quản lý quyền & vai trò',
    path: '/admin/roles',
  },
];

const LayoutAdmin = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const selectedKey = menuItems.find(item => location.pathname.startsWith(item.path))?.key;

  return (
    <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
     
      <Sider breakpoint="lg" collapsedWidth="0">
        <img src={logoCF} alt="" />
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems.map(item => ({
            key: item.key,
            icon: item.icon,
            label: <Link to={item.path}>{item.label}</Link>,
          }))}
        />
      </Sider>

      <Layout style={{ flexDirection: 'column' }}>
        <Header style={{ padding: 0, background: colorBgContainer, height: 64 }} />
        <Content
          style={{
            margin: '24px 16px 0',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: 24,
              flex: 1,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: 0,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            padding: '8px 0',
            height: 40,
            lineHeight: '40px',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
