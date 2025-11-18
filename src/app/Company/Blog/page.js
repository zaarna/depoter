import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-100">
            Insights and tips for e-commerce success
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Stay updated with the latest trends, best practices, and industry insights 
            in logistics and e-commerce fulfillment. From growth strategies to 
            operational excellence.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-50 transition-colors"
          >
            Read Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
