"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-primary-50 py-16 text-center">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary-500">About Thùy Dung</p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
              Bánh Gato Thùy Dung – Ngọt ngào gửi trọn yêu thương
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              Hiệu bánh thủ công tại Nguyệt Đức, Phú Thọ – nơi bạn có thể đặt mọi kiểu bánh sinh nhật, bánh sự kiện theo
              yêu cầu.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-16 grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Giới thiệu hiệu bánh Thùy Dung</h2>
                <p className="text-gray-600 leading-relaxed">
                  Hiệu bánh Gato Thùy Dung là địa chỉ quen thuộc chuyên cung cấp bánh sinh nhật, bánh sự kiện và bánh
                  ngọt theo yêu cầu với hương vị thơm ngon – chuẩn vị – an toàn. Với nhiều năm kinh nghiệm làm bánh thủ
                  công, chúng tôi luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Thùy Dung nhận làm bánh sinh nhật trẻ em – người lớn, bánh cưới, bánh kỷ niệm, khai trương, cupcake –
                  mini cake và cả bánh thiết kế theo mẫu khách gửi. Chỉ cần bạn tượng tưởng, phần còn lại hãy để chúng
                  tôi chăm chút.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nguyên liệu được chọn lọc kỹ càng, trang trí tinh tế, giao hàng nhanh chóng cùng dịch vụ tư vấn tận
                  tâm – đó là cam kết mà Thùy Dung luôn giữ suốt nhiều năm qua.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/datjhdhe2/image/upload/v1763458900/576532236_4201855833419678_1444017225392973163_n_f3omcv.jpg"
                  alt="Bánh Gato Thùy Dung"
                  className="rounded-3xl shadow-xl"
                />
              </div>
            </div>

            <div className="mb-16 rounded-3xl bg-gray-50 p-8">
              <h3 className="text-2xl font-semibold text-gray-900">Chúng tôi nhận làm</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "Bánh sinh nhật trẻ em – người lớn",
                  "Bánh tiệc cưới, tiệc kỷ niệm, khai trương",
                  "Cupcake, mini cake, bánh set teatime",
                  "Bánh thiết kế theo yêu cầu hoặc theo hình ảnh khách gửi",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                    <span className="text-primary-500">✨</span>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 grid gap-6 md:grid-cols-3">
              {[
                { title: "Nguyên liệu chuẩn", desc: "Sữa tươi, kem lạnh, bơ và trái cây rõ nguồn gốc." },
                { title: "Trang trí tinh tế", desc: "Màu sắc hiện đại, phù hợp mọi concept sự kiện." },
                { title: "Đặt bánh nhanh", desc: "Hỗ trợ tư vấn 24/7 và giao hàng tận nơi khu vực Phú Thọ." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.05)]">
                  <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-primary-50 p-8">
              <h3 className="text-2xl font-semibold text-gray-900">Hệ thống tiệm bánh</h3>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {[
                  { title: "Cơ sở 1", address: "69 Phố Lồ, xã Nguyệt Đức, Phú Thọ" },
                  { title: "Cơ sở 2", address: "208 Văn Tiến, xã Nguyệt Đức, Phú Thọ" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary-500">{item.title}</p>
                    <p className="mt-2 font-semibold text-gray-900">{item.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
