import Link from 'next/link';

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-600 to-lime-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Case Study
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-lime-100">
            Success stories from our clients
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Explore how leading brands have transformed their operations with our 
            fulfillment solutions. Real results, real growth, real impact on their 
            bottom line.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-lime-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-50 transition-colors"
          >
            View Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}
