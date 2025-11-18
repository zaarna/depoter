import Link from 'next/link';

export default function HealthWellnessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Health & Wellness
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Streamline your health and wellness business
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Manage inventory, orders, and fulfillment for health and wellness products. 
            Scale your business with integrated logistics and multichannel support.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
