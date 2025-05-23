
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';
import type { Testimonial } from '@/types';
import { Star } from 'lucide-react';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="bg-background text-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col rounded-xl overflow-hidden">
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
      <CardContent className="p-6 flex-grow">
        <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
        </div>
        <blockquote className="text-muted-foreground italic leading-relaxed">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 mb-5">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Voices of Our Community
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Hear what our customers are saying about their Aura experience.
        </p>
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No testimonials available yet.</p>
        )}
      </div>
    </section>
  );
}
