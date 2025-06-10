import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Space, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get<Product[]>('http://localhost:3000/products');
        setProducts(res.data);
      } catch (err) {
        console.error('Lỗi fetch products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const columns: ColumnsType<Product> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (price) => price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (img) => (
        <img src={img} alt="product" style={{ width: 60, height: 60, objectFit: 'cover' }} />
      ),
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a href="">Chi tiết</a>
          <a>Sửa</a>
          <a>Xoá</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <h2>Quản lý sản phẩm</h2>
        <Button type='primary'><Link to={"add"}>Thêm sản phẩm</Link></Button>
      </div>
      <Table
        loading={loading}
        dataSource={products}
        rowKey="id"
        columns={columns}
      />
    </div>
  );
};

export default Products;
