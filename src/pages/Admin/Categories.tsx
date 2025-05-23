import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Category {
  id: number;
  name: string;
  slug: string;
}
const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:3000/categories');
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error('Lỗi fetch categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Danh mục sản phẩm</h2>
      <Table
        loading={loading}
        dataSource={categories}
        rowKey="id"
        columns={[
          {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: 'Tên danh mục',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Ảnh',
            dataIndex: 'image',
            key: 'image',
            render: (img) => (
              <img src={img} alt="category" style={{ width: 60, height: 60, objectFit: 'cover' }} />
            ),
          },
          
          {
            title: 'Slug',
            dataIndex: 'slug',
            key: 'slug',
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
        ]}
      />
    </div>
  );
};

export default Categories;
