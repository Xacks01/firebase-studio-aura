
import type { Product, FAQ, Testimonial, BlogPost } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    thumbnail: 'https://placehold.co/600x400.png',
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
  {
    id: '4',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'meditation cushion',
    title: 'Zenith Meditation Cushion',
    availability: 'In Stock',
    price: '$35.00',
    description:
      'Find your center with our Zenith Meditation Cushion. Ergonomically designed for comfort and support during your meditation practice. Filled with natural buckwheat hulls and covered in a soft, durable cotton fabric. Features a convenient carry handle.',
  },
  {
    id: '5',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'essential oil set',
    title: 'Essential Oils Starter Set',
    availability: 'In Stock',
    price: '$29.99',
    description:
      'Begin your aromatherapy journey with our Essential Oils Starter Set. Includes three 10ml bottles of our most popular oils: Lavender, Peppermint, and Eucalyptus. 100% pure and therapeutic grade, perfect for diffusing or topical use when diluted.',
  },
  {
    id: '6',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'yoga mat',
    title: 'Eco-Friendly Yoga Mat',
    availability: 'In Stock',
    price: '$55.00',
    description:
      'Practice sustainably with our Eco-Friendly Yoga Mat. Made from natural tree rubber and PU for superior grip and cushioning. Non-toxic, biodegradable, and designed for all types of yoga and fitness routines. Includes a carrying strap.',
  },
  {
    id: '7',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'bath bomb set',
    title: 'Relaxing Bath Bomb Set',
    availability: 'Limited Stock',
    price: '$22.50',
    description:
      'Transform your bath into a spa-like experience with our Relaxing Bath Bomb Set. Includes four handcrafted bath bombs in soothing scents like Rose, Lavender, Chamomile, and Sandalwood. Made with natural ingredients and essential oils.',
  },
  {
    id: '8',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'sleep mask',
    title: 'Silk Sleep Mask',
    availability: 'In Stock',
    price: '$19.99',
    description:
      'Enjoy blissful, uninterrupted sleep with our luxurious Silk Sleep Mask. Made from 100% pure mulberry silk, it\'s incredibly soft and gentle on your skin. Effectively blocks out light to help you achieve deeper, more restful sleep.',
  },
  {
    id: '9',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'incense sticks',
    title: 'Natural Incense Sticks',
    availability: 'In Stock',
    price: '$15.00',
    description:
      'Create a tranquil atmosphere with our Natural Incense Sticks. Hand-dipped and made from high-quality botanicals and resins. Available in a variety of calming scents like Sandalwood, Frankincense, and Nag Champa. Each pack contains 30 sticks.',
  },
  {
    id: '10',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'herbal supplement',
    title: 'Adaptogen Herbal Blend',
    availability: 'In Stock',
    price: '$28.00',
    description:
      'Support your body\'s natural ability to cope with stress with our Adaptogen Herbal Blend. A carefully selected mix of powerful adaptogenic herbs like Ashwagandha, Rhodiola, and Holy Basil. Mix into smoothies, tea, or water.',
  },
  {
    id: '11',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'wellness journal',
    title: 'Mindfulness Journal',
    availability: 'In Stock',
    price: '$24.00',
    description:
      'Cultivate self-awareness and gratitude with our Mindfulness Journal. Features guided prompts, daily reflections, and space for free-form writing. A beautiful tool to support your mental well-being journey.',
  },
  {
    id: '12',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'spa gift set',
    title: 'Luxury Spa Gift Set',
    availability: 'Limited Stock',
    price: '$75.00',
    description:
      'Indulge yourself or a loved one with our Luxury Spa Gift Set. Includes a selection of our finest bath and body products, such as a mini diffuser, bath salts, body lotion, and a scented candle. Beautifully packaged and ready for gifting.',
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

export const blogPosts: BlogPost[] = [
  {
    id: 'blog1',
    slug: 'discover-inner-peace-meditation',
    title: 'Discover Inner Peace: A Beginner\'s Guide to Meditation',
    excerpt: 'Explore the transformative power of meditation and learn simple techniques to start your journey towards a calmer, more centered you.',
    content: '<p>Meditation is an ancient practice that has gained immense popularity in recent years for its profound benefits on mental and emotional well-being. If you\'re new to meditation, the idea might seem daunting, but it\'s actually quite accessible. This guide will walk you through the basics.</p><h3>What is Meditation?</h3><p>At its core, meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</p><h3>Getting Started: Simple Techniques</h3><p><strong>1. Mindful Breathing:</strong> Find a comfortable seated position. Close your eyes gently. Bring your attention to your breath. Notice the sensation of air entering your nostrils, filling your lungs, and then leaving your body. Don\'t try to control your breath; just observe it. If your mind wanders, gently bring your focus back to your breath. Start with 5 minutes and gradually increase the duration.</p><p><strong>2. Body Scan:</strong> Lie down comfortably. Bring your awareness to different parts of your body, starting from your toes and moving up to the crown of your head. Notice any sensations – tingling, warmth, tension – without judgment. This helps in connecting with your physical self and releasing tension.</p><h3>Benefits of Regular Meditation:</h3><ul><li>Reduces stress and anxiety</li><li>Enhances self-awareness</li><li>Improves concentration and focus</li><li>Promotes emotional health</li><li>Can improve sleep quality</li></ul><p>Starting a meditation practice doesn\'t require any special equipment, just a willingness to dedicate a few minutes each day. Be patient with yourself, and remember that consistency is key. Embrace the journey of self-discovery and inner peace.</p>',
    author: 'Aura Admin',
    authorAvatar: 'https://placehold.co/40x40.png',
    authorAvatarHint: 'admin avatar',
    date: 'October 26, 2023',
    views: 1256,
    likes: 342,
    imageUrl: 'https://placehold.co/800x450.png',
    imageAiHint: 'meditation peaceful',
    tags: ['Meditation', 'Wellness', 'Mindfulness'],
  },
  {
    id: 'blog2',
    slug: 'essential-oils-aromatherapy-benefits',
    title: 'The Magic of Aromatherapy: Essential Oils for Well-being',
    excerpt: 'Unlock the secrets of essential oils and how aromatherapy can enhance your physical and emotional health, from boosting mood to relieving stress.',
    content: '<p>Aromatherapy is a holistic healing treatment that uses natural plant extracts to promote health and well-being. Sometimes called essential oil therapy, aromatherapy uses aromatic essential oils medicinally to improve the health of the body, mind, and spirit. It enhances both physical and emotional health.</p><h3>Popular Essential Oils and Their Uses:</h3><p><strong>Lavender:</strong> Known for its calming properties, lavender oil is excellent for relaxation, reducing anxiety, and promoting sleep.</p><p><strong>Peppermint:</strong> Invigorating and refreshing, peppermint oil can help boost energy, improve focus, and relieve headaches.</p><p><strong>Eucalyptus:</strong> Often used to clear airways and relieve congestion, eucalyptus oil is great for respiratory issues.</p><p><strong>Chamomile:</strong> Gentle and soothing, chamomile oil is ideal for calming nerves and promoting a sense of peace.</p><p><strong>Tea Tree:</strong> With its powerful antiseptic properties, tea tree oil is great for skin blemishes and minor wounds.</p><h3>How to Use Essential Oils:</h3><p><strong>Diffusion:</strong> Use an essential oil diffuser (like our Aura Bloom Diffuser!) to disperse the oils into the air.</p><p><strong>Topical Application:</strong> Dilute essential oils with a carrier oil (like coconut or jojoba oil) before applying to the skin. Always do a patch test first.</p><p><strong>Inhalation:</strong> Add a few drops to a bowl of hot water and inhale the steam, or simply inhale directly from the bottle for a quick boost.</p><p>Aromatherapy can be a wonderful addition to your wellness toolkit. Experiment with different oils and methods to find what works best for you.</p>',
    author: 'Aura Admin',
    authorAvatar: 'https://placehold.co/40x40.png',
    authorAvatarHint: 'admin avatar',
    date: 'November 5, 2023',
    views: 987,
    likes: 210,
    imageUrl: 'https://placehold.co/800x450.png',
    imageAiHint: 'essential oils aromatherapy',
    tags: ['Aromatherapy', 'Essential Oils', 'Health'],
  },
   {
    id: 'blog3',
    slug: 'creating-a-mindful-morning-routine',
    title: 'Creating a Mindful Morning Routine for a Productive Day',
    excerpt: 'Learn how to design a morning routine that incorporates mindfulness practices to set a positive tone for your entire day.',
    content: '<p>How you start your morning can significantly impact your mood, productivity, and overall well-being for the rest of the day. A mindful morning routine helps you begin your day with intention and calm, rather than rushing and stress.</p><h3>Elements of a Mindful Morning Routine:</h3><p><strong>1. Wake Up Gently:</strong> Avoid jarring alarms. Consider a sunrise alarm clock or a gentle sound. Give yourself a few moments to stretch and become aware of your body before jumping out of bed.</p><p><strong>2. Hydrate:</strong> Start your day with a glass of water. This helps rehydrate your body after sleep and kickstarts your metabolism.</p><p><strong>3. Mindful Movement:</strong> Engage in some gentle stretching, yoga, or a short walk. Focus on your breath and the sensations in your body.</p><p><strong>4. Meditation or Quiet Reflection:</strong> Dedicate 5-15 minutes to meditation, journaling, or simply sitting in silence. This helps center your mind and set a positive intention for the day.</p><p><strong>5. Nourishing Breakfast:</strong> Eat a healthy, balanced breakfast without distractions like screens. Pay attention to the taste and texture of your food.</p><p><strong>6. Limit Screen Time:</strong> Try to avoid checking emails or social media immediately upon waking. Give your mind space to wake up peacefully.</p><h3>Tips for Sticking to Your Routine:</h3><ul><li>Start small and gradually add elements.</li><li>Be consistent, even on weekends if possible.</li><li>Prepare the night before (e.g., lay out clothes, prep breakfast items).</li><li>Be flexible and adjust as needed. The goal is to support yourself, not create more stress.</li></ul><p>A mindful morning routine is a gift you give yourself. It can transform your days from reactive and chaotic to proactive and peaceful.</p>',
    author: 'Aura Admin',
    authorAvatar: 'https://placehold.co/40x40.png',
    authorAvatarHint: 'admin avatar',
    date: 'November 12, 2023',
    views: 750,
    likes: 180,
    imageUrl: 'https://placehold.co/800x450.png',
    imageAiHint: 'morning routine sunrise',
    tags: ['Mindfulness', 'Routine', 'Productivity', 'Wellness'],
  },
];


// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

// Helper function to get all products
export const getAllProducts = (): Product[] => {
  return products;
};


// Helper functions for blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by most recent
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

