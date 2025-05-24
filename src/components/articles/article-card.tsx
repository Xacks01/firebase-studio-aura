
import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, UserCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type ArticleCardProps = {
  post: Article; // Renamed from BlogPost to Article
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
        {post.tags && post.tags.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs font-medium">{tag}</Badge>
            ))}
          </div>
        )}
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
            {/* Removed views and likes, aligned button to the right */}
            <Button variant="default" size="sm" asChild className="shadow-sm bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={`/articles/${post.slug}`}>Read More</Link>
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
