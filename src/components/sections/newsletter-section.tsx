
import NewsletterForm from "./newsletter-form";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-16 md:py-24 bg-[#CAB7E2]">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3A3A]">
              Get Skin-spired!<br />Join Our Newsletter
            </h2>
            <p className="text-lg text-[#3A3A3A]/90 mt-4">
              Sign up to our newsletter and receive a freebie of 5 posts templates!
            </p>
          </div>

          <div className="bg-[#CAB7E2] p-8 md:p-10 rounded-2xl border border-[#3A3A3A] shadow-lg">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
