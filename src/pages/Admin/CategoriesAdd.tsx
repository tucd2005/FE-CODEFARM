import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const CategoriesAdd: React.FC = () => {
  const [form] = Form.useForm();
  const nav = useNavigate()

  const onFinish = async (values: any) => {
    try {
      const res = await fetch('http://localhost:3000/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        message.success('Thêm danh mục thành công!');
        form.resetFields();
        nav("/admin/categories")
      } else {
        message.error('Thêm danh mục thất bại!');
      }
    } catch (error) {
      message.error('Có lỗi xảy ra!');
    }
  };




  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <h2>Thêm danh mục</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Tên danh mục"
          rules={[{ required: true, message: 'Vui lòng nhập tên danh mục' }]}
        >
          <Input placeholder="Ví dụ: Điện thoại" />
        </Form.Item>

        <Form.Item
          name="slug"
          label="Slug"
          rules={[{ required: true, message: 'Vui lòng nhập slug' }]}
        >
          <Input placeholder="Ví dụ: dien-thoai" />
        </Form.Item>

        <Form.Item
          name="image"
          label="Ảnh (URL)"
          rules={[{ required: true, message: 'Vui lòng nhập link ảnh' }]}
        >
          <Input placeholder="https://..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm danh mục
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CategoriesAdd;
 