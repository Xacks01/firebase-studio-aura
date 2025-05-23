import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/data';
import type { FAQ } from '@/types';

export default function FaqSection() {
  return (
    // Apply background and vertical padding to the outer section
    // This section's background will now be full-width
    <section id="faq" className="py-16 md:py-24 bg-secondary/30">
      {/* Container to constrain the content within the page layout */}
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        
        {faqs.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq: FAQ, index: number) => (
              <AccordionItem value={`item-${index + 1}`} key={faq.id} className="border-b">
                <AccordionTrigger className="py-4 text-left text-base font-medium hover:underline text-foreground px-0">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-0 text-muted-foreground px-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-center text-muted-foreground">No FAQs available at the moment.</p>
        )}
      </div>
    </section>
  );
}
