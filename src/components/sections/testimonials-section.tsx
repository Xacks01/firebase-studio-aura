
"use client"
import type { EmblaCarouselType } from 'embla-carousel-react';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { testimonials } from '@/lib/data';
import type { Testimonial } from '@/types';
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="bg-background text-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col rounded-[30px] overflow-hidden h-full">
      <CardHeader className="flex flex-row items-center gap-4 p-6">
        <Avatar className="h-16 w-16 border-2 border-border">
          <AvatarImage src={testimonial.avatar} alt={testimonial.author} data-ai-hint={testimonial.dataAiHint || "person avatar"} />
          <AvatarFallback>{testimonial.author.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-lg font-semibold text-foreground">{testimonial.author}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "h-5 w-5",
                    i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50 fill-muted-foreground/20"
                  )}
                />
            ))}
        </div>
        <blockquote className="text-muted-foreground italic leading-relaxed flex-grow">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect); 

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section id="testimonials" className="mb-5">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Testimonials
          </h2>
        </div>
        
        <div className="bg-[#BFD7EA] rounded-[100px] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          {testimonials.length > 0 ? (
            <>
              <Carousel
                opts={{
                  align: "start",
                  loop: testimonials.length > 2, 
                }}
                className="w-full"
                setApi={setEmblaApi}
              >
                <CarouselContent className="-ml-4">
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <TestimonialCard testimonial={testimonial} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              {scrollSnaps.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {scrollSnaps.map((_, index) => (
                    <Button
                      key={index}
                      onClick={() => scrollTo(index)}
                      variant="outline"
                      size="icon"
                      className={cn(
                        "h-2 w-2 rounded-full p-0",
                        index === selectedIndex 
                          ? "bg-primary border-primary/50 scale-110" 
                          : "bg-muted/50 border-border hover:bg-muted"
                      )}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-muted-foreground">No testimonials available yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
