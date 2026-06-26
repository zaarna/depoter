import Link from 'next/link';

export default function HomeGoodsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Home Goods
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Streamline home goods operations
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Handle furniture, decor, and home items with specialized fulfillment. 
            Manage large inventory and complex orders with ease.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
