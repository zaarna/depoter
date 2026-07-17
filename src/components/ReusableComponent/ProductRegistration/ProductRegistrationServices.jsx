"use client";
import { motion } from "framer-motion";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import TechnologyCards from "../B2b_Sections/TechnologyCards";
import RegistrationServiceCards from "./RegistrationServiceCards";
import Button from "../Button/Button";

const features = [
    {
        title: "Regulatory Approval & Compliance",
        description: (<>We help you identify the correct regulatory authority and approval pathway based on your product category. This includes platforms such as Montaji (Dubai Municipality), MoIAT certification schemes, <strong style={{ fontWeight: "600" }}>ECAS (Emirates Conformity Assessment Scheme), ESMA standards,</strong> and MOHAP approvals.</>)
        ,
        icon: "/regulatory-approval.svg",
    },
    {
        title: "Documentation & Submission",
        description:
            "Proper documentation is critical for approval in the UAE. We support you by preparing all required documents, conducting ingredient audits to identify any banned or non-halal substances, and reviewing product specifications and formulations. Our team also submits applications through official portals like Montaji and MoIAT systems, while handling corrections and authority queries to ensure a smooth approval process.",
        icon: "/documentation-submission.svg",
    },
    {
        title: "Label Review & Compliance",
        description:
            "Incorrect labeling is one of the most common reasons for product rejection in the UAE. We make sure your labels fully meet regulatory guidelines by adding mandatory Arabic translation, clearly presenting ingredient details and product information, and ensuring compliance with GSO labeling standards for smooth approval.",
        icon: "/label-review.svg",
    },
    {
        title: "Laboratory Testing Guidance & Verification",
        description:
            "We provide expert guidance on mandatory laboratory testing requirements for specific product categories. Our team reviews your existing lab reports to ensure they meet UAE authority standards and advises on exactly which documents are needed for a successful submission.",
        icon: "/laboratory-testing-guidance.svg",
    },
    {
        title: "Authority Coordination",
        description:
            "We coordinate directly with relevant authorities to manage approvals, respond to queries, and ensure faster processing.",
        icon: "/authority-coordination.svg",
    },
    {
        title: "End-to-End Registration Support",
        description:
            "From initial consultation to final approval, we handle the entire process — including Compliance Certification, Product Classification, and Regulatory Filing — so you don’t have to deal with complex procedures.",
        icon: "/end-to-end-registration.svg",
    },
];

const ProductRegistrationServices = ({ sectionKey = [] }) => {
    const tc =
        titleContentConfig[sectionKey] || titleContentConfig["productregistrationservie"];
    return (
        <section className="py-8 md:py-16 bg-[#978050] relative overflow-hidden">
            <div className="grid text-center relative z-10">
                <TitleContent {...tc} />
            </div>
            <RegistrationServiceCards features={features} />
            <div className="flex justify-center mt-5 md:mt-15">
                <Button
                    href="/company/contact-us"
                    className="px-6 sm:px-12 py-3.5"
                    variant="black"
                >
                    Start Your Product Registration Process
                </Button>
            </div>
        </section>
    );
};

export default ProductRegistrationServices;
