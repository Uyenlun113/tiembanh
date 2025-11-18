'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Liên hệ', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-2xl">
              🍰
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary-500">Ap Cake</p>
              <p className="text-xl font-semibold text-gray-900">Dessert Studio</p>
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
              Đặt bánh ngay
            </Link>
            <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-primary-200 hover:text-primary-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-primary-200 hover:text-primary-600 relative">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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

