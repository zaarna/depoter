import Link from 'next/link';

export default function ApparelAccessoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Apparel & Accessories
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Fashion fulfillment made simple
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Manage sizes, colors, and inventory across multiple channels. 
            Fast, reliable fulfillment for fashion and accessories brands.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
