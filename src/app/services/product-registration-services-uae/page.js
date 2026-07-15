import FaqSection from "@/components/ReusableComponent/FaqSection";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import BenefitsOurProductRegistrationServices from "@/components/ReusableComponent/ProductRegistration/BenefitsOurProductRegistrationServices";
import CompleteProductRegistration from "@/components/ReusableComponent/ProductRegistration/CompleteProductRegistration";
import ProductRegistrationServices from "@/components/ReusableComponent/ProductRegistration/ProductRegistrationServices";
import ReadyToLaunchProduct from "@/components/ReusableComponent/ProductRegistration/ReadyToLaunchProduct";
import RegistrationAcrossIndustries from "@/components/ReusableComponent/ProductRegistration/RegistrationAcrossIndustries";
import RegistrationProcessWorks from "@/components/ReusableComponent/ProductRegistration/RegistrationProcessWorks";
import WhoWeServerProduct from "@/components/ReusableComponent/ProductRegistration/WhoWeServerProduct";
import WhyChooseDepoterProductRegistration from "@/components/ReusableComponent/ProductRegistration/WhyChooseDepoterProductRegistration";
import WhyProductRegistrationImportant from "@/components/ReusableComponent/ProductRegistration/WhyProductRegistrationImportant";
import ScrollToTop from "@/components/ScrollToTop";
import { productregistrationfaq } from "@/data/faqdata";

export default function ProductRegistration() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <ScrollToTop />
        <InnerHeroSection />
        <CompleteProductRegistration />
        <WhyProductRegistrationImportant />
        <ProductRegistrationServices />
        <RegistrationAcrossIndustries />
        <RegistrationProcessWorks />
        <WhyChooseDepoterProductRegistration />
        <BenefitsOurProductRegistrationServices />
        <WhoWeServerProduct />
        <FaqSection faqs={productregistrationfaq} />
        <ReadyToLaunchProduct />
      </main>
    </div>
  );
}
