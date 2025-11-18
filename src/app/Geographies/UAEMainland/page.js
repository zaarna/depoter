import Link from 'next/link';

export default function UAEMainlandPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            UAE Mainland
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Seamless fulfillment across UAE mainland
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Expand your business across UAE mainland with our integrated logistics 
            and fulfillment solutions. Fast delivery, efficient operations.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
