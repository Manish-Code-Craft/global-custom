import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import {FileText, Warehouse, Hash, Boxes, Globe, PoundSterling, Calculator, Clock, Truck, CheckCircle,
  Shirt,
  Sofa,
  Smartphone,
  Sparkles,
  Footprints,
  Gamepad2,
  Gem,
  Store,
  Link as LinkIcon,} from "lucide-react";
import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";
import ServiceHero from "@/components/ui/New/ServiceHero";
import NewInnerBanner from "@/components/ui/New/NewInnerBanner";
import SupportedIndustries from "@/components/ui/New/SupportedIndustries";

export default function Road ({ preview }) {

  const PageMeta = {
    title: "Retail Customs Clearance Services UK | Global Customs",
    description:"Specialist retail customs clearance services for UK importers and retailers. Fast, compliant clearance for stock-ready supply chains.",
    keywords:"retail customs clearance UK, retail imports UK, customs clearance for retailers, HMRC retail clearance",
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "Retail Import Declarations", desc: "Accurate CDS declarations for retail goods entering the UK.", icon: <FileText /> },
    { title: "HS Code Classification", desc: "Correct commodity codes for retail products and ranges.", icon: <Hash /> },
    { title: "Multi-SKU & Seasonal Stock", desc: "Support for complex retail shipments and collections.", icon: <Boxes /> },
    { title: "Duty & Import VAT Calculations", desc: "Clear duty and VAT calculations to protect margins.", icon: <Calculator /> },
    { title: "Trade Agreement & Origin Support", desc: "Ensure correct origin treatment and duty reliefs.", icon: <Globe /> },
    { title: "Warehouse & Distribution Clearance", desc: "Clearance aligned with DCs, stores, and fulfilment centres.", icon: <Warehouse /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority clearance for time-sensitive retail launches.", icon: <Clock /> },
    { title: "Support for Retail Logistics Partners", desc: "White-label customs services for retail supply chains.", icon: <Truck /> },
  ];

  const requirements = [
    { title: "Commercial Invoice", details: ["Product descriptions", "HS codes (if known)", "Value", "Currency", "Incoterms"] },
    { title: "Packing List", details: ["Weights, quantities, carton counts, and packaging details."] },
    { title: "Transport Document", details: ["Bill of lading", "Airway bill", "CMR"] },
    { title: "EORI Number", details: ["Required for all UK retail importers."] },   
    { title: "VAT Number (if applicable)", details: ["For import VAT and postponed VAT accounting."] },
    { title: "SKU or Product Lists", details: ["For multi-line and seasonal stock shipments."] }
  ];

  const features = [
    { title: "Retail Sector Expertise", desc: "Deep understanding of retail supply chains and stock cycles." },
    { title: "Fast Turnaround", desc: "We minimise delays that impact store and online availability." },
    { title: "Compliance-First Approach", desc: "Declarations aligned with HMRC and CDS rules." },
    { title: "Transparent Pricing", desc: "Clear costs to support margin planning." },
    { title: "Nationwide Coverage", desc: "Clearance across all UK ports, airports, and hubs." },
    { title: "24/7 Support", desc: "Support for urgent launches and peak seasons." },
  ]; 

  const problems = [
    { title: "Seasonal Stock Delays", desc: "We prioritise clearance to meet launch deadlines." },
    { title: "Incorrect HS Codes", desc: "We prevent misclassification and excess duty." },
    { title: "Supplier Documentation Errors", desc: "We correct invoice and packing list issues." },
    { title: "Margin Erosion", desc: "We ensure accurate duty and VAT treatment." },
    { title: "High-SKU Shipments", desc: "We manage large, complex retail declarations." },
    { title: "Post-Clearance Amendments", desc: "We handle corrections and HMRC queries." },
  ]; 

  const industries = [
    { name: "Fashion & apparel", icon: <Shirt size={24} /> },
    { name: "Homeware & furniture", icon: <Sofa size={24} /> },
    { name: "Electronics retail", icon: <Smartphone size={24} /> },
    { name: "Beauty & cosmetics", icon: <Sparkles size={24} /> },
    { name: "Footwear", icon: <Footprints size={24} /> },
    { name: "Toys & games", icon: <Gamepad2 size={24} /> },
    { name: "Luxury goods", icon: <Gem size={24} /> },
    { name: "Department stores", icon: <Store size={24} /> },
  ];

  const retailFaq = [
    {
      question: "Do you support large retail shipments?",
      answer: "Yes — we handle high-volume and multi-SKU retail consignments.",
    },
    {
      question: "Can you support seasonal and promotional launches?",
      answer: "Absolutely — we prioritise time-critical retail stock.",
    },
    {
      question: "Do you work with online and physical retailers?",
      answer: "Yes — we support both e-commerce and brick-and-mortar retailers.",
    },
    {
      question: "Can you help with HS code classification?",
      answer: "Yes — we classify full product ranges accurately.",
    },
    {
      question: "Do you support retail exports?",
      answer: "Yes — we manage both retail imports and exports.",
    },
  ];   
  
  return(
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
          
        <NewInnerBanner
          title="Customs Clearance for Retail"
          backgroundImage="/images/road-bg.jpg"
          bannerDescription={[
            "Specialist Customs Clearance for Retail Supply Chains", 
            "Retail depends on speed, availability, and cost control. From seasonal collections to everyday stock, accurate customs clearance is essential to keep shelves filled and customers satisfied."        
          ]}
        />

        <ServiceHero
          title="Retail Customs Clearance Services"
          description={[
            "Global Customs provides specialist retail customs clearance services for high-street retailers, online sellers, and multi-channel brands. We understand the importance of stock availability, seasonal demand, and margin control.",
            "This page explains how our retail customs clearance service works, what documents are required, and why UK retailers trust Global Customs for fast, compliant clearance.",         
          ]}
          image1="/images/road-big.jpg"
          image2="/images/road-small.jpg"
          image3="/images/road-smaal2.jpg"
        />

        <section className="py-20 bg-slate-50">     
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

            <h2 className="text-3xl font-bold text-slate-900 mb-4 ">
              Why <span className="text-[#3daee0]">Retail Imports</span> Are Different        
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Retail shipments often involve:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Seasonal and trend-driven stock",
                "High SKU volumes",
                "Tight launch and promotion deadlines",
                "Multiple suppliers and origins",
                "Margin-sensitive duty costs",
                "Fast-moving inventory",
                "Distribution centre delivery schedules",
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
                Delays in retail clearance can mean missed sales opportunities.
              </p>
            </div>

          </div>
        </section>  

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Retail Customs Clearance Services
              </h2>
              <p className="text-slate-600">
                End-to-end customs support for retailers:
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
                    alt="Retail customs clearance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Who We Work With
                </h2>
                <p className="text-slate-600 mb-6">
                  Our retail services support:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "High-street retailers",
                    "Online retailers",
                    "Multi-channel brands",
                    "Department stores",
                    "Fashion retailers",
                    "Homeware retailers",
                    "Private-label brands",
                    "Distribution centres",
                    "Import managers",
                    "Retail buying teams",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  From seasonal launches to everyday stock, we support retail success.
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
                What You Need for Retail Customs Clearance
              </h2>
              <p className="text-slate-600 mt-4">
                To clear retail shipments efficiently, we typically require:
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
                  We guide you through every step to keep stock moving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How Global Customs Supports Retailers
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
              Common Retail Customs Problems We Solve
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
        {/* <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-left lg:text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Industries We Support
              </h2>
              <p className="text-slate-600 mb-10">
                Our retail customs services support:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "Fashion & apparel",
                "Homeware & furniture",
                "Electronics retail",
                "Beauty & cosmetics",
                "Footwear",
                "Toys & games",
                "Luxury goods",
                "Department stores",
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
              When retail timing and margins matter, we deliver reliable clearance.
            </p>
          </div>
        </section> */}

        <SupportedIndustries 
          title="Industries We Support"
          subtitle="Our retail customs services support:"
          industries={industries}
          bottomText="When retail timing and margins matter, we deliver reliable clearance."
          bg="bg-white"
        />

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Answers to common retail customs clearance questions."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={retailFaq}
        />

        <SiteCta
          title="Need reliable retail customs clearance?"
          description="Contact Global Customs today for expert retail customs support and fast, compliant clearance."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  );
}
