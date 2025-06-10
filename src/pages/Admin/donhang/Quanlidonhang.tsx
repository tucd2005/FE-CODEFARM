import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Select, Button, message, Popconfirm } from 'antd';

const QuanLyDonHang = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/orders');
      setOrders(res.data);
    } catch (error) {
      message.error('Lỗi khi tải đơn hàng!');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleChangeStatus = async (id: number, status: string) => {
    try {
      await axios.patch(`http://localhost:3000/orders/${id}`, { status });
      message.success('Cập nhật trạng thái thành công!');
      fetchOrders();
    } catch {
      message.error('Lỗi khi cập nhật trạng thái!');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/orders/${id}`);
      message.success('Đã xóa đơn hàng!');
      fetchOrders();
    } catch {
      message.error('Lỗi khi xóa đơn hàng!');
    }
  };

  const columns = [
    { title: 'Tên khách', dataIndex: 'customerName', key: 'customerName' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Ngày đặt', dataIndex: 'date', key: 'date' },
    {
      title: 'Tổng tiền',
      dataIndex: 'total',
      key: 'total',
      render: (total: number) => total.toLocaleString() + ' đ',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, record: any) => (
        <Select value={status} onChange={(value) => handleChangeStatus(record.id, value)}>
          <Select.Option value="pending">Chờ xử lý</Select.Option>
          <Select.Option value="completed">Hoàn tất</Select.Option>
          <Select.Option value="cancelled">Đã hủy</Select.Option>
        </Select>
      ),
    },
    {
      title: 'Thao tác',
      key: 'actions',
      render: (_: any, record: any) => (
        <Popconfirm title="Xóa đơn hàng này?" onConfirm={() => handleDelete(record.id)}>
          <Button danger>Xóa</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>Quản lý đơn hàng</h2>
      <Table
        dataSource={orders}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default QuanLyDonHang;
