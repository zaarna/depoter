import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Get in touch with our team
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Have questions about our services? Want to discuss your fulfillment needs? 
            We're here to help. Reach out to us and let's start a conversation about 
            growing your business.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-colors"
          >
            Send Us a Message
          </Link>
        </div>
      </section>
    </div>
  );
}
