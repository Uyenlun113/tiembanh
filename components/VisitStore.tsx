'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  images: string[];
}

export default function VisitStore() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products?limit=4')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
        }
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          GHÉ THĂM CỬA HÀNG
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/products/${product.slug}`}
              className="group text-center"
            >
              <div className="relative mb-4">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary-100 text-4xl">
                      🍰
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-primary-600 font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

