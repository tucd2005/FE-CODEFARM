import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Link, Outlet, useLocation } from 'react-router-dom';

import logoCF from '../../assets/images/logoCF.jpg';
import {
  DashboardOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  UserOutlined,
  OrderedListOutlined,
  FileTextOutlined,
  SafetyOutlined,
  BarcodeOutlined,
} from '@ant-design/icons';
import Quanlibienthe from './Quanlibienthe';

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
  {
    key: 'variants',
    icon: <BarcodeOutlined />, // icon nhỏ gọn thay cho component
    label: 'Quản lý biến thể',
    path: '/admin/variants',
  },
];

const LayoutAdmin = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const selectedKey = menuItems.find(item => location.pathname.startsWith(item.path))?.key;

  return (
    <Layout style={{ minHeight: '100dvh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <a href="/admin">
          <img src={logoCF} alt="Logo" />
        </a>
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
            display: 'flex',
            height: "calc( 100dvh - 120px )",
            flexDirection: 'column',
            overflow: 'scroll',
            backgroundColor: 'white',
            borderRadius: "8px"
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
            {/* Kiểm tra nếu đường dẫn là /admin thì hiển thị dòng chữ */}
            {location.pathname === '/admin' && (
              <div className="text-[80px] text-blue-600">Chào mừng bạn đến với admin</div>
            )}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;