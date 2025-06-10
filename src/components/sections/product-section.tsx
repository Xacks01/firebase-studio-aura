
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { products as allProducts } from '@/lib/data';
import type { Product } from '@/types';
import { ShoppingBag } from 'lucide-react';
import React, { useMemo } from 'react';

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col rounded-[30px] relative bg-card h-full">
      <CardHeader className="p-0">
         <Link href={`/products/${product.id}`} aria-label={`View details for ${product.title}`}>
            <div className="relative aspect-video w-full">
              <Image
                src={product.thumbnail}
                alt={product.title}
                data-ai-hint={product.dataAiHint || "Canva template skincare"}
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
      <CardFooter className="p-6 pt-0 mt-auto">
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
  const displayedProducts = useMemo(() => {
    return allProducts.slice(0, 3);
  }, []);

  return (
    <section id="products" className="mb-5">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Skincare Templates
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Explore our range of professionally designed Canva templates for skincare. Elevate your brand's Instagram presence.
        </p>
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
            <p className="text-center text-muted-foreground py-10">No templates available yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
