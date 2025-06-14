
import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, UserCircle } from 'lucide-react';
// Badge import removed as tags are no longer displayed here

type ArticleCardProps = {
  post: Article;
};

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card rounded-xl">
      <CardHeader className="p-0">
        <Link href={`/articles/${post.slug}`} aria-label={`Read more about ${post.title}`}>
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              data-ai-hint={post.imageAiHint}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        {/* Tags display removed */}
        <h3 className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition-colors">
          <Link href={`/articles/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center text-xs text-muted-foreground space-x-3">
          <div className="flex items-center">
            <UserCircle className="mr-1.5 h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto border-t border-border/20">
         <div className="flex justify-end items-center w-full"> 
            <Button variant="default" size="sm" asChild className="shadow-sm bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={`/articles/${post.slug}`}>Read More</Link>
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
