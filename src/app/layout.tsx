
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Include weights you need
});

// DM_Serif_Display was intentionally removed to use system "New York" font for headers

export const metadata: Metadata = {
  title: 'Aura | Gut Wellness Canva Templates for Instagram',
  description: 'Professionally designed Canva templates for gut wellness coaches, nutritionists, and brands. Create stunning Instagram content in minutes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow flex flex-col gap-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
