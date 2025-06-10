
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllProducts } from '@/lib/data';
import type { Product } from '@/types';
import { ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shop All Skincare Canva Templates - Aura',
  description: 'Explore the full collection of Aura Canva templates for skincare Instagram posts.',
};

// Reusable ProductCard component (can be extracted to its own file if used elsewhere extensively)
function ShopProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card rounded-xl">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} aria-label={`View details for ${product.title}`}>
          <div className="relative aspect-video w-full">
            <Image
              src={product.thumbnail.replace('600x400', '400x267')} 
              alt={product.title}
              data-ai-hint={product.dataAiHint || "Canva template skincare"}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition-colors">
          <Link href={`/products/${product.id}`}>
            {product.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-1">{product.availability}</p>
        <p className="text-lg font-bold text-[#334038]">{product.price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto border-t border-border/20">
        <Button asChild className="w-full shadow-md">
          <Link href={`/products/${product.id}`}>
            <ShoppingBag className="mr-2 h-4 w-4" /> View Template
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}


export default function ShopPage() {
  const allProducts = getAllProducts();

  return (
    <div className="bg-secondary/20">
      <header className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30 text-center">
        <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Our <span className="text-primary">Full Skincare Template Collection</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover all our thoughtfully curated Canva templates designed to help you create beautiful and effective Instagram content for your skincare brand.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {allProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allProducts.map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">
            No templates available at the moment. Please check back soon!
          </p>
        )}
      </main>
    </div>
  );
}
