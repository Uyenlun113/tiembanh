"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-primary-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary-500">Contact Thùy Dung</p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">Kết nối ngay với Bánh Gato Thùy Dung</h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              Hotline 0988 884 285 hoạt động 24/7 – sẵn sàng hỗ trợ bạn đặt bánh nhanh, thiết kế theo yêu cầu.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="rounded-3xl bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,0.05)] lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Gửi yêu cầu đặt bánh</h2>
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Họ và tên *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Số điện thoại</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nội dung yêu cầu *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-primary-600 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-primary-700"
                  >
                    Gửi yêu cầu ngay
                  </button>
                </form>
              </div>

              <div className="space-y-6 rounded-3xl bg-gray-50 p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Hệ thống cửa hàng</p>
                  <div className="mt-4 space-y-4">
                    {[
                      { title: "Cơ sở 1", address: "69 Phố Lồ, xã Nguyệt Đức, Phú Thọ" },
                      { title: "Cơ sở 2", address: "208 Văn Tiến, xã Nguyệt Đức, Phú Thọ" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{item.title}</p>
                        <p className="mt-2 font-semibold text-gray-900">{item.address}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Hotline</p>
                  <a href="tel:0988884285" className="mt-2 block text-2xl font-semibold text-primary-600">
                    0988 884 285
                  </a>
                  <p className="text-sm text-gray-500">Zalo / Messenger hỗ trợ 24/7</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Email</p>
                  <a href="mailto:hello@banhgathuydung.vn" className="mt-2 block font-semibold text-gray-900">
                    hello@banhgathuydung.vn
                  </a>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Giờ hoạt động</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Thứ 2 - Chủ nhật: 7:00 - 21:00 <br /> (Nhận bánh gấp theo ca)
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Theo dõi</p>
                  <div className="mt-3 flex gap-3">
                    {["Facebook", "Zalo"].map((social) => (
                      <button
                        key={social}
                        className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600"
                      >
                        {social}
                      </button>
                    ))}
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
