
'use client';

import { useState, useMemo } from 'react';
import type { Metadata } from 'next'; // Metadata type can be kept for static generation if needed, but page is client-side now for search.
import { getAllArticles } from '@/lib/data';
import ArticleCard from '@/components/articles/article-card';
import NewsletterSection from '@/components/sections/newsletter-section';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// export const metadata: Metadata = { // Metadata generation needs to be handled differently for client components or moved
//   title: 'Aura Articles - Wellness & Mindfulness',
//   description: 'Explore articles on wellness, mindfulness, meditation, and natural living from Aura.',
// };
// For now, we'll rely on the layout.tsx for general metadata for /articles path. Specific metadata can be added via Head component if needed.


export default function ArticlesPage() {
  const posts = getAllArticles(); // Fetch all posts initially
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) {
      return posts;
    }
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }, [posts, searchTerm]);

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
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles by title, keyword, or tag..."
              className="w-full pl-10 pr-4 py-3 text-base rounded-lg shadow-sm border-border focus:ring-primary focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">
            No articles found matching your search. Try a different keyword!
          </p>
        )}
      </main>
      <NewsletterSection />
    </div>
  );
}
