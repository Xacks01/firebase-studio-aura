
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/data';
import BlogCard from '@/components/blog/blog-card';
import NewsletterSection from '@/components/sections/newsletter-section';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aura Blog - Wellness & Mindfulness',
  description: 'Explore articles on wellness, mindfulness, meditation, and natural living from Aura.',
};

// This page will be converted to a client component later to add search functionality
export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="bg-secondary/20">
      <header className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30 text-center">
        <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            The Aura <span className="text-primary">Journal</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights and inspiration for your journey to well-being. Discover tips on mindfulness, natural living, and finding your inner calm.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Search Bar - Will be made functional later */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 text-base rounded-lg shadow-sm border-border focus:ring-primary focus:border-primary"
              disabled // Temporarily disabled until client-side logic is added
            />
          </div>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">
            No blog posts yet. Check back soon!
          </p>
        )}
      </main>
      <NewsletterSection />
    </div>
  );
}
