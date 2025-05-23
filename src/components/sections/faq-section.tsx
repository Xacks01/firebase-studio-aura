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
    <section id="faq" className="py-16 md:py-24 bg-secondary/30 mb-5">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Find answers to common questions about Aura products and services.
        </p>
        {faqs.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq: FAQ, index: number) => (
              <AccordionItem value={`item-${index + 1}`} key={faq.id} className="border-b">
                <AccordionTrigger className="px-6 py-4 text-left text-base font-medium hover:underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
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
