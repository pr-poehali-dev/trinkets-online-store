
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import DeliveryInfo from '@/components/DeliveryInfo';
import TestimonialSection from '@/components/TestimonialSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <CategorySection />
        <FeaturedProducts />
        <DeliveryInfo />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
