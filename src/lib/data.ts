
import type { Product, FAQ, Testimonial, Article, ProductCategory } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'Canva template skincare routine',
    title: 'Daily Glow Skincare Routine Pack',
    availability: '20 Templates',
    price: '$29.99',
    description:
      'Kickstart your skincare content with 20 professionally designed Canva templates for Instagram. Includes posts on cleansers, serums, moisturizers, and SPF. Fully editable.',
    gumroadUrl: '#',
    category: "Core Skincare",
  },
  {
    id: '2',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'Instagram story beauty tips',
    title: 'Radiant Skin Story Templates',
    availability: '15 Templates',
    price: '$19.50',
    description:
      'Engage your audience with 15 interactive Instagram Story Canva templates focused on beauty tips, Q&A, and daily skincare reminders. Easy to customize.',
    gumroadUrl: '#',
    category: "Core Skincare",
  },
  {
    id: '3',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'DIY face mask Canva template',
    title: 'DIY Beauty Recipe Cards',
    availability: '10 Templates',
    price: '$22.00',
    description:
      'Share your favorite DIY skincare recipes! This pack includes 10 beautifully designed Canva templates for Instagram posts, perfect for showcasing ingredients and instructions for homemade masks and treatments.',
    gumroadUrl: '#',
    category: "Beauty Rituals",
  },
  {
    id: '4',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'Canva template infographic skincare ingredients',
    title: 'Skincare Ingredient Spotlight Pack',
    availability: '12 Templates',
    price: '$25.00',
    description:
      'Educate your followers with 12 eye-catching infographic Canva templates about key skincare ingredients like Vitamin C, Retinol, Hyaluronic Acid. Simplify complex topics.',
    gumroadUrl: '#',
    category: "Beauty Rituals",
  },
   {
    id: '5',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'skincare challenge template beauty',
    title: '7-Day Glow Up Challenge Templates',
    availability: '30+ Templates',
    price: '$39.99',
    description:
      'Launch a 7-day skincare challenge with this comprehensive Canva template bundle. Includes daily posts, story prompts, and cover images to guide your audience to radiant skin.',
    gumroadUrl: '#',
    category: "Core Skincare",
  },
  {
    id: '6',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'Canva template bundle beauty tools',
    title: 'Beauty Tools & Tech Canva Bundle',
    availability: '50+ Templates',
    price: '$67.00',
    description:
      'Get all our top beauty tech & tools templates in one bundle! Over 50+ Canva designs including posts, stories, tutorials for gua sha, facial rollers, LED masks.',
    gumroadUrl: '#',
    category: "Skin Tools & Tech",
  },
  {
    id: '7',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'self-care Canva template beauty',
    title: 'Self-Care Sunday Skincare Carousel',
    availability: '8 Templates',
    price: '$24.50',
    description:
      'Encourage relaxing self-care rituals with 8 engaging carousel post Canva templates. Each template is designed to share pampering tips and skincare routines. Fully customizable.',
    gumroadUrl: '#',
    category: "Core Skincare",
  },
  {
    id: '8',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'Instagram quote template beauty',
    title: 'Beauty & Confidence Quotes Pack',
    availability: '30 Templates',
    price: '$15.99',
    description:
      'Inspire your audience with 30 beautifully designed quote and affirmation Canva templates for Instagram, suitable for general beauty and positive self-image.',
    gumroadUrl: '#',
    category: "General Beauty",
  },
  {
    id: '9',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'Canva template testimonial beauty',
    title: 'Beauty Client Testimonial Templates',
    availability: '10 Templates',
    price: '$18.00',
    description:
      'Showcase your client success stories with 10 professional Canva templates designed for beauty testimonials. Build trust and credibility with these easy-to-edit designs.',
    gumroadUrl: '#',
    category: "Skin Tools & Tech",
  },
  {
    id: '10',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'myth debunking template skincare',
    title: 'Skincare Mythbusters Templates',
    availability: '12 Templates',
    price: '$20.00',
    description:
      'Debunk common skincare myths with this set of 12 informative Canva templates. Perfect for Q&A style posts or "Fact vs. Fiction" content on your Instagram.',
    gumroadUrl: '#',
    category: "General Beauty",
  },
  {
    id: '11',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'product launch Canva template skincare',
    title: 'Skincare Product Launch Kit Templates',
    availability: '25+ Templates',
    price: '$45.00',
    description:
      'Promote your new skincare product or services with this comprehensive Canva launch kit. Includes templates for announcement posts, countdowns, early bird offers, and more.',
    gumroadUrl: '#',
    category: "General Beauty",
  },
  {
    id: '12',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'seasonal skincare Canva template beauty',
    title: 'Seasonal Skincare Guide Templates',
    availability: '20 Templates (4 Sets)',
    price: '$27.00',
    description:
      'Highlight seasonal skincare tips with these vibrant Canva templates. Includes 4 sets (Spring, Summer, Autumn, Winter) with 5 posts each. Perfect for estheticians.',
    gumroadUrl: '#',
    category: "Core Skincare",
  },
  {
    id: '13',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'pamper routine beauty',
    title: 'Daily Pamper Routine Prompts',
    availability: '30 Templates',
    price: '$17.00',
    description: 'A beautiful set of 30 Canva templates featuring daily prompts to foster self-love and skin pampering. Perfect for beauty influencers.',
    gumroadUrl: '#',
    category: "Beauty Rituals",
  },
  {
    id: '14',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'facial massage beauty',
    title: 'Facial Massage Technique Cards',
    availability: '20 Templates',
    price: '$15.00',
    description: '20 elegantly designed Canva templates showcasing simple facial massage techniques. Help your audience achieve a natural lift and glow.',
    gumroadUrl: '#',
    category: "Beauty Rituals",
  },
  {
    id: '15',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'skincare device tutorial',
    title: 'Beauty Device How-To Tracker',
    availability: '15 Templates',
    price: '$19.00',
    description: 'Guide your clients with 15 Canva templates for tracking use of skincare devices and their benefits. Stylish and easy to use.',
    gumroadUrl: '#',
    category: "Skin Tools & Tech",
  },
  {
    id: '16',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'beauty habits planner',
    title: 'Radiant Skin Habits Planner Pages',
    availability: '25 Templates',
    price: '$22.00',
    description: 'A collection of 25 Canva templates for creating printable or digital beautiful skin habits planners. Ideal for estheticians and beauty coaches.',
    gumroadUrl: '#',
    category: "Skin Tools & Tech",
  },
  {
    id: '17',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'beauty checklist skincare',
    title: 'Ultimate Glow Checklist Templates',
    availability: '10 Templates',
    price: '$12.00',
    description: '10 beautiful Canva checklist templates to help your audience build and maintain their ultimate skincare & beauty routines.',
    gumroadUrl: '#',
    category: "General Beauty",
  }
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'What am I actually getting with these templates?',
    answer:
      'You receive fully editable Canva templates designed for skincare and beauty Instagram content. You can customize colors, fonts, images, and text to match your brand. You\'ll get a link to access the templates directly in your Canva account (free or Pro).',
  },
  {
    id: 'faq2',
    question: 'Do I need a Canva Pro account to use these?',
    answer:
      'Most of our templates are designed to work with both free and Pro Canva accounts. If a Pro account is recommended for specific elements, it will be mentioned in the template description.',
  },
  {
    id: 'faq3',
    question: 'What is your refund policy for digital templates?',
    answer:
      'Due to the digital nature of our products, we generally do not offer refunds. However, if you encounter any issues accessing or using your templates, please contact us, and we\'ll be happy to help.',
  },
  {
    id: 'faq4',
    question: 'Can I use these templates for multiple clients if I\'m a social media manager?',
    answer:
      'Each purchase grants you a license to use the templates for one personal or business Instagram account. If you wish to use them for multiple clients, please purchase a separate copy for each client or contact us for agency licensing options.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    avatar: 'https://placehold.co/80x80.png',
    dataAiHint: 'happy esthetician',
    text:
      "Aura's Canva templates have transformed my esthetician business's Instagram! I save so much time, and my feed looks incredibly professional and on-brand.",
    author: 'Chloe M., Licensed Esthetician',
    role: 'Skincare Specialist',
    rating: 5,
  },
  {
    id: 't2',
    avatar: 'https://placehold.co/80x80.png',
    dataAiHint: 'smiling beauty influencer',
    text:
      'I absolutely love the Radiant Skin Story Templates! They are so easy to customize and have really boosted my engagement with my followers. Highly recommend for any beauty influencer!',
    author: 'Ava S.',
    role: 'Beauty Influencer',
    rating: 4,
  },
  {
    id: 't3',
    avatar: 'https://placehold.co/80x80.png',
    dataAiHint: 'skincare blogger',
    text:
      'The DIY Beauty Recipe card templates are stunning! My followers adore the skincare recipes I share using these. Aura makes content creation a joy.',
    author: 'Olivia P.',
    role: 'Skincare Blogger',
    rating: 4,
  },
  {
    id: 't4',
    avatar: 'https://placehold.co/80x80.png',
    dataAiHint: 'satisfied beauty entrepreneur',
    text:
      "The Skincare Product Launch Kit is incredible value! So many templates, all beautifully designed. My Instagram presence has transformed for my new product line.",
    author: 'Sophia K.',
    role: 'Beauty Brand Owner',
    rating: 5,
  },
  {
    id: 't5',
    avatar: 'https://placehold.co/80x80.png',
    dataAiHint: 'makeup artist happy',
    text:
      "I was hesitant about templates, but Aura's designs are so flexible and chic. Customizing them is super easy, even for a Canva beginner like me. Perfect for my MUA portfolio!",
    author: 'Liam B.',
    role: 'Makeup Artist',
    rating: 4,
  },
];

export const articlesData: Article[] = [
  {
    id: 'article1',
    slug: 'canva-hacks-skincare-posts',
    title: '5 Canva Hacks for Stunning Skincare Instagram Posts',
    excerpt: 'Learn simple Canva tricks to make your Instagram content about skincare and beauty stand out and captivate your audience.',
    content: '<p>Creating visually appealing Instagram posts is key to engaging your audience, especially in the competitive beauty and skincare space. Canva is a fantastic tool, and with a few hacks, you can elevate your skincare content from good to gorgeous.</p><h3>1. Consistent Branding with Styles</h3><p>Use Canva\'s "Styles" feature to quickly apply your brand fonts and colors to any template. This ensures brand consistency across all your posts with just a few clicks, crucial for a memorable skincare brand.</p><h3>2. Engaging Text Layouts for Beauty Tips</h3><p>Don\'t just type plain text. Experiment with text effects, elegant font pairings, and subtle animations for Reels or Stories. Use varying font weights and sizes to create visual hierarchy and emphasize key skincare tips or ingredient benefits.</p><h3>3. Utilize Frames and Grids for Product Shots</h3><p>Incorporate product images or texture shots seamlessly using Canva\'s frames and grids. For skincare, this could be luxurious cream textures, flatlays of your product line, or model shots showcasing glowing skin.</p><h3>4. Animate Your Stories for Skincare Routines</h3><p>For Instagram Stories, use Canva\'s animation features to bring your text, product highlights, and step-by-step skincare routines to life. Simple animations can make your stories more dynamic and keep viewers engaged longer.</p><h3>5. Leverage High-Quality Stock Photos (Thoughtfully)</h3><p>Canva offers a vast library of stock photos. Use them to complement your message—think lifestyle shots evoking self-care, close-ups of botanical ingredients, or diverse models. Mix them with your own photos or graphics to maintain a unique brand feel.</p><p>By implementing these simple Canva hacks, you can create more professional and engaging Instagram posts that effectively communicate your skincare brand\'s message and aesthetic.</p>',
    author: 'Aura Admin',
    authorAvatar: 'https://placehold.co/40x40.png',
    authorAvatarHint: 'admin avatar',
    date: 'October 26, 2023',
    imageUrl: 'https://placehold.co/800x450.png',
    imageAiHint: 'Canva design beauty social media',
    tags: ['Canva', 'Instagram', 'Skincare', 'Beauty Marketing'],
  },
  {
    id: 'article2',
    slug: 'content-pillars-skincare-instagram',
    title: 'Content Pillars for Your Skincare Instagram',
    excerpt: 'Struggling with what to post? Discover key content pillars that will resonate with your skincare audience and keep your Instagram feed fresh and valuable.',
    content: '<p>A strong content strategy is built on solid content pillars. For a skincare Instagram account, these pillars help you consistently provide value and attract your ideal audience. Here are some ideas:</p><h3>1. Educational Posts (Ingredient Spotlights & Skin Science)</h3><p>Share insights about skin types, common concerns (acne, aging, sensitivity), the science behind key ingredients (e.g., retinol, vitamin C, niacinamide), and myth-busting common skincare misconceptions. Break down complex topics into easily understandable snippets using infographics and carousels.</p><h3>2. Product Features & How-To\'s</h3><p>Showcase your products, how to use them, their benefits, and texture shots. Create tutorials, before & afters (with permission), and explain how products fit into different routines. User-generated content featuring your products is gold.</p><h3>3. Skincare Routines & Rituals</h3><p>Share morning and evening skincare routines, weekly treatment ideas (like masking or exfoliation), and tips for different skin types or concerns. Emphasize the self-care aspect of skincare rituals.</p><h3>4. Client Transformations & Testimonials</h3><p>Showcase the positive impact of your products or services. Share testimonials (with permission), before & after photos, or case studies that highlight improvements in skin health and confidence.</p><h3>5. Q&A / Ask An Esthetician</h3><p>Engage your audience by inviting questions about skincare. You can do this through story Q&A stickers or dedicated posts. This builds community and positions you as an expert in the skincare field.</p><p>By rotating through these content pillars, you can maintain a diverse and engaging Instagram presence that supports your skincare brand and helps your audience achieve their skin goals.</p>',
    author: 'Aura Admin',
    authorAvatar: 'https://placehold.co/40x40.png',
    authorAvatarHint: 'admin avatar',
    date: 'November 5, 2023',
    imageUrl: 'https://placehold.co/800x450.png',
    imageAiHint: 'skincare content strategy',
    tags: ['Content Strategy', 'Instagram', 'Skincare', 'Beauty Marketing'],
  },
   {
    id: 'article3',
    slug: 'batch-create-instagram-content-skincare',
    title: 'How to Batch Create Instagram Content for Your Skincare Brand',
    excerpt: 'Save time and stay consistent by learning how to batch create your skincare Instagram content. Tips and tools to streamline your workflow.',
    content: '<p>Consistency is key on Instagram, but creating daily content can be overwhelming for a busy skincare brand or esthetician. Batch creating is a productivity hack that allows you to produce a week\'s or even a month\'s worth of content in one or two dedicated sessions.</p><h3>1. Plan Your Content Calendar</h3><p>Before you start creating, outline your posts for the upcoming period. Decide on topics based on your content pillars (e.g., ingredient education, product spotlights, skincare routines), upcoming promotions, or seasonal themes relevant to skincare (e.g., summer SPF tips, winter hydration).</p><h3>2. Gather Your Assets</h3><p>Collect all necessary product images, brand elements (logos, color codes), model photos, and any research or notes you need for your posts. If using templates (like Aura\'s!), have them ready in Canva.</p><h3>3. Dedicate Time Blocks</h3><p>Set aside specific blocks of time for content creation. Minimize distractions during these sessions. For example, one block for writing captions and researching hashtags, another for designing visuals in Canva.</p><h3>4. Customize Templates Efficiently</h3><p>When using Canva templates, customize them in batches. For example, update the text for all posts in a series first, then add your product images, then tweak colors if needed to match a specific campaign. This is faster than doing each post from start to finish individually.</p><h3>5. Write Engaging Captions & Hashtags</h3><p>Write all your captions in one go. Use a document or a social media planning tool. Craft compelling copy that educates, inspires, or encourages engagement. Research relevant skincare and beauty hashtags and group them for easy use.</p><h3>6. Schedule Your Posts</h3><p>Use a scheduling tool (like Later, Buffer, or Meta Business Suite) to schedule your completed posts. This ensures your content goes out consistently even when you\'re busy with clients or product development.</p><p>Batch creating takes discipline but significantly reduces stress and improves the quality and consistency of your skincare brand\'s Instagram content, helping you connect with your audience and grow your business.</p>',
    author: 'Aura Admin',
    authorAvatar: 'https://placehold.co/40x40.png',
    authorAvatarHint: 'admin avatar',
    date: 'November 12, 2023',
    imageUrl: 'https://placehold.co/800x450.png',
    imageAiHint: 'skincare content workflow',
    tags: ['Content Creation', 'Instagram', 'Productivity', 'Skincare Marketing', 'Canva'],
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


// Helper functions for articles
export const getAllArticles = (): Article[] => {
  // Sort by most recent date
  return [...articlesData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articlesData.find((post) => post.slug === slug);
};
