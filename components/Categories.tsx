'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Category {
  _id: string;
  name: string;
  slug: string;
  image?: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Danh mục sản phẩm</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/categories/${category.slug}`}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow text-center"
          >
            {category.image && (
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-24 object-cover rounded mb-2"
              />
            )}
            <h3 className="text-sm font-medium text-gray-700">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

