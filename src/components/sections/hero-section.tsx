
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="mb-5" // Removed background, rounding, mx, and specific padding from section
    >
      {/* The container itself now becomes the styled, rounded box */}
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-primary rounded-[100px] py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Designs That Radiate Wellness.
            </h1>
            <p className="text-lg md:text-xl text-[#3A3A3A] mb-8 max-w-xl mx-auto md:mx-0">
            Beautiful, ready-to-use Instagram Canva templates designed for gut wellness experts. Create scroll-stopping content that feels calm, clean, and deeply aligned — in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="shadow-sm bg-[#3A3A3A] text-white">
                <Link href="#products">
                  Browse Templates <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/hero-image.png"
              alt="Hero image showcasing Aura Canva templates for gut wellness"
              data-ai-hint="instagram templates wellness"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
