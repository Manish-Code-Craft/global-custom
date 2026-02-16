import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import {FileText, Warehouse, Hash, Boxes, Globe, PoundSterling, Calculator, Clock, Truck, CheckCircle,
  Utensils,
  Apple,
  Fish,
  Milk,
  Wine,
  Store,
  ShoppingCart, Link as LinkIcon,} from "lucide-react";
import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";
import ServiceHero from "@/components/ui/New/ServiceHero";
import NewInnerBanner from "@/components/ui/New/NewInnerBanner";
import SupportedIndustries from "@/components/ui/New/SupportedIndustries";

export default function Road ({ preview }) {

  const PageMeta = {
    title: "Food & Drink Customs Clearance Services UK | Global Customs",
    description:"Specialist food and drink customs clearance services for UK imports and exports. SPS, DEFRA, and HMRC compliant clearance.",
    keywords:"food customs clearance UK, drink imports UK, SPS customs clearance, DEFRA clearance, food import HMRC",
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "Food & Drink Import Declarations", desc: "Accurate CDS import declarations for food and beverage goods.", icon: <FileText /> },
    { title: "HS Code Classification", desc: "Correct classification for food products and beverages.", icon: <Hash /> },
    { title: "Multi-SKU & Mixed Loads", desc: "Support for complex food consignments with multiple product lines.", icon: <Boxes /> },
    { title: "Duty & Import VAT Calculations", desc: "Correct duty and VAT treatment for food and drink goods.", icon: <Calculator /> },
    { title: "SPS & DEFRA Compliance", desc: "Support with sanitary and phytosanitary requirements.", icon: <Globe /> },
    { title: "Warehouse & Cold Storage Clearance", desc: "Customs clearance aligned with storage and temperature controls.", icon: <Warehouse /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority clearance for perishable or time-sensitive goods.", icon: <Clock /> },
    { title: "Support for Freight & Logistics Partners", desc: "White-label customs services for food logistics providers.", icon: <Truck /> },
  ];

  const requirements = [
    { title: "Commercial Invoice", details: ["Product descriptions", "HS codes (if known)", "Value", "Currency", "Incoterms"] },
    { title: "Packing List", details: ["Weights, quantities, and packaging details."] },
    { title: "Transport Document", details: ["Bill of lading", "Airway bill", "CMR"] },
    { title: "EORI Number", details: ["Required for all UK food importers and exporters."] },   
    { title: "Health & SPS Documents", details: ["Health certificates, catch certificates, or phytosanitary docs."] },
    { title: "Product Specifications", details: ["Ingredients, shelf life, and temperature requirements."] }
  ];

  const features = [
    { title: "Food & Drink Expertise", desc: "Deep understanding of food import and export regulations." },
    { title: "Fast Turnaround", desc: "We prioritise perishable and time-sensitive shipments." },
    { title: "Compliance-First Approach", desc: "Aligned with HMRC, DEFRA, and SPS requirements." },
    { title: "Transparent Pricing", desc: "Clear costs with no hidden fees." },
    { title: "Nationwide Coverage", desc: "Clearance across all UK ports, airports, and border facilities." },
    { title: "24/7 Support", desc: "Support for urgent and temperature-critical goods." },
  ]; 

  const problems = [
    { title: "SPS & Health Document Issues", desc: "We ensure correct certification and references." },
    { title: "Perishable Goods Delays", desc: "We prioritise clearance to avoid spoilage." },
    { title: "Incorrect HS Codes", desc: "We prevent misclassification and duty errors." },
    { title: "Supplier Documentation Errors", desc: "We correct invoices and missing information." },
    { title: "Mixed Food Consignments", desc: "We manage complex, multi-product shipments." },
    { title: "Post-Clearance Amendments", desc: "We handle corrections and HMRC follow-ups." },
  ]; 

  const industries = [
    { name: "Food manufacturing", icon: <Utensils size={24} /> },
    { name: "Drink distribution", icon: <Truck size={24} /> },
    { name: "Fresh produce", icon: <Apple size={24} /> },
    { name: "Meat & seafood", icon: <Fish size={24} /> },
    { name: "Dairy products", icon: <Milk size={24} /> },
    { name: "Alcohol & beverages", icon: <Wine size={24} /> },
    { name: "Retail & hospitality", icon: <Store size={24} /> },
    { name: "E-commerce food sales", icon: <ShoppingCart size={24} /> },
  ];

  const foodFaq = [
    {
      question: "Do you clear perishable food imports?",
      answer: "Yes — we prioritise clearance for chilled, frozen, and fresh goods.",
    },
    {
      question: "Do you support SPS and DEFRA requirements?",
      answer: "Yes — we ensure full compliance with food safety regulations.",
    },
    {
      question: "Can you handle mixed food consignments?",
      answer: "Absolutely — we specialise in multi-SKU and mixed loads.",
    },
    {
      question: "Do you support food exports?",
      answer: "Yes — we handle both food imports and exports.",
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
          title="Customs Clearance for Food & Drink"
          backgroundImage="/images/road-bg.jpg"
          bannerDescription={[
            "Specialist Customs Clearance for Food & Beverage Imports", 
            "Food and drink shipments are subject to strict safety, health, and compliance rules. From fresh produce to packaged goods and beverages, accurate customs clearance is essential to avoid delays, spoilage, and penalties."        
          ]}
        />

        <ServiceHero
          title="Food & Drink Customs Clearance Services"
          description={[
            "Global Customs provides specialist food and drink customs clearance services for importers, exporters, manufacturers, distributors, and logistics providers. We understand the critical nature of perishable goods and regulatory compliance.",
            "This page explains how our food and drink customs clearance service works, what documents are required, and why food businesses across the UK trust Global Customs for fast, compliant clearance.",         
          ]}
          image1="/images/road-big.jpg"
          image2="/images/road-small.jpg"
          image3="/images/road-smaal2.jpg"
        />

        <section className="py-20 bg-slate-50">     
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

            <h2 className="text-3xl font-bold text-slate-900 mb-4 ">
              Why <span className="text-[#3daee0]">Food & Drink Imports</span> Are Different        
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Food and drink shipments often involve:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Perishable and temperature-controlled goods",
                "Strict SPS and health requirements",
                "Short shelf life products",
                "Mixed consignments and multiple SKUs",
                "DEFRA and border checks",
                "Time-critical delivery schedules",
                "High compliance and inspection risk",
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
                Delays in food clearance can result in spoilage, rejection, or financial loss.
              </p>
            </div>

          </div>
        </section>  

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Food & Drink Customs Clearance Services
              </h2>
              <p className="text-slate-600">
                End-to-end customs support for food and beverage businesses:
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
                    alt="Food and drink customs clearance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Who We Work With
                </h2>
                <p className="text-slate-600 mb-6">
                  Our food and drink services support:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Food importers",
                    "Drink distributors",
                    "Food manufacturers",
                    "Wholesalers",
                    "Retail chains",
                    "Cold storage operators",
                    "Freight forwarders",
                    "3PL providers",
                    "Hospitality suppliers",
                    "E-commerce food sellers",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  From fresh produce to packaged goods, we support your entire supply chain.
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
                What You Need for Food & Drink Customs Clearance
              </h2>
              <p className="text-slate-600 mt-4">
                To clear food and drink shipments efficiently, we typically require:
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
                  We guide you through every requirement to prevent delays or rejection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How Global Customs Supports Food & Drink Businesses
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
              Common Food & Drink Customs Problems We Solve
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
                Our food and drink customs services support:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "Food manufacturing",
                "Drink distribution",
                "Fresh produce",
                "Meat & seafood",
                "Dairy products",
                "Alcohol & beverages",
                "Retail & hospitality",
                "E-commerce food sales",
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
              From chilled imports to shelf-stable goods, we keep your products moving.
            </p>
          </div>
        </section> */}

        <SupportedIndustries 
          title="Industries We Support"
          subtitle="Our food and drink customs services support:"
          industries={industries}
          bottomText="From chilled imports to shelf-stable goods, we keep your products moving."
          bg="bg-white"
        />

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Answers to common food and drink customs clearance questions."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={foodFaq}
        />

        <SiteCta
          title="Need reliable food & drink customs clearance?"
          description="Contact Global Customs today for expert food and beverage customs clearance and 24/7 support."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  );
}
