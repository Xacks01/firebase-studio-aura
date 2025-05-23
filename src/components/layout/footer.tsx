
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social icons data - assuming these are the correct mappings
  const socialLinks = [
    { href: "#", label: "Instagram", iconSrc: "/assets/images/ig.svg" },
    { href: "#", label: "Facebook", iconSrc: "/assets/images/face.svg" },
    { href: "#", label: "TikTok", iconSrc: "/assets/images/tik.svg" },
    { href: "#", label: "Pinterest", iconSrc: "/assets/images/pin.svg" },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8">
        <Separator className="bg-slate-600 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            <span className="font-bold">Aura</span> &copy; {currentYear} copyright all rights reserved
          </p>
          <div className="flex space-x-5">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} aria-label={social.label} className="text-slate-300 hover:text-white">
                <img src={social.iconSrc} alt={`${social.label} icon`} className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
