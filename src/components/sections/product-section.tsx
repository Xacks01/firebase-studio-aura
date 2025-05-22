import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/lib/data';
import type { Product } from '@/types';
import { ShoppingBag } from 'lucide-react';

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full">
          <Image
            src={product.thumbnail}
            alt={product.title}
            data-ai-hint={product.dataAiHint || "product image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-foreground">{product.title}</CardTitle>
        <p className="text-sm text-muted-foreground mb-1">{product.availability}</p>
        <p className="text-lg font-bold text-primary">{product.price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full shadow-md">
          <ShoppingBag className="mr-2 h-4 w-4" /> Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ProductSection() {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          Our Signature Products
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Handpicked selections to enhance your journey towards balance and well-being.
        </p>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No products available at the moment.</p>
        )}
      </div>
    </section>
  );
}
