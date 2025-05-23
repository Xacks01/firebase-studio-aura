
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getProductById } from '@/lib/data';
import type { Product } from '@/types';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

export async function generateStaticParams() {
  // In a real app, you might fetch all product IDs here
  // For now, using the hardcoded IDs from lib/data.ts
  const { products } = await import('@/lib/data');
  return products.map((product) => ({
    id: product.id,
  }));
}

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-[#F5DAD2]">
      <Button variant="outline" asChild className="mb-8 group">
        <Link href="/#products">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Products
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-xl">
        <div className="grid md:grid-cols-2 gap-0 md:gap-0">
          <div className="relative aspect-square md:aspect-auto w-full h-full min-h-[300px] md:min-h-[400px]">
            <Image
              src={product.thumbnail}
              alt={product.title}
              data-ai-hint={product.dataAiHint || "product image"}
              layout="fill"
              objectFit="cover"
              className="md:rounded-l-lg md:rounded-tr-none rounded-t-lg"
            />
          </div>
          <div className="flex flex-col">
            <CardHeader className="p-6">
              <CardTitle className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {product.title}
              </CardTitle>
              <p className="text-2xl font-semibold text-primary mb-3">{product.price}</p>
              <p className="text-sm text-muted-foreground">
                Availability: <span className={product.availability === 'In Stock' ? 'text-primary' : 'text-yellow-600'}>{product.availability}</span>
              </p>
            </CardHeader>
            <Separator className="mx-6 w-auto" />
            <CardContent className="p-6 flex-grow">
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </CardContent>
            <CardFooter className="p-6 bg-muted/30 border-t md:rounded-br-lg">
              <Button size="lg" className="w-full shadow-md">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
