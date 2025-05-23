
"use client"
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { testimonials } from '@/lib/data';
import type { Testimonial } from '@/types';
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils"; // Added import for cn

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
  return (
    <section id="testimonials" className="mb-5 px-6">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Voices of Our Community
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Hear what our customers are saying about their Aura experience.
        </p>
      </div>
      <div className="bg-[#BFD7EA] rounded-[100px]">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {testimonials.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
                loop: testimonials.length > 2, // Loop if more than 2 testimonials
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {testimonials.length > 1 && ( // Only show controls if more than 1 testimonial
                <>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </>
              )}
            </Carousel>
          ) : (
            <p className="text-center text-muted-foreground">No testimonials available yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
