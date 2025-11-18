'use client';

export default function JustForYou() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800"
                alt="Bánh tart mâm xôi"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-100 rounded-full opacity-50"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Dành Riêng Cho Bạn
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Khám phá những món bánh đặc biệt được chúng tôi chọn lọc kỹ lưỡng, 
              mang đến hương vị độc đáo và trải nghiệm ẩm thực tuyệt vời. 
              Mỗi chiếc bánh đều được làm thủ công với tình yêu và sự tận tâm.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Từ những nguyên liệu tươi ngon nhất đến kỹ thuật làm bánh tinh tế, 
              chúng tôi cam kết mang đến cho bạn những sản phẩm chất lượng cao nhất.
            </p>
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=200"
                  alt="Cupcake"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1587668178277-295251f900ce?w=200"
                  alt="Cupcake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

