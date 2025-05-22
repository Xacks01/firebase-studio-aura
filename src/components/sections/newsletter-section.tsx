import NewsletterForm from "./newsletter-form";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Join Our Aura Community
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter for exclusive updates, wellness tips, and special offers delivered straight to your inbox.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
