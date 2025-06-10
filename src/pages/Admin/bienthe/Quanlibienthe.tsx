import React, { useEffect, useState } from 'react';
import { Table, Button, Space, Modal, Form, Input, InputNumber, Select, message, Popconfirm } from 'antd';
import axios from 'axios';

interface Variant {
  id: number;
  san_pham_id: number;
  ma_sku: string;
  gia: number;
  kich_thuoc: string;
  mau_sac: string;
  so_luong: number;
  trang_thai: boolean;
}

const { Option } = Select;

const Quanlibienthe: React.FC = () => {
  const [variants, setVariants] = useState<Variant[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingVariant, setEditingVariant] = useState<Variant | null>(null);

  const [form] = Form.useForm();

  const fetchVariants = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/variants');
      console.log(res);
      
      console.log('variants fetched:', res.data); // kiểm tra dữ liệu
      setVariants(res.data);
    } catch (error) {
      message.error('Lỗi khi tải danh sách biến thể');
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchVariants();
  }, []);

  const openModal = (variant?: Variant) => {
    setEditingVariant(variant || null);
    form.resetFields();
    if (variant) {
      form.setFieldsValue(variant);
    }
    setModalVisible(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/variants/${id}`);
      message.success('Xoá biến thể thành công');
      setVariants(prev => prev.filter(v => v.id !== id));
    } catch {
      message.error('Xoá biến thể thất bại');
    }
  };

  const onFinish = async (values: any) => {
    try {
      if (editingVariant) {
        // Update
        await axios.put(`http://localhost:3000/variants/${editingVariant.id}`, values);
        message.success('Cập nhật biến thể thành công');
        setVariants(prev => prev.map(v => (v.id === editingVariant.id ? { ...v, ...values } : v)));
      } else {
        // Create new
        const res = await axios.post('http://localhost:3000/variants', values);
        message.success('Thêm biến thể thành công');
        setVariants(prev => [...prev, res.data]);
      }
      setModalVisible(false);
    } catch {
      message.error('Lưu biến thể thất bại');
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'ID sản phẩm',
      dataIndex: 'san_pham_id',
      key: 'san_pham_id',
    },
    {
      title: 'Mã SKU',
      dataIndex: 'ma_sku',
      key: 'ma_sku',
    },
    {
        title: 'Giá',
        dataIndex: 'gia',
        key: 'gia',
        render: (price?: number) =>
          price !== undefined && price !== null
            ? price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
            : 'Chưa có giá',
      },
      
    {
      title: 'Kích thước',
      dataIndex: 'kich_thuoc',
      key: 'kich_thuoc',
    },
    {
      title: 'Màu sắc',
      dataIndex: 'mau_sac',
      key: 'mau_sac',
    },
    {
      title: 'Số lượng',
      dataIndex: 'so_luong',
      key: 'so_luong',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trang_thai',
      key: 'trang_thai',
      render: (status: boolean) => (status ? 'Hoạt động' : 'Ẩn'),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_: any, record: Variant) => (
        <Space size="middle">
          <Button type="link" onClick={() => openModal(record)}>Sửa</Button>
          <Popconfirm
            title="Xoá biến thể?"
            onConfirm={() => handleDelete(record.id)}
            okText="Xoá"
            cancelText="Huỷ"
          >
            <Button danger type="link">Xoá</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>Quản lý biến thể sản phẩm</h2>
      <Button type="primary" onClick={() => openModal()} style={{ marginBottom: 16 }}>
        Thêm biến thể mới
      </Button>

      <Table
        dataSource={variants}
        columns={columns}
        rowKey="id"
        loading={loading}
      />

      <Modal
        title={editingVariant ? 'Sửa biến thể' : 'Thêm biến thể'}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => form.submit()}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ trang_thai: true }}
        >
          <Form.Item
            name="san_pham_id"
            label="ID sản phẩm"
            rules={[{ required: true, message: 'Vui lòng nhập ID sản phẩm' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="ma_sku"
            label="Mã SKU"
            rules={[{ required: true, message: 'Vui lòng nhập mã SKU' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="gia"
            label="Giá"
            rules={[{ required: true, message: 'Vui lòng nhập giá' }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value?.replace(/\$\s?|(,*)/g, '') || ''}
            />
          </Form.Item>

          <Form.Item
            name="kich_thuoc"
            label="Kích thước"
            rules={[{ required: true, message: 'Vui lòng nhập kích thước' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="mau_sac"
            label="Màu sắc"
            rules={[{ required: true, message: 'Vui lòng nhập màu sắc' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="so_luong"
            label="Số lượng"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="trang_thai"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value={true}>Hoạt động</Option>
              <Option value={false}>Ẩn</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Quanlibienthe;
