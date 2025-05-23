
import type { Metadata } from 'next';
import { DM_Sans, Geist_Mono, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Include weights you need
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-dm-serif-display',
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aura Landing',
  description: 'Experience calm and wellness with Aura.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${geistMono.variable} ${dmSerifDisplay.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-5 flex flex-col gap-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
