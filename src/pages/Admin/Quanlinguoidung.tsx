import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Select, Popconfirm, message } from 'antd';

const QuanLyNguoiDung = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/users');
      setUsers(res.data);
    } catch (error) {
      message.error('Không thể tải danh sách người dùng!');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChangeRole = async (id: number, role: string) => {
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, { role });
      message.success('Cập nhật vai trò thành công!');
      fetchUsers();
    } catch (err) {
      message.error('Lỗi khi cập nhật vai trò!');
    }
  };

  const handleToggleStatus = async (id: number, active: boolean) => {
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, { active: !active });
      message.success('Đã cập nhật trạng thái!');
      fetchUsers();
    } catch {
      message.error('Lỗi khi cập nhật trạng thái!');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      message.success('Xóa người dùng thành công!');
      fetchUsers();
    } catch {
      message.error('Lỗi khi xóa người dùng!');
    }
  };

  const columns = [
    { title: 'Tên', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Vai trò',
      dataIndex: 'role',
      key: 'role',
      render: (role: string, record: any) => (
        <Select value={role} onChange={(value) => handleChangeRole(record.id, value)}>
          <Select.Option value="user">User</Select.Option>
          <Select.Option value="admin">Admin</Select.Option>
        </Select>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'active',
      key: 'active',
      render: (active: boolean, record: any) => (
        <Button onClick={() => handleToggleStatus(record.id, active)}>
          {active ? 'Hoạt động' : 'Đã khóa'}
        </Button>
      ),
    },
    {
      title: 'Thao tác',
      key: 'actions',
      render: (_: any, record: any) => (
        <Popconfirm
          title="Bạn chắc chắn muốn xóa?"
          onConfirm={() => handleDelete(record.id)}
        >
          <Button danger>Xóa</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>Quản lý người dùng</h2>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default QuanLyNguoiDung;
