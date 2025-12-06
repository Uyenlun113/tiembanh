"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-2xl">🍰</div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary-500">Bánh Gato</p>
              <p className="text-xl font-semibold text-gray-900">Thúy Dung</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 rounded-full bg-white/80 px-2 py-1 shadow-[0_10px_40px_rgba(236,72,153,0.08)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-primary-50 hover:text-primary-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 rounded-full border border-primary-200 px-5 py-2 text-sm font-semibold text-primary-600 transition hover:bg-primary-50"
            >
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Đặt bánh ngay : 0988 884 285
            </Link>
            <a
              href="tel:0988884285"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-primary-200 hover:text-primary-600"
              aria-label="Gọi điện"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.57 2.29a2 2 0 01-.45 1.793l-1.21 1.21a16 16 0 006.06 6.06l1.21-1.21a2 2 0 011.79-.45l2.29.57A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C8.163 23 1 15.837 1 7V6a2 2 0 012-2z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/thuydanghn?locale=vi_VN"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-primary-200 hover:text-primary-600"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.4h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <Link
              href="/products"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-primary-200 hover:text-primary-600"
              aria-label="Tìm kiếm sản phẩm"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
            <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-primary-200 hover:text-primary-600 relative">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[10px] font-semibold text-white">
                0
              </span>
            </button>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 lg:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 rounded-2xl border border-primary-100 bg-white p-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-primary-50 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/products"
                className="rounded-xl bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Đặt bánh ngay
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
