import React, { useEffect, useState } from 'react';
import { Table, Space, message, Popconfirm, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Category {
  id: number;
  name: string;
  slug: string;
  image?: string;
  status?: boolean;  // thêm trường status
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:3000/categories');
        // Lọc ra những danh mục có status khác false (mặc định true hoặc undefined)
        const activeCategories = res.data.filter((cat: Category) => cat.status !== false);
        setCategories(activeCategories);
      } catch (err) {
        console.error('Lỗi fetch categories:', err);
        message.error('Không thể lấy danh sách danh mục');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Xóa mềm: cập nhật status = false
  const handleDelete = async (id: number) => {
    try {
      await axios.patch(`http://localhost:3000/categories/${id}`, { status: false });
      message.success('Đã ẩn danh mục thành công!');
      setCategories(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      message.error("Ẩn danh mục thất bại!");
    }
  };

  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <h2>Danh mục sản phẩm</h2>
        <Button type='primary'><Link to={"add"}>Thêm danh mục</Link></Button>
      </div>
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
                <Link to={`edit/${record.id}`}>Sửa</Link>
                <Popconfirm
                  title="Ẩn danh mục"
                  description="Bạn có chắc chắn muốn ẩn danh mục này không?"
                  onConfirm={() => handleDelete(record.id)}
                  okText="Ẩn"
                  cancelText="Huỷ"
                >
                  <Button danger>Ẩn</Button>
                </Popconfirm>
              </Space>
            ),
          },
        ]}
      />
    </>
  );
};

export default Categories;
