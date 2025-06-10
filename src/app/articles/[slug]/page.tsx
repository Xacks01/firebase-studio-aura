
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
// Badge import removed as tags are no longer displayed here
import { getArticleBySlug, getAllArticles } from '@/lib/data';
import type { Metadata, ResolvingMetadata } from 'next';
import type { Article } from '@/types';
import NewsletterSection from '@/components/sections/newsletter-section';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getArticleBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} - Aura Articles`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.tags, // Metadata can still include tags for SEO if available
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllArticles();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function ArticlePage({ params }: Props) {
  const post = getArticleBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <header className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Button variant="outline" size="sm" asChild className="group">
              <Link href="/articles">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to All Articles
              </Link>
            </Button>
          </div>

          {/* Tags display removed from here */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 mt-4"> {/* Added mt-4 for spacing after removing tags */}
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center">
              <UserCircle className="mr-1.5 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="mr-1.5 h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {post.imageUrl && (
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden mb-8 shadow-xl border border-border">
            <Image
              src={post.imageUrl}
              alt={post.title}
              data-ai-hint={post.imageAiHint}
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-lg"
            />
          </div>
        )}
        
        <article 
          className="prose prose-stone dark:prose-invert max-w-none 
                     lg:prose-lg 
                     prose-headings:font-serif prose-headings:text-foreground prose-headings:mb-4 prose-headings:mt-8
                     prose-p:text-muted-foreground prose-p:leading-relaxed
                     prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                     prose-strong:text-foreground 
                     prose-ul:list-disc prose-ul:pl-6 prose-li:text-muted-foreground prose-li:mb-2
                     prose-ol:list-decimal prose-ol:pl-6
                     prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        
        <Separator className="my-12" />
        
      </main>
      <NewsletterSection />
    </div>
  );
}
