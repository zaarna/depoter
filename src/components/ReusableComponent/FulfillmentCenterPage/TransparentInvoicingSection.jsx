"use client";

const invoiceFeatures = [
  {
    number: "01",
    title: "System-Generated Accuracy",
    description:
      "High-accuracy invoices with zero manual errors or hidden costs.",
    dark: false,
  },
  {
    number: "02",
    title: "Line-Item Clarity",
    description:
      "Detailed line items for complete transparency in every transaction.",
    dark: true,
  },
  {
    number: "03",
    title: "Audit Visibility",
    description:
      "Full supporting documents for audit visibility and easy reconciliation.",
    dark: false,
  },
  {
    number: "04",
    title: "Financial Oversight",
    description:
      "Real-time access to order-level billing and COD (Cash on Delivery) KPIs.",
    dark: true,
  },
];

export default function TransparentInvoicingSection() {
  return (
    <section className="transparent-invoicing-bg">
      <div className="container mx-auto px-4">
        <div
          className="overflow-hidden rounded-lg  py-8 lg:py-14 lg:px-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] leading-tight text-white ">
                Automated, Accurate
                <br />& Transparent
              </h2>

              <h2 className="mt-2 text-[clamp(1.5rem,1rem+2vw,3rem)] text-[#F7BA2C] ">
                Invoicing
              </h2>

              <p className="mt-6 text-[20px] w-[90%] mx-auto lg:mx-0 leading-relaxed text-white">
                Financial transparency is key to a long-term partnership. Our
                system ensures your billing is as accurate as our shipping.
              </p>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-6">
              {invoiceFeatures.map((item) => (
                <InvoiceFeatureCard key={item.number} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InvoiceFeatureCard({ number, title, description, dark }) {
  return (
    <div
      className={`flex items-center rounded-2xl px-5 py-5 transition-all duration-300 ${dark ? "bg-[#3F2C07] text-white" : "bg-[#F7BA2C] text-[#1A1A1A]"
        }`}
    >
      {/* Number */}
      <div className="flex items-center">
        <span className="text-4xl font-bold">{number}</span>

        <div
          className={`mx-4 h-14 w-[2px] ${dark ? "bg-white/70" : "bg-black/70"
            }`}
        />
      </div>

      {/* Content */}
      <div>
        <h4 className="text-xl font-bold">{title}</h4>

        <p
          className={`mt-2 text-[18px] leading-relaxed ${dark ? "text-white/90" : "text-black/80"
            }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
