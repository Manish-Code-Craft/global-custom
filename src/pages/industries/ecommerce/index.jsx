import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import { Ship, Plane,AlertCircle,} from 'lucide-react';
import {
  FileText,
  CheckCircle2,
  Warehouse,
  Hash,
  Boxes,
  Globe,
  PoundSterling,
  Calculator,
  Clock,
  Truck,
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
   title: "E-Commerce Customs Clearance Services UK | Global Customs",
   description:"Get fast, reliable e-commerce customs clearance services in the UK with Global Customs. Expert support for smooth international shipping.",
   keywords:"e-commerce customs clearance, UK customs services, international shipping, Global Customs, customs brokerage, online retail logistics",
 };


 const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { title: "Import Declarations (CDS)", desc: "Fast, accurate import declarations for goods entering the UK.", icon: <FileText /> },
    { title: "HS Code Classification", desc: "Correct commodity codes for every SKU.", icon: <Hash /> },
    { title: "Bulk SKU Classification", desc: "Ideal for sellers with large product catalogues.", icon: <Boxes /> },
    { title: "Low-Value Consignment Support", desc: "Correct VAT treatment for goods under £135.", icon: <PoundSterling /> },
    { title: "IOSS & OSS Guidance", desc: "Support for EU VAT schemes.", icon: <Globe /> },
    { title: "Amazon FBA & 3PL Clearance", desc: "Specialist support for fulfilment centres.", icon: <Warehouse /> },
    { title: "Duty & VAT Consultancy", desc: "Guidance on duty reliefs, VAT accounting, and cost-saving opportunities.", icon: <Calculator /> },
    { title: "Urgent & Same-Day Clearance", desc: "Priority processing for time-critical shipments.", icon: <Clock /> },
    { title: "Support for Freight Forwarders & 3PLs", desc: "White-label customs services for logistics providers.", icon: <Truck /> },
  ];

  const risks = [
    "Goods being held at the border",
    "Delays at ports and inland border facilities",
    "Fines or penalties",
    "Missed delivery deadlines",
    "Supply chain disruption",
    "Additional customs checks"
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
    { title: "Commercial Invoice", details: ["Seller and buyer details", "Product descriptions", "HS codes (if known)", "Value", "Currency", "Incoterms"] },
    { title: "Packing List", details: ["Details of weights, quantities, and packaging."] },
    { title: "Transport Document", details: ["Bill of lading", "Airway bill", "CMR"] },
    { title: "EORI Number", details: ["Required for all UK importers."] },   
    { title: "VAT Number (if applicable)", details: ["For postponed VAT accounting."] },
    { title: "SKU List", details: ["For multi-product shipments."] }
  ];

  const problems = [
    { title: "Incorrect HS Codes", desc: "We classify goods accurately to avoid overpaying duty." },
    { title: "Low-Value Goods Confusion", desc: "We ensure correct VAT treatment for goods under £135." },
    { title: "Amazon FBA Delivery Deadlines", desc: "We help avoid delays that affect stock availability." },
    { title: "Supplier Invoice Errors", desc: "We correct incomplete or inaccurate invoices." },
    { title: "Multi-SKU Shipments", desc: "We handle complex declarations with many product lines." },
    { title: "Post-Clearance Errors", desc: "We handle amendments and corrections on your behalf." },
  ]; 
  

  const features = [
    { title: "E-commerce Expertise", desc: "We understand the unique needs of online sellers." },
    { title: "Fast Turnaround", desc: "We process declarations quickly to keep your stock moving." },
    { title: "Compliance-First Approach", desc: "We ensure every declaration meets HMRC requirements." },
    { title: "Transparent Pricing", desc: "Clear, competitive rates with no hidden fees." },
    { title: "Nationwide Coverage", desc: "We support all major UK ports and airports." },
    { title: "24/7 Support", desc: "Urgent shipments? No problem — we’re always available." },
  ]; 
  

  const ecommerceFaq = [
    {
      question: "How long does e-commerce customs clearance take?",
      answer: "Most declarations are processed quickly, depending on documentation and port traffic.",
    },
    {
      question: "Do you support Amazon FBA imports?",
      answer: "Yes — we specialise in FBA and 3PL clearance.",
    },
    {
      question: "Can you classify my SKUs?",
      answer: "Absolutely — we offer full and bulk classification.",
    },
    {
      question: "Do you work with freight forwarders and 3PLs?",
      answer: "Yes — we provide white-label customs services.",
    },
    {
      question: "What if I don’t know my HS codes?",
      answer: "We can classify your goods accurately.",
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
        title="Customs Clearance for E-commerce"
        backgroundImage="/images/road-bg.jpg"
        bannerDescription={[
          "Fast UK Import Support for Online Sellers", 
          "The UK e-commerce market is one of the fastest-growing in Europe, with millions of parcels entering the country every week. Whether you sell through Amazon FBA, Shopify, eBay, Etsy, TikTok Shop, or your own website, fast and compliant customs clearance is essential to keeping your stock moving and your customers happy."        
        ]}
      />

      <ServiceHero
        title="Customs Clearance for E-commerce"
        description={[
          "Global Customs provides specialist e-commerce customs clearance services for online sellers, fulfilment centres, freight forwarders, and 3PLs. We understand the unique challenges of e-commerce logistics — from fast-moving inventory to multi-SKU shipments, low-value goods, and complex VAT rules.",
          "This page explains how our e-commerce customs clearance service works, what documents you need, and why online sellers across the UK trust Global Customs for fast, accurate, and compliant declarations.",         
        ]}
        image1="/images/road-big.jpg"
        image2="/images/road-small.jpg"
        image3="/images/road-smaal2.jpg"
      />

      <section className="py-20 bg-slate-50">     
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

          {/* Title */}
          <h2 className="text-3xl font-bold text-slate-900 mb-4 ">
          Why <span className="text-[#3daee0]">E-commerce Imports</span>  Are Dierent        
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
          E-commerce shipments often involve:
          </p>

          {/* Use cases */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Multiple SKUs in a single shipment",
              "Low-value goods",
              "Low-value goods",
              "Fast-moving inventory",
              "International suppliers",
              "Complex VAT rules",
              "Amazon FBA and 3PL delivery deadlines",
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
            These factors make customs clearance more complex than traditional freight.
            </p>
          </div>

        </div>
     
    </section>  

      {/* Services Grid */}
      <section className="py-20  ">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our E-commerce Customs Clearance Services</h2>
            <p className=" text-slate-600">We provide a complete range of customs services for online sellers:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-[#3daee0] mb-4">
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
      <section className="py-20 bg-slate-50">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Who We Work With</h2>
              <p className="text-slate-600 mb-6">Our e-commerce services support:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                   "Amazon FBA sellers","Shopify stores","eBay sellers", "Etsy sellers",
                  "TikTok Shop sellers","Online retailers", "Private-label brands",
                  "Dropshippers", "Freight forwarders","3PL warehouses"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
              Whether you sell 10 SKUs or 10,000, we can support your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Requirements Section */}
      <section className="py-20 ">
        <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What You Need for E-commerce Customs Clearance</h2>
            <p className="text-slate-600 mt-4">To process your declaration quickly, we typically require:</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How Global Customs Ensures Fast, Compliant Clearance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div key={i} className="bg-white shadow-md p-6 rounded-lg border border-slate-100">
                <CheckCircle className="text-[#0ea5e9] mb-4 h-8 w-8" />
                <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Common E-commerce Problems We Solve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((prob, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-[#0ea5e9] text-lg mb-2">{prob.title}</h4>
                <p className="text-blue-50">{prob.desc}</p>
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
            We work with online sellers across:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
            {[
              "Fashion",
              "Electronics",
              "Homeware",
              "Toys & games",
              "Beauty & cosmetics",
              "Supplements",
              "Consumer goods",
              "Private-label brands"
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
          Whether you import small parcels or full containers, we can support your needs.
          </p>

        </div>
      </section>

       <Testimonials/>
       <SiteFAQs
         sectionTitle="FAQs"
         sectionDescription="Answers to common e-commerce customs clearance questions."
         buttonText="get a quote"
         buttonLink="/contact"
         faqs={ecommerceFaq}
       />
       <SiteCta
          title="Need fast, reliable customs clearance for your e-commerce business?"
          description="Contact Global Customs today for expert support, accurate declarations, and 24/7 assistance."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

    </Layout>
    </>
    )
}