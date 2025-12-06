"use client";

import BestSellers from "@/components/BestSellers";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <PopularCategories />
        <BestSellers />
        {/* <Testimonials /> */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
