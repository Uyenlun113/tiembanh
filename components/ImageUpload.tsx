'use client';

import { useState } from 'react';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImageUpload({ value, onChange, label = 'Hình ảnh' }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(value || null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to Cloudinary
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        onChange(data.url);
        setPreview(data.url);
      } else {
        alert('Lỗi upload: ' + (data.error || 'Unknown error'));
        setPreview(null);
      }
    } catch (error: any) {
      console.error('Upload error:', error);
      alert('Lỗi upload ảnh: ' + (error.message || 'Unknown error'));
      setPreview(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="space-y-2">
        {preview && (
          <div className="relative w-32 h-32 border rounded-lg overflow-hidden">
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex items-center gap-4">
          <label className="cursor-pointer bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            {uploading ? 'Đang tải...' : 'Chọn ảnh'}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={uploading}
            />
          </label>
          {value && (
            <button
              type="button"
              onClick={() => {
                onChange('');
                setPreview(null);
              }}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Xóa ảnh
            </button>
          )}
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setPreview(e.target.value);
          }}
          placeholder="Hoặc nhập URL hình ảnh"
          className="w-full px-4 py-2 border rounded-lg text-sm"
        />
      </div>
    </div>
  );
}

