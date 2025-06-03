import React from 'react';
import { Form, Input, InputNumber, Button, Select } from 'antd';

const { TextArea } = Input;

const ProductsAdd: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form submitted:', values);

    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Product added:', data);
        form.resetFields();
        alert('Thêm sản phẩm thành công!');
        
      })
      .catch(err => console.error('Lỗi khi thêm sản phẩm:', err));
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h2>Thêm sản phẩm mới</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          price: 0,
        }}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm' }]}
        >
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Ảnh (URL)"
          name="image"
          rules={[{ required: true, message: 'Vui lòng nhập URL ảnh sản phẩm' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Danh mục"
          name="category"
          rules={[{ required: true, message: 'Vui lòng chọn danh mục' }]}
        >
          <Select placeholder="Chọn danh mục">
            <Select.Option value="phone">Điện thoại</Select.Option>
            <Select.Option value="laptop">Laptop</Select.Option>
            <Select.Option value="accessory">Phụ kiện</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="description"
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductsAdd;
