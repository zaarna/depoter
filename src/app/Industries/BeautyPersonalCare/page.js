import Link from 'next/link';

export default function BeautyPersonalCarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-pink-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Beauty & Personal Care
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pink-100">
            Elevate your beauty brand with smart fulfillment
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Manage cosmetics, skincare, and personal care products with precision. 
            From marketplace integration to order fulfillment, we handle it all.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
