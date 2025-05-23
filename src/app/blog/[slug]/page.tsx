
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, UserCircle, Eye, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/data';
import type { Metadata, ResolvingMetadata } from 'next';
import type { BlogPost } from '@/types';
import NewsletterSection from '@/components/sections/newsletter-section';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  // Assuming post.imageUrl is a relative path like /images/my-post.png
  // or an absolute URL. For Open Graph, absolute URLs are generally preferred.
  // If it's relative, construct an absolute URL.
  // const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; // Define in .env.local
  // const imageUrl = post.imageUrl.startsWith('http') ? post.imageUrl : `${siteUrl}${post.imageUrl}`;

  return {
    title: `${post.title} - Aura Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      // images: [
      //   {
      //     url: imageUrl,
      //     width: 800, // Adjust as needed
      //     height: 450, // Adjust as needed
      //     alt: post.title,
      //   },
      // ],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(), // Assuming post.date can be parsed into a Date
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      // images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <header className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Button variant="outline" size="sm" asChild className="group">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to All Articles
              </Link>
            </Button>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2 justify-center">
              {post.tags.map(tag => (
                <Badge key={tag} variant="default" className="text-sm font-medium bg-primary/80 text-primary-foreground hover:bg-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
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
            <div className="flex items-center">
              <Eye className="mr-1.5 h-4 w-4" />
              <span>{post.views} views</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="mr-1.5 h-4 w-4" />
              <span>{post.likes} likes</span>
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

        {/* Future enhancements: Author bio, related posts, comments section */}
        
      </main>
      <NewsletterSection />
    </div>
  );
}
