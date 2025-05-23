
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/lib/data';
import type { Product } from '@/types';
import { ShoppingBag, ArrowRight } from 'lucide-react';

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col rounded-[30px]">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full">
          <Image
            // Use a smaller placeholder for the card view if desired, or keep consistent
            src={product.thumbnail.replace('600x400', '300x200')} 
            alt={product.title}
            data-ai-hint={product.dataAiHint || "product image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-foreground hover:text-primary">
          <Link href={`/products/${product.id}`}>
            {product.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-1">{product.availability}</p>
        <p className="text-lg font-bold text-primary">{product.price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full shadow-md">
          <Link href={`/products/${product.id}`}>
            <ShoppingBag className="mr-2 h-4 w-4" /> Buy Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ProductSection() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section id="products" className="py-16 md:py-24 px-6 mb-5">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Our Signature Products
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Handpicked selections to enhance your journey towards balance and well-being.
        </p>
      </div>
      <div className="bg-[#F5DAD2] rounded-[100px]">
        <div className="container mx-auto max-w-screen-xl px-6 sm:px-6 lg:px-8 py-12 md:py-16">
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No products available at the moment.</p>
          )}
          {products.length > 4 && (
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="shadow-sm">
                <Link href="/shop">
                  View All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
