'use client';

import { useEffect, useState } from 'react';
import ImageUpload from '@/components/ImageUpload';

interface Banner {
  _id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  link?: string;
  position: 'hero' | 'sidebar' | 'footer' | 'promotion';
  isActive: boolean;
  order: number;
}

export default function AdminBanners() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: '',
    link: '',
    position: 'hero' as 'hero' | 'sidebar' | 'footer' | 'promotion',
    isActive: true,
    order: '0',
  });

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      // Fetch tất cả banners (không filter isActive) cho admin
      const res = await fetch('/api/banners?all=true');
      const data = await res.json();
      if (data.success) {
        setBanners(data.data);
        console.log('Fetched banners:', data.data.map((b: Banner) => ({ id: b._id, title: b.title })));
      } else {
        console.error('Failed to fetch banners:', data.error);
      }
    } catch (error) {
      console.error('Error fetching banners:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const bannerData = {
      ...formData,
      order: parseInt(formData.order),
    };

    const url = editingBanner ? `/api/banners/${editingBanner._id}` : '/api/banners';
    const method = editingBanner ? 'PUT' : 'POST';

    console.log('Submitting banner:', { url, method, editingBannerId: editingBanner?._id, bannerData });

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bannerData),
      });

      const data = await res.json();
      console.log('Banner response:', data);

      if (data.success) {
        fetchBanners();
        setShowForm(false);
        setEditingBanner(null);
        resetForm();
      } else {
        const errorMsg = data.debug 
          ? `${data.error}\nDebug: ${JSON.stringify(data.debug)}`
          : data.error;
        alert('Lỗi: ' + errorMsg);
      }
    } catch (error: any) {
      console.error('Submit error:', error);
      alert('Lỗi kết nối: ' + error.message);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      image: '',
      link: '',
      position: 'hero',
      isActive: true,
      order: '0',
    });
  };

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
    setFormData({
      title: banner.title,
      subtitle: banner.subtitle || '',
      description: banner.description || '',
      image: banner.image,
      link: banner.link || '',
      position: banner.position,
      isActive: banner.isActive,
      order: banner.order.toString(),
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc chắn muốn xóa banner này?')) return;

    const res = await fetch(`/api/banners/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      fetchBanners();
    } else {
      alert('Lỗi: ' + data.error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Quản lý Banner</h1>
        <button
          onClick={() => {
            setShowForm(true);
            setEditingBanner(null);
            resetForm();
          }}
          className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
        >
          + Thêm banner
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingBanner ? 'Chỉnh sửa banner' : 'Thêm banner mới'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tiêu đề</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phụ đề</label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mô tả</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                rows={3}
              />
            </div>
            <ImageUpload
              value={formData.image}
              onChange={(url) => setFormData({ ...formData, image: url })}
              label="Hình ảnh banner"
            />
            <div>
              <label className="block text-sm font-medium mb-1">Link (tùy chọn)</label>
              <input
                type="text"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Vị trí</label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value as any })}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="hero">Hero (Banner chính)</option>
                  <option value="sidebar">Sidebar</option>
                  <option value="footer">Footer</option>
                  <option value="promotion">Promotion (Ưu đãi)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Thứ tự</label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="mr-2"
              />
              <label className="text-sm font-medium">Kích hoạt</label>
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
              >
                {editingBanner ? 'Cập nhật' : 'Thêm'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingBanner(null);
                }}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tiêu đề</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vị trí</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thứ tự</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {banners.map((banner) => (
              <tr key={banner._id}>
                <td className="px-6 py-4 whitespace-nowrap">{banner.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {banner.position === 'hero' ? 'Hero' : 
                   banner.position === 'sidebar' ? 'Sidebar' :
                   banner.position === 'footer' ? 'Footer' : 'Promotion'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{banner.order}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded text-xs ${banner.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {banner.isActive ? 'Hoạt động' : 'Tắt'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(banner)}
                    className="text-primary-600 hover:text-primary-800 mr-4"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(banner._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

