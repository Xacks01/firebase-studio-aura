
import NewsletterForm from "./newsletter-form";

export default function NewsletterSection() {
  return (
    // Apply background and vertical padding to the outer section
    // This section's background will now be full-width
    // Removed mb-5
    <section id="newsletter" className="py-16 md:py-24 bg-[#CAB7E2]">
      {/* Container to constrain the content within the page layout */}
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Title */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3A3A]">
              Subscribe to<br />Our Newsletter
            </h2>
            {/* Optional: A short descriptive paragraph if needed, not present in the image example
            <p className="text-lg text-slate-600 mt-4">
              Stay updated with our latest news and special offers.
            </p>
            */}
          </div>

          {/* Right Column: Form Container */}
          {/* This inner div keeps its specific styling (padding, border, shadow) for the form area */}
          <div className="bg-[#CAB7E2] p-8 md:p-10 rounded-2xl border border-[#3A3A3A] shadow-lg">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
