
import HeroSection from '@/components/sections/hero-section';
import ProductSection from '@/components/sections/product-section';
import FaqSection from '@/components/sections/faq-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import NewsletterSection from '@/components/sections/newsletter-section';
import CustomDesignSection from '@/components/sections/custom-design-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <TestimonialsSection />
      <CustomDesignSection />
      <FaqSection />
      <NewsletterSection />
    </>
  );
}
