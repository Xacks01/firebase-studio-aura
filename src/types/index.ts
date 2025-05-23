
export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  thumbnail: string;
  dataAiHint?: string;
  title: string;
  availability: string; // Changed from "Instant Download" to e.g., "20 Templates"
  price: string;
  description: string;
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
  rating: number; // Added rating field
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  authorAvatarHint?: string;
  date: string; // Keep as string for simplicity, can be Date object if needed
  views: number;
  likes: number;
  imageUrl: string;
  imageAiHint: string;
  tags?: string[];
};
