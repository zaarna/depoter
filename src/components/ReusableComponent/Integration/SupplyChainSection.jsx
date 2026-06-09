"use client";
export default function SupplyChainSection() {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[48%_52%] gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-semibold leading-[1.05] text-[32px] md:text-[48px] lg:text-[48px] text-[#212121]">
              Manage Your Entire
              <br />
              <span className="text-[#F5B42B]">
                Supply Chain in
                <br />
                One Place
              </span>
            </h2>

            <p className="mt-10 text-[18px] md:text-[22px] leading-[1.9] text-[#3F3F3F] max-w-3xl">
              With our platform, you don’t need multiple systems to manage your
              operations. Everything—from orders and inventory to shipping,
              tracking, and returns—is handled in one place. This makes your
              operations easier to manage, improves efficiency, and helps reduce
              errors across your supply chain.
            </p>
          </div>

          {/* Right Illustration Box */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#A8925C] rounded-[24px] p-6 md:p-10 border border-[#8C7746] w-full max-w-[620px]">
              <img
                src="/Supply-Chain.svg"
                alt="Supply Chain Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
