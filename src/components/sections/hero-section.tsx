
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="bg-primary rounded-[100px] mx-5 py-16 px-[10px] mb-5" // Updated py-4 to py-16
    >
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Discover Your <span className="text-primary-foreground">Inner Calm</span> with Aura
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              Elevate your well-being with our thoughtfully curated collection of natural products, designed to bring peace and serenity to your everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="shadow-sm bg-[#3A3A3A] text-white">
                <Link href="#products">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://placehold.co/1200x675.png"
              alt="Serene natural landscape"
              data-ai-hint="wellness nature"
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
