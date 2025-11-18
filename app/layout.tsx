import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bánh Gato Thúy Dung - Bánh Sinh Nhật & Bánh Ngọt",
  description: "Tiệm bánh gato Thúy Dung với hương vị gia truyền và phong cách hiện đại.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
