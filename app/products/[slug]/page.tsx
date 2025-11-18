'use client';

import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: {
    _id: string;
    name: string;
  };
  stock: number;
  rating?: number;
  reviews?: number;
}

function ProductDetailContent() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success) {
        const found = data.data.find((p: Product) => p.slug === slug);
        if (found) {
          setProduct(found);
          if (found.images && found.images.length > 0) {
            setSelectedImage(0);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    }
    setLoading(false);
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy sản phẩm</h1>
            <Link href="/products" className="text-primary-600 hover:underline">
              Quay lại danh sách sản phẩm
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff9fb]">
      <Header />
      <main className="pb-16">
        <section className="bg-gradient-to-r from-primary-50 to-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600">Trang chủ</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-primary-600">Sản phẩm</Link>
              <span>/</span>
              <span className="font-semibold text-gray-900">{product.name}</span>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="rounded-[36px] border border-white bg-white p-4 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="h-[420px] w-full rounded-[24px] object-cover"
                    />
                  ) : (
                    <div className="flex h-[420px] items-center justify-center rounded-[24px] bg-primary-50 text-8xl">
                      🍰
                    </div>
                  )}
                </div>
                {product.images && product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`overflow-hidden rounded-2xl border-2 ${selectedImage === index ? 'border-primary-500' : 'border-transparent'}`}
                      >
                        <img src={image} alt={`${product.name} ${index + 1}`} className="h-24 w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-6 rounded-[36px] border border-white bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-primary-600">
                    {product.category?.name || 'Ap Cake'}
                  </span>
                  {product.rating && (
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-700">
                      ★ {product.rating.toFixed(1)} ({product.reviews || 0})
                    </span>
                  )}
                </div>

                <div>
                  <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{product.name}</h1>
                  <p className="mt-3 text-gray-500">
                    {product.description || 'Dessert thủ công, nguyên liệu tươi mới và decor hiện đại.'}
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-bold text-primary-600">
                      ₫{product.price.toLocaleString('vi-VN')}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <>
                        <span className="text-lg text-gray-400 line-through">
                          ₫{product.originalPrice.toLocaleString('vi-VN')}
                        </span>
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-600">
                          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </span>
                      </>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Tồn kho: <span className="font-semibold text-gray-900">{product.stock}</span> sản phẩm
                  </p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">Số lượng</label>
                  <div className="mt-3 flex w-fit items-center rounded-full border border-gray-200 bg-white px-2 py-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-10 w-10 rounded-full text-xl text-gray-500 transition hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="h-10 w-10 rounded-full text-xl text-gray-500 transition hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 rounded-full bg-primary-600 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
                  >
                    Thêm vào giỏ hàng
                  </button>
                  <button className="rounded-full border border-primary-200 px-4 py-3 text-sm font-semibold text-primary-600 transition hover:bg-primary-50">
                    ♡ Yêu thích
                  </button>
                </div>

                <div className="grid gap-4 rounded-2xl border border-gray-100 bg-gray-50/60 p-4 text-sm text-gray-600 lg:grid-cols-3">
                  <div>
                    <p className="font-semibold text-gray-900">Giao nhanh</p>
                    <p>30 phút trong nội thành</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Thanh toán</p>
                    <p>VNPay / COD / Thẻ</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Cam kết</p>
                    <p>Hoàn tiền nếu không hài lòng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <ProductDetailContent />
    </Suspense>
  );
}

