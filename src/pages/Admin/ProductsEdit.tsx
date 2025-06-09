import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

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
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();
        setProducts(data);
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
          <a>Sửa</a>
          <a>Xoá</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <button className=''>Thêm sản phẩm</button>
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
