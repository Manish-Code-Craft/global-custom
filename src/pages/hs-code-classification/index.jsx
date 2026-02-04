import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import { Ship, Plane,AlertCircle,} from 'lucide-react';
import {
  Boxes,
  PackageSearch,
  RefreshCcw,
  FileCheck,
  Calculator,
  BadgeCheck,
  LifeBuoy,
  CheckCircle2,
  Warehouse,
  CheckCircle, 
  Link as LinkIcon, 
} from "lucide-react";

import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";
import Btn from "@/components/ui/Btns/Btn";
import ServiceHero from "@/components/ui/New/ServiceHero";
import NewInnerBanner from "@/components/ui/New/NewInnerBanner";

export default function Road ({ preview }) {

  const PageMeta = {
   title: "HS Code Classification | Custom Clearance Services UK",
   description:"Expert HS Code Classification for Accurate Customs Clearance in the UK. Ensure compliance and avoid delays with our professional services.",
   keywords:"HS Code Classification, Customs Clearance UK, Import Export Compliance, Tariff Codes, Global Customs Services",
 };


 const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { title: "Full HS Code Classification", desc: "Accurate classification for any product type.", icon: <Boxes /> },
    { title: "Bulk SKU Classification", desc: "Ideal for e-commerce sellers and retailers with large catalogues.", icon: <PackageSearch /> },
    { title: "Classification Review & Correction", desc: "We check your existing codes for accuracy.", icon: <RefreshCcw /> },
    { title: "Binding Tariff Information (BTI) Guidance", desc: "Support with obtaining legally binding classification rulings.", icon: <FileCheck /> },
    { title: "Duty & VAT Impact Analysis", desc: "We calculate the correct duty and VAT based on classification.", icon: <Calculator /> },
    { title: "Trade Agreement Eligibility Checks", desc: "We determine whether your goods qualify for reduced or zero duty.", icon: <BadgeCheck /> },
    { title: "Ongoing Classification Support", desc: "For businesses with frequent new product launches.", icon: <LifeBuoy /> },
  ];

  const risks = [
    "Overpayment of duty",
    "Underpayment of duty (leading to penalties)",
    "Rejected customs declarations",
    "Delays at ports and airports",
    "Incorrect VAT treatment",
    "Compliance issues with HMRC",
    "Problems with overseas customs authorities"
  ];

  const locations = [
    {
      title: "Major Ports",
      icon: <Ship className="w-8 h-8 text-[#3daee0]" />,
      items: ["Felixstowe", "Southampton", "London Gateway", "Dover", "Liverpool", "Hull", "Immingham", "Bristol", "Tilbury"]
    },
    {
      title: "Airports",
      icon: <Plane className="w-8 h-8 text-[#3daee0]" />,
      items: ["Heathrow", "Gatwick", "Manchester", "East Midlands", "Birmingham", "Stansted"]
    },
    {
      title: "Inland Border Facilities",
      icon: <Warehouse className="w-8 h-8 text-[#3daee0]" />,
      items: ["Sevington", "Ashford", "Dover Western Docks", "Birmingham", "Warrington"]
    }
  ];
 
  const requirements = [
    { title: "Product Description", details: ["Clear details of what the item is.", ] },
    { title: "Material Composition", details: ["What the product is made from."] },
    { title: "Function & Use", details: ["How the product is used."] },
    { title: "Technical Specifications", details: ["Dimensions, weight, electrical output, etc."] },   
    { title: "Images or Product Links", details: ["Helps confirm physical characteristics."] },
    { title: "Packaging Details", details: ["If relevant to classification."] }
  ];

  const problems = [
    { title: "Incorrect HS Codes", desc: "We correct misclassified goods." },
    { title: "Overpayment of Duty", desc: "We ensure you’re not paying more than necessary." },
    { title: "Underpayment of Duty", desc: "We help avoid compliance penalties." },
    { title: "Incorrect VAT Treatment", desc: "We ensure correct VAT calculation." },
    { title: "Trade Agreement Misuse", desc: "We ensure correct origin and eligibility." },
    { title: "Supplier Misclassification", desc: "We correct inaccurate codes provided by overseas suppliers." },
  ];

  const features = [
    { title: "Expert Knowledge of the UK Tariff", desc: "We stay up to date with all classification changes." },
    { title: "Detailed Product Analysis", desc: "We review materials, function, and technical specifications." },
    { title: "Compliance-First Approach", desc: "We ensure every classification meets HMRC requirements." },
    { title: "Transparent Pricing", desc: "Clear, competitive rates with no hidden fees." },
    { title: "Fast Turnaround", desc: "We classify goods quickly to keep your supply chain moving." },
  ];
  
  

  const classificationFaq = [
    {
      question: "How long does HS code classification take?",
      answer: "Most classifications are completed quickly, depending on product complexity.",
    },
    {
      question: "Can you classify multiple SKUs?",
      answer: "Yes — we specialise in bulk classification.",
    },
    {
      question: "Do you support Amazon FBA sellers?",
      answer: "Absolutely — we classify SKUs for FBA and 3PL shipments.",
    },
    {
      question: "What if my supplier gave me the wrong HS code?",
      answer: "We verify and correct supplier-provided codes.",
    },
    {
      question: "Can you help with BTI applications?",
      answer: "Yes — we provide full guidance.",
    },
  ];
  
  
  
  const points = [
    {
      condition: "Goods enter the UK from the EU but are not staying in the UK",
      example: "France → UK → Ireland"
    },
    {
      condition: "Goods move from the UK into the EU under transit",
      example: "UK → Belgium → Germany"
    },
    {
      condition: "Goods are destined for a bonded warehouse",
      example: "Duties and VAT are suspended until release"
    },
    {
      condition: "Goods pass through multiple borders",
      example: "Transit ensures smooth movement"
    },
    {
      condition: "Goods are non-EU origin entering the EU",
      example: "T1 prevents immediate duty charges"
    }
  ];
  
    return(
      <>
      <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
          
      <NewInnerBanner
        title="HS Code Classification Service"
        backgroundImage="/images/road-bg.jpg"
        bannerDescription={[
          "Accurate Commodity Codes for UK Imports & Exports", 
          "Correct HS code classification is one of the most important — and most misunderstood — parts of customs compliance. The HS code you choose determines the duty rate, VAT treatment, licensing requirements, documentation, and whether your goods qualify for preferential duty under trade agreements. An incorrect HS code can lead to overpayment of duty, rejected declarations, delays at the border, or even compliance penalties."        
        ]}
      />

      <ServiceHero
        title="HS Code Classification Service"
        description={[
          "Global Customs provides a specialist HS code classification service for importers, exporters, freight forwarders, hauliers, manufacturers, retailers, and e-commerce businesses. We classify your goods accurately and ensure full compliance with UK and international customs rules.",
          "This page explains how HS codes work, why correct classification matters, and why businesses across the UK trust Global Customs for expert, reliable classification.",         
        ]}
        image1="/images/road-big.jpg"
        image2="/images/road-small.jpg"
        image3="/images/road-smaal2.jpg"
      />

      <section className="py-20 bg-slate-50">     
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

          {/* Title */}
          <h2 className="text-3xl font-bold text-slate-900 mb-10 ">
            What Is an <span className="text-[#3daee0]">HS Code</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
          An HS code (Harmonised System code) is a globally recognised classification used to identify goods in international trade. It determines:
          </p>

          {/* Use cases */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Duty rates",
              "VAT treatment",
              "Licensing requirements",
              "Documentation needed",
              "Trade agreement eligibility",
              "Customs procedure rules",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg border border-gray-200 hover:border-[#3daee0] transition-colors duration-300"
              >
                <span className="mt-1 flex flex-shrink-0 h-6 w-6 items-center justify-center rounded-full bg-[#3daee0] text-white text-sm font-semibold">
                  ✓
                </span>
                <p className="text-gray-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 p-6 rounded-xl bg-[#3daee0]/5 border-l-4 border-[#3daee0]">
            <p className="text-gray-700">
            The UK uses the 10-digit commodity code, which builds on the global 6-digit HS system.
            </p>
          </div>

        </div>
     
    </section>
      
      <section className="py-24  font-sans">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Side: The "Why" & The "Risks" */}
            <div className="lg:w-3/5">             
              <h2 className="text-3xl font-bold text-slate-900 mb-10">
                Why Correct HS Code Classification Matters
              </h2>
              
              <p className="text-xl text-slate-500 mb-8 font-medium">
                Incorrect HS codes can cause:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {risks.map((risk, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white shadow-md rounded-xl border border-slate-100">
                    <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-slate-700 font-semibold">{risk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: The Resolution Card */}
            <div className="lg:w-2/5 lg:mt-24">
              <div className="relative p-1 bg-gradient-to-b from-[#3daee0] to-blue-600 rounded-[2.5rem] shadow-2xl shadow-blue-200">
                <div className="bg-white rounded-[2.4rem] p-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6">
                    <CheckCircle2 className="text-[#3daee0] w-10 h-10" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                    We ensure your goods are classified correctly the first time.
                  </p>
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <Btn link="/contact" title="Contact Us"/>                  
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50 ">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our HS Code Classification Services</h2>
            <p className="mt-4 text-slate-600">We provide a complete range of classification services:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="text-[#0ea5e9] mb-4">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
     

      {/* Who We Work With - Image 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <Image 
                  src="/images/road-custom.png" 
                  width={800}
                  height={800}
                  alt="Logistics warehouse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Work With</h2>
              <p className="text-slate-600 mb-6">Our classification services support:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                   'Importers','Exporters',  'Freight forwarders', 'Hauliers',
                  'Retailers', 'Manufacturers', 'E-commerce sellers', 
                  'Amazon FBA merchants', 'Automotive suppliers', 'Food & drink distributors'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
              Whether you handle a few SKUs or thousands, we can support your needs.
              </p>
            </div>
          </div>
        </div>
      </section>      

      {/* Requirements Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What We Need to Classify Your Goods</h2>
            <p className="text-slate-600 mt-4">To classify your products accurately, we typically require:</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="space-y-8">
              {requirements.map((req, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                  <div className="md:w-1/3">
                    <h4 className="font-bold text-lg text-slate-900">{req.title}</h4>
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
              <p className="font-bold text-[#0ea5e9]">If you’re unsure about any of this, we guide you step-by-step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Ensure Fast Filing */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How Global Customs Ensures Accurate Classificationt</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <CheckCircle className="text-[#0ea5e9] mb-4 h-8 w-8" />
                <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-[#0ea5e9] text-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Classification Problems We Solve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((prob, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-lg mb-2">{prob.title}</h4>
                <p className="text-blue-50 text-sm">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>     

      {/* Industries Support */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

          <div className=" text-left lg:text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Industries We Support
            </h2>
            <p className="text-slate-600 mb-10">
              We classify goods across:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
            {[
              "E-commerce",
              "Automotive",
              "Food & drink",
              "Pharmaceuticals",
              "Retail",
              "Manufacturing",
              "Logistics & freight forwarding",
              "Amazon FBA sellers",
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
          Whether your goods are simple or highly technical, we can classify them accurately
          </p>

        </div>
      </section>



       <Testimonials/>
       <SiteFAQs
         sectionTitle="FAQs"
         sectionDescription="Common questions about T1 transit processing and support."
         buttonText="get a quote"
         buttonLink="/contact"
         faqs={classificationFaq}
       />
       <SiteCta
          title="Need accurate HS code classification for your products?"
          description="Contact Global Customs today for expert support, compliant classification, and 24/7 assistance."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

    

    </Layout>
    </>
    )
}