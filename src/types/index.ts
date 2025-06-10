
export type NavItem = {
  label: string;
  href: string;
};

export type ProductCategory = "Core Skincare" | "Beauty Rituals" | "Skin Tools & Tech" | "General Beauty";

export type Product = {
  id: string;
  thumbnail: string;
  dataAiHint?: string;
  title: string;
  availability: string; // e.g., "20 Templates"
  price: string;
  description: string;
  gumroadUrl?: string;
  category: ProductCategory; // Updated category
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  avatar: string;
  dataAiHint?: string;
  text: string;
  author: string;
  role: string;
  rating: number;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // This will store the HTML content
  author: string;
  authorAvatar?: string;
  authorAvatarHint?: string;
  date: string;
  imageUrl: string;
  imageAiHint: string;
  tags?: string[];
};
