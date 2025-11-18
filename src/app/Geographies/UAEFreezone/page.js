import Link from 'next/link';

export default function UAEFreezonePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            UAE Freezone
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-teal-100">
            Leverage freezone advantages for your business
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Optimize your supply chain with UAE freezone benefits. 
            Efficient import-export operations and strategic warehousing solutions.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
