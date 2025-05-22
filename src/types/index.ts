
export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  thumbnail: string;
  dataAiHint?: string;
  title: string;
  availability: string;
  price: string;
  description: string; // Added description field
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
};
