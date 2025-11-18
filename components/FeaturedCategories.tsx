'use client';

import Link from 'next/link';

export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: 'Bánh Sinh Nhật Dâu Tây',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
      link: '/products?category=strawberry',
    },
    {
      id: 2,
      name: 'Bánh Kem Kiwi',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
      link: '/products?category=kiwi',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {category.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors font-semibold">
                    Mua ngay
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

