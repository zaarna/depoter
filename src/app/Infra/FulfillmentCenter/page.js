import Link from 'next/link';

export default function FulfillmentCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 to-violet-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fulfillment Center
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-violet-100">
            State-of-the-art fulfillment infrastructure
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Our advanced fulfillment centers are equipped with cutting-edge technology 
            to handle high-volume orders with precision and speed. Inventory management, 
            order processing, and quality assurance all in one place.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-violet-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
