"use client";

import GradientStepCard from "../GradientStepCard/GradientStepCard";

const steps = [
  {
    id: 1,
    title: "Plug & Connect in Minutes",
    description:
      "Our onboarding specialists ensure a smooth connection between our technology and your eCommerce platforms, marketplaces, and ERP systems — with zero technical hassle. You don't need a developer or complex setup. We handle the integration so you can start using the system quickly.",
    image: "/Plug-Connect.svg",
    reverse: false,
  },
  {
    id: 2,
    title: "Automated Product Master Sync",
    description:
      "We automatically fetch your product data from all connected platforms and map it accurately within our system. This helps you manage your inventory from one place, keep SKU details organized, process orders faster, and maintain consistent product data across all platforms.",
    image: "/Automated-Product.svg",
    reverse: true,
  },
  {
    id: 3,
    title: "Enable Real-Time Data Exchange",
    description:
      "Once your systems are connected, they start sharing data automatically without any manual effort. Orders, inventory, and tracking details are updated in real time, helping you stay in control of your operations. This reduces data mismatches, keeps everything updated faster, and helps you make better decisions.",
    image: "/Enable-Real-Time.svg",
    reverse: false,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-[#FFF7E4]">
      <div className="container">
        {/* Heading */}
        <div className="max-w-[900px] mx-auto text-center mb-14">
          <h2 className="text-[36px] md:text-[52px] font-semibold leading-tight text-[#212121]">
            How It <span className="text-[#F5B42B]">Works</span>
          </h2>

          <p className="mt-4 text-[18px] leading-[1.7] text-[#212121]">
            In just minutes, automate your order fulfilment, inventory sync, and
            shipping operations. Our system is designed to make integration
            simple and fast, without technical complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => (
            <GradientStepCard
              key={step.id}
              id={step.id}
              title={step.title}
              description={step.description}
              image={step.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
