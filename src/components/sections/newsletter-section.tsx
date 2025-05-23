
import NewsletterForm from "./newsletter-form";

export default function NewsletterSection() {
  return (
    // Apply background and vertical padding to the outer section
    // This section's background will now be full-width
    <section id="newsletter" className="py-16 md:py-24 bg-violet-100 mb-5">
      {/* Container to constrain the content within the page layout */}
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Title */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-700">
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
          <div className="bg-violet-100 p-8 md:p-10 rounded-2xl border border-slate-400 shadow-lg">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
