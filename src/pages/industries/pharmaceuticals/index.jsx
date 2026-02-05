import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import {FileText, Warehouse, Hash, Boxes, Globe, PoundSterling, Calculator, Clock, Truck, CheckCircle, Link as LinkIcon,} from "lucide-react";
import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";
import ServiceHero from "@/components/ui/New/ServiceHero";
import NewInnerBanner from "@/components/ui/New/NewInnerBanner";

export default function Road ({ preview }) {

  const PageMeta = {
    title: "Pharmaceuticals Customs Clearance Services UK | Global Customs",
    description:"Specialist pharmaceutical customs clearance services for medicines, medical products, and clinical supplies. MHRA and HMRC compliant.",
    keywords:"pharmaceutical customs clearance UK, medicine imports UK, MHRA customs clearance, medical goods HMRC, pharma logistics UK",
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "Pharmaceutical Import Declarations", desc: "Accurate CDS import declarations for medicines and medical products.", icon: <FileText /> },
    { title: "Medicinal HS Code Classification", desc: "Correct commodity codes for pharmaceuticals and healthcare goods.", icon: <Hash /> },
    { title: "Bulk & Multi-Line Shipments", desc: "Support for complex consignments with multiple product lines.", icon: <Boxes /> },
    { title: "Duty & Import VAT Calculations", desc: "Correct duty and VAT treatment for pharmaceutical goods.", icon: <Calculator /> },
    { title: "MHRA & Regulatory Compliance", desc: "Support with licences, authorisations, and regulatory references.", icon: <Globe /> },
    { title: "Controlled & Temperature-Sensitive Goods", desc: "Clearance aligned with storage and handling requirements.", icon: <Warehouse /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority processing for time-critical medical shipments.", icon: <Clock /> },
    { title: "Support for Pharma Logistics Partners", desc: "White-label customs services for healthcare logistics providers.", icon: <Truck /> },
  ];

  const requirements = [
    { title: "Commercial Invoice", details: ["Product descriptions", "HS codes (if known)", "Value", "Currency", "Incoterms"] },
    { title: "Packing List", details: ["Weights, quantities, batch numbers, and packaging details."] },
    { title: "Transport Document", details: ["Bill of lading", "Airway bill", "CMR"] },
    { title: "EORI Number", details: ["Required for all UK pharmaceutical importers and exporters."] },   
    { title: "MHRA & Regulatory Documents", details: ["Marketing authorisation, import licence, or exemption details."] },
    { title: "Product Information", details: ["Drug name, dosage, form, and temperature requirements."] }
  ];

  const features = [
    { title: "Pharmaceutical Industry Expertise", desc: "Deep understanding of pharma and healthcare regulations." },
    { title: "Fast Turnaround", desc: "We prioritise time-critical medical shipments." },
    { title: "Compliance-First Approach", desc: "Aligned with HMRC, MHRA, and border control rules." },
    { title: "Transparent Pricing", desc: "Clear and predictable costs." },
    { title: "Nationwide Coverage", desc: "Clearance across all UK ports, airports, and border facilities." },
    { title: "24/7 Support", desc: "Support for urgent and life-critical shipments." },
  ]; 

  const problems = [
    { title: "Regulatory & Licence Errors", desc: "We ensure correct MHRA references and approvals." },
    { title: "Temperature-Sensitive Delays", desc: "We prioritise clearance to protect product integrity." },
    { title: "Incorrect HS Codes", desc: "We prevent misclassification and duty errors." },
    { title: "Supplier Documentation Issues", desc: "We correct missing or inaccurate paperwork." },
    { title: "Complex Multi-Product Shipments", desc: "We manage detailed, multi-line declarations." },
    { title: "Post-Clearance Amendments", desc: "We handle corrections and HMRC queries." },
  ]; 

  const pharmaFaq = [
    {
      question: "Do you clear prescription and non-prescription medicines?",
      answer: "Yes — we handle a wide range of pharmaceutical and healthcare products.",
    },
    {
      question: "Do you support MHRA requirements?",
      answer: "Yes — we ensure all required MHRA licences and references are included.",
    },
    {
      question: "Can you handle temperature-controlled shipments?",
      answer: "Absolutely — we prioritise time-sensitive and cold-chain goods.",
    },
    {
      question: "Do you support pharmaceutical exports?",
      answer: "Yes — we manage both pharma imports and exports.",
    },
    {
      question: "Can you provide urgent clearance?",
      answer: "Yes — same-day clearance is available for critical shipments.",
    },
  ];   
  
  return(
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
          
        <NewInnerBanner
          title="Customs Clearance for Pharmaceuticals"
          backgroundImage="/images/road-bg.jpg"
          bannerDescription={[
            "Specialist Customs Clearance for Pharmaceutical Imports", 
            "Pharmaceutical shipments are subject to strict regulatory, safety, and handling requirements. Accurate customs clearance is essential to avoid delays, compliance breaches, or risks to patient safety."        
          ]}
        />

        <ServiceHero
          title="Pharmaceuticals Customs Clearance Services"
          description={[
            "Global Customs provides specialist pharmaceutical customs clearance services for manufacturers, distributors, healthcare providers, and logistics companies. We understand the critical nature of medical goods and regulatory compliance.",
            "This page explains how our pharmaceutical customs clearance service works, what documents are required, and why pharmaceutical businesses across the UK trust Global Customs for fast, compliant clearance.",         
          ]}
          image1="/images/road-big.jpg"
          image2="/images/road-small.jpg"
          image3="/images/road-smaal2.jpg"
        />

        <section className="py-20 bg-slate-50">     
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

            <h2 className="text-3xl font-bold text-slate-900 mb-4 ">
              Why <span className="text-[#3daee0]">Pharmaceutical Imports</span> Are Different        
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Pharmaceutical shipments often involve:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Strict MHRA and regulatory controls",
                "Temperature-controlled and cold-chain goods",
                "High-value and sensitive products",
                "Batch numbers and traceability requirements",
                "Short delivery and shelf-life windows",
                "Border inspections and compliance checks",
                "Zero-tolerance for documentation errors",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg border border-gray-200 hover:border-[#3daee0] transition-colors duration-300"
                >
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#3daee0] text-white text-sm font-semibold">
                    ✓
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-[#3daee0]/5 border-l-4 border-[#3daee0]">
              <p className="text-gray-700">
                Errors in pharmaceutical clearance can lead to serious compliance and safety risks.
              </p>
            </div>

          </div>
        </section>  

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Pharmaceutical Customs Clearance Services
              </h2>
              <p className="text-slate-600">
                End-to-end customs support for pharmaceutical businesses:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all">
                  <div className="text-[#3daee0] mb-4">
                    {React.cloneElement(service.icon, { size: 32 })}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                  <Image 
                    src="/images/road-custom.png" 
                    width={800}
                    height={800}
                    alt="Pharmaceutical customs clearance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Who We Work With
                </h2>
                <p className="text-slate-600 mb-6">
                  Our pharmaceutical services support:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Pharmaceutical manufacturers",
                    "Healthcare distributors",
                    "Clinical trial organisations",
                    "Hospitals and healthcare providers",
                    "Medical device suppliers",
                    "Cold-chain logistics providers",
                    "Freight forwarders",
                    "3PL warehouses",
                    "Wholesalers",
                    "Life sciences companies",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  From clinical trials to commercial distribution, we support critical healthcare supply chains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                What You Need for Pharmaceutical Customs Clearance
              </h2>
              <p className="text-slate-600 mt-4">
                To clear pharmaceutical shipments efficiently, we typically require:
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
              <div className="space-y-8">
                {requirements.map((req, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                    <div className="md:w-1/3">
                      <h4 className="font-bold text-lg text-slate-900">
                        {req.title}
                      </h4>
                    </div>
                    <div className="md:w-2/3">
                      <ul className="list-disc pl-5 space-y-1 text-slate-600">
                        {req.details.map((detail, j) => (
                          <li key={j}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <p className="font-bold text-[#0ea5e9]">
                  We guide you through every regulatory requirement to ensure compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How Global Customs Supports Pharmaceutical Businesses
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div key={i} className="bg-white shadow-md p-6 rounded-lg border border-slate-100">
                  <CheckCircle className="text-[#0ea5e9] mb-4 h-8 w-8" />
                  <h4 className="font-bold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Common Pharmaceutical Customs Problems We Solve
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((prob, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="font-bold text-[#0ea5e9] text-lg mb-2">
                    {prob.title}
                  </h4>
                  <p className="text-blue-50">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-left lg:text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Industries We Support
              </h2>
              <p className="text-slate-600 mb-10">
                Our pharmaceutical customs services support:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "Pharmaceutical manufacturing",
                "Healthcare distribution",
                "Clinical trials",
                "Medical devices",
                "Life sciences",
                "Cold-chain logistics",
                "Hospitals & healthcare",
                "Biotech companies",
              ].map((ind, i) => (
                <div
                  key={i}
                  className="border-b border-r border-[#3daee0] px-6 py-6 text-slate-900 font-medium"
                >
                  {ind}
                </div>
              ))}
            </div>

            <p className="text-slate-900 text-center font-medium">
              When compliance and speed matter most, we deliver reliable pharmaceutical clearance.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Answers to common pharmaceutical customs clearance questions."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={pharmaFaq}
        />

        <SiteCta
          title="Need reliable pharmaceutical customs clearance?"
          description="Contact Global Customs today for expert pharmaceutical customs clearance and 24/7 support."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  );
}
