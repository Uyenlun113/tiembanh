'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Cảm ơn bạn đã đăng ký!');
    setEmail('');
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 rounded-[40px] bg-gradient-to-r from-primary-500 to-primary-400 px-8 py-10 text-white lg:grid-cols-2 lg:px-14 lg:py-16">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">Stay in the loop</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Nhận ưu đãi giới hạn mỗi tuần</h2>
            <p className="mt-4 text-base text-white/80 md:text-lg">
              Đăng ký để nhận ưu đãi 20% cho đơn hàng đầu tiên cùng với công thức dessert độc quyền từ Ap Cake.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email của bạn"
                className="w-full rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-0"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-600 transition hover:shadow-lg"
              >
                Đăng ký
              </button>
            </form>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="rounded-[28px] border border-white/30 bg-white/10 p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.3em] text-white/70">Ưu đãi tuần này</div>
              <p className="mt-4 text-4xl font-semibold">-20%</p>
              <p className="text-white/80">Cho các dòng bánh mousse</p>
              <div className="mt-6 rounded-2xl bg-white/90 px-4 py-3 text-sm font-medium text-primary-600">
                CODE: APC20
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 hidden h-28 w-28 rounded-full bg-white/30 lg:block" />
            <div className="absolute -top-6 -left-4 hidden h-20 w-20 rounded-full bg-white/20 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

