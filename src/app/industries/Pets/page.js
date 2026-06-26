import Link from 'next/link';

export default function PetsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pets
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Pet products fulfillment excellence
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Specialized handling for pet food, toys, and accessories. 
            Reliable fulfillment for pet product retailers and brands.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
