import Link from 'next/link';

export default function DeliveriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Deliveries
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Fast, reliable last-mile delivery
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Our comprehensive delivery network ensures your products reach customers 
            on time and in perfect condition. Real-time tracking, flexible delivery 
            windows, and exceptional customer service.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
