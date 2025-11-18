'use client';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      rating: 5,
      comment: 'Bánh rất ngon và tươi! Tôi đã đặt bánh sinh nhật cho con và mọi người đều khen ngợi. Sẽ quay lại đặt tiếp!',
      avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=ec4899&color=fff',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      rating: 5,
      comment: 'Dịch vụ tuyệt vời, bánh đẹp và ngon. Nhân viên rất nhiệt tình và chuyên nghiệp. Rất hài lòng!',
      avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+B&background=ec4899&color=fff',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Khách hàng nói gì?</h2>
          <p className="max-w-2xl text-base text-gray-500 md:text-lg">
            Lắng nghe chia sẻ thật từ khách hàng của Ap Cake sau mỗi đơn hàng được giao trong ngày.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Khách hàng thân thiết</p>
                  </div>
                </div>
                <div className="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-500">
                  ★ {testimonial.rating.toFixed(1)}
                </div>
              </div>
              <p className="mt-6 text-lg text-gray-600">
                “{testimonial.comment}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

