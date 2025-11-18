'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PopularCategories from '@/components/PopularCategories';
import BestSellers from '@/components/BestSellers';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <PopularCategories />
        <BestSellers />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

