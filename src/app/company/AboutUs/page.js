import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-600 to-slate-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-100">
            Your trusted logistics and fulfillment partner
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Learn about our mission, vision, and the team dedicated to revolutionizing 
            e-commerce logistics. We're committed to helping businesses of all sizes 
            scale efficiently and reach customers globally.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-slate-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors"
          >
            Connect With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
