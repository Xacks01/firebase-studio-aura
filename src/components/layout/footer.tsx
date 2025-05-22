
import Link from 'next/link';
import { Github, Twitter, Instagram, Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Aura Landing Home">
              <Leaf className="h-7 w-7 text-primary" />
              <span className="font-bold text-xl text-foreground">Aura</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Embrace tranquility and wellness with Aura.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#hero" className="text-muted-foreground hover:text-primary text-sm">Home</Link></li>
              <li><Link href="#products" className="text-muted-foreground hover:text-primary text-sm">Products</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary text-sm">Blog</Link></li>
              <li><Link href="#faq" className="text-muted-foreground hover:text-primary text-sm">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Aura Landing. All rights reserved.</p>
          <p className="mt-1">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link> | <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
