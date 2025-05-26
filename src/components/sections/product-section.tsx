
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products as allProducts } from '@/lib/data';
import type { Product, ProductCategory } from '@/types';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const CATEGORIES: ProductCategory[] = ["Gut Wellness", "Mental Wellness", "Fitness", "Others"];

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col rounded-[30px] relative bg-card">
      <CardHeader className="p-0">
         <Link href={`/products/${product.id}`} aria-label={`View details for ${product.title}`}>
            <div className="relative aspect-video w-full">
              <Image
                src={product.thumbnail} // Ensure this uses the dynamic product thumbnail
                alt={product.title}
                data-ai-hint={product.dataAiHint || "Canva template Instagram"}
                layout="fill"
                objectFit="cover"
              />
            </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-foreground hover:text-primary">
          <Link href={`/products/${product.id}`}>
            {product.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-1">{product.availability}</p>
        <p className="text-lg font-bold text-[#334038]">{product.price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full shadow-md">
          <Link href={`/products/${product.id}`}>
            <ShoppingBag className="mr-2 h-4 w-4" /> View Template
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(CATEGORIES[0]);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  const productsForCategory = allProducts.filter(p => p.category === selectedCategory);
  const displayedProducts = productsForCategory.slice(0, visibleCount);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category as ProductCategory);
    setVisibleCount(3); // Reset to 3 when category changes
  };

  const handleViewMore = () => {
    setVisibleCount(5);
  };

  return (
    <section id="products" className="py-12 md:py-16 mb-5">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Templates
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Explore our range of professionally designed Canva templates. Select a category to find the perfect fit for your brand.
        </p>

        <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="mb-10">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 bg-primary/10 p-1 rounded-lg">
            {CATEGORIES.map(category => (
              <TabsTrigger
                key={category}
                value={category}
                className="py-2.5 text-sm font-medium text-foreground/80 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-md"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5DAD2] rounded-[100px] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-10">No templates available in this category yet.</p>
          )}

          {productsForCategory.length > visibleCount && visibleCount < 5 && (
            <div className="text-center mt-12">
              <Button onClick={handleViewMore} size="lg" variant="default" className="shadow-md bg-primary text-primary-foreground hover:bg-primary/90">
                View More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
           <div className="text-center mt-8">
              <Button asChild size="lg" variant="link" className="text-primary hover:text-primary/80 font-semibold">
                <Link href="/shop">
                  Browse Full Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
