'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
              Về Chúng Tôi
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Ap Cake - Nơi hội tụ những hương vị tuyệt vời nhất
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Câu chuyện của chúng tôi</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Ap Cake được thành lập với niềm đam mê mang đến những chiếc bánh ngọt ngào và tươi ngon nhất cho khách hàng. 
                  Chúng tôi tin rằng mỗi chiếc bánh không chỉ là một món ăn, mà còn là một tác phẩm nghệ thuật được tạo ra 
                  với tình yêu và sự tận tâm.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Với hơn 10 năm kinh nghiệm trong ngành bánh kẹo, chúng tôi đã không ngừng cải thiện và đổi mới để mang đến 
                  những sản phẩm chất lượng cao nhất. Từ những nguyên liệu tươi ngon được chọn lọc kỹ lưỡng đến quy trình sản xuất 
                  nghiêm ngặt, mọi thứ đều được chúng tôi chăm chút tỉ mỉ.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Đội ngũ của chúng tôi bao gồm những thợ làm bánh tài năng và nhiệt huyết, luôn sẵn sàng tạo ra những chiếc bánh 
                  độc đáo và đặc biệt theo yêu cầu của bạn.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800"
                  alt="Về chúng tôi"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sứ mệnh</h3>
                <p className="text-gray-600">
                  Mang đến những sản phẩm bánh chất lượng cao nhất với giá cả hợp lý cho mọi khách hàng.
                </p>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tầm nhìn</h3>
                <p className="text-gray-600">
                  Trở thành thương hiệu bánh kẹo hàng đầu, được yêu thích và tin tưởng bởi khách hàng.
                </p>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Giá trị cốt lõi</h3>
                <p className="text-gray-600">
                  Chất lượng, tận tâm, sáng tạo và cam kết mang đến trải nghiệm tuyệt vời cho khách hàng.
                </p>
              </div>
            </div>

            {/* Team */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Đội ngũ của chúng tôi</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary-200 mb-4 flex items-center justify-center text-4xl">
                    👨‍🍳
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Đầu bếp trưởng</h3>
                  <p className="text-gray-600">Với 15 năm kinh nghiệm trong nghề</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary-200 mb-4 flex items-center justify-center text-4xl">
                    👩‍🍳
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Thợ làm bánh</h3>
                  <p className="text-gray-600">Chuyên nghiệp và sáng tạo</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary-200 mb-4 flex items-center justify-center text-4xl">
                    👨‍💼
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Quản lý</h3>
                  <p className="text-gray-600">Đảm bảo chất lượng dịch vụ</p>
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

