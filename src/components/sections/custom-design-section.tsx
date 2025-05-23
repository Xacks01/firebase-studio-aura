
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function CustomDesignSection() {
  return (
    <section id="custom-design" className="py-16 md:py-24 bg-[#F1C644]">
      <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3A3A3A] mb-6">
          Your Vision, Our Expertise
        </h2>
        <p className="text-lg text-[#3A3A3A] mb-10 max-w-xl mx-auto">
          Looking for a more tailored approach? Aura offers custom Canva template design services. We can create unique designs from scratch or customize our existing templates to perfectly fit your brand's needs. Let's bring your specific vision to life.
        </p>
        <Button asChild size="lg" className="shadow-md bg-[#3A3A3A] text-white">
          {/* Replace with your actual email address */}
          <a href="mailto:hello@aura-templates.com"> 
            <Mail className="mr-2 h-5 w-5" />
            Discuss Your Project
          </a>
        </Button>
      </div>
    </section>
  );
}
