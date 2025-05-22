import type { Product, FAQ, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    thumbnail: 'https://placehold.co/300x200.png',
    dataAiHint: 'wellness product',
    title: 'Aura Bloom Diffuser',
    availability: 'In Stock',
    price: '$49.99',
  },
  {
    id: '2',
    thumbnail: 'https://placehold.co/300x200.png',
    dataAiHint: 'natural soap',
    title: 'Serene Lavender Soap',
    availability: 'In Stock',
    price: '$12.50',
  },
  {
    id: '3',
    thumbnail: 'https://placehold.co/300x200.png',
    dataAiHint: 'organic tea',
    title: 'Calming Chamomile Tea',
    availability: 'Limited Stock',
    price: '$18.00',
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'What makes Aura products unique?',
    answer:
      'Our products are crafted with natural ingredients and a focus on promoting wellness and tranquility. We prioritize quality and sustainability in every item.',
  },
  {
    id: 'faq2',
    question: 'Do you offer international shipping?',
    answer:
      'Currently, we ship to select international destinations. Please check our shipping policy page or contact customer support for more details.',
  },
  {
    id: 'faq3',
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy for unused and unopened products. Please visit our returns page for detailed instructions and conditions.',
  },
  {
    id: 'faq4',
    question: 'Are your products vegan and cruelty-free?',
    answer:
      'Yes, the majority of our products are vegan and all are cruelty-free. We clearly label each product with its specific attributes.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    avatar: 'https://placehold.co/80x80.png',
    dataAiHint: 'happy customer',
    text:
      "Aura's products have transformed my daily routine. The Bloom Diffuser creates such a calming atmosphere in my home. Highly recommend!",
    author: 'Sarah L.',
    role: 'Yoga Instructor',
  },
  {
    id: 't2',
    avatar: 'https://placehold.co/80x80.png',
    dataAiHint: 'smiling person',
    text:
      'I absolutely love the Serene Lavender Soap! It smells divine and leaves my skin feeling so soft. Customer service was also excellent.',
    author: 'Mark R.',
    role: 'Wellness Advocate',
  },
  {
    id: 't3',
    avatar: 'https://placehold.co/80x80.png',
    dataAiHint: 'professional individual',
    text:
      'The Calming Chamomile Tea is my new evening ritual. It helps me unwind after a long day. Beautiful packaging too!',
    author: 'Jessica P.',
    role: 'Busy Professional',
  },
];
