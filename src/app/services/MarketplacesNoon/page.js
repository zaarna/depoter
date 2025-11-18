
import Link from 'next/link';

export default function MarketplacesNoonPage() {


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Marketplaces Noon
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Sell everywhere, fulfill from anywhere
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Connect all your sales channels and manage them from a single platform. 
            Whether you're selling on your website, marketplaces, or social media, 
            we've got you covered.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

    </div>
  );
}