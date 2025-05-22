
import type { Product, FAQ, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    thumbnail: 'https://placehold.co/600x400.png', // Larger placeholder for detail page
    dataAiHint: 'wellness diffuser',
    title: 'Aura Bloom Diffuser',
    availability: 'In Stock',
    price: '$49.99',
    description:
      'Elevate your space with the Aura Bloom Diffuser. Its elegant design and ultrasonic technology gently disperse your favorite essential oils, creating a serene and aromatic ambiance. Features multiple mist settings and a soft LED light for a complete sensory experience. Perfect for living rooms, bedrooms, or offices.',
  },
  {
    id: '2',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'lavender soap',
    title: 'Serene Lavender Soap',
    availability: 'In Stock',
    price: '$12.50',
    description:
      'Indulge in the calming embrace of our Serene Lavender Soap. Handcrafted with natural ingredients and pure lavender essential oil, this soap gently cleanses while soothing your skin and senses. Ideal for a relaxing bath or shower, leaving your skin soft, moisturized, and delicately scented.',
  },
  {
    id: '3',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'chamomile tea',
    title: 'Calming Chamomile Tea',
    availability: 'Limited Stock',
    price: '$18.00',
    description:
      'Unwind with our Calming Chamomile Tea, a soothing blend of organic chamomile flowers. Naturally caffeine-free, this tea is perfect for relaxing evenings or any time you need a moment of peace. Enjoy its delicate floral notes and gentle calming properties. Each pack contains 20 biodegradable tea bags.',
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

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
