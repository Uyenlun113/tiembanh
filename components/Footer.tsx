import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-2xl">
                🍰
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Ap Cake</p>
                <p className="text-xl font-semibold">Dessert Studio</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Chúng tôi làm bánh theo đơn đặt hàng với nguyên liệu sạch và phong cách hiện đại.
            </p>
            <div className="mt-6 flex gap-3">
              {['IG', 'FB', 'TT'].map((item) => (
                <button
                  key={item}
                  className="h-10 w-10 rounded-full border border-white/20 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Cửa hàng</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li><Link href="/products" className="transition hover:text-white">Danh sách sản phẩm</Link></li>
              <li><Link href="/categories" className="transition hover:text-white">Danh mục</Link></li>
              <li><Link href="/products?featured=true" className="transition hover:text-white">Bộ sưu tập nổi bật</Link></li>
              <li><Link href="/contact" className="transition hover:text-white">Hợp tác</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Hỗ trợ</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>Hotline: 0123 456 789</li>
              <li>Email: hello@apcake.com</li>
              <li>123 Nguyễn Huệ, Quận 1</li>
              <li>TP. Hồ Chí Minh</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">App mobile</h4>
            <div className="mt-4 space-y-3">
              <button className="flex w-full items-center justify-between rounded-2xl border border-white/20 px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-white">
                App Store
                <span aria-hidden>→</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl border border-white/20 px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-white">
                Google Play
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Ap Cake Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

