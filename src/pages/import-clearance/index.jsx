import Container from "@/components/ui/Container";
import Head from "next/head";
import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Layout from "@/components/ui/Layout";
import Heroroad from "@/components/ui/Heroroad";
import Servicefaq from "@/components/ui/Servicefaq/Servicefaq";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import { Ship, Plane, Warehouse, MapPin, AlertCircle, CheckCircle2   } from 'lucide-react';
import { 
  CheckCircle,   
  FileText, 
  Globe, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Search,  
  Anchor,
  Briefcase, 
  Link as LinkIcon, 
} from 'lucide-react';
import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";
import Btn from "@/components/ui/Btns/Btn";
import ServiceHero from "@/components/ui/New/ServiceHero";
import NewInnerBanner from "@/components/ui/New/NewInnerBanner";

export default function Road ({ preview }) {

  const PageMeta = {
   title: "Import Clearance  | Custom Clearance Services UK",
   description:"Global Customs provides fast, reliable import clearance services across all major UK ports and airports. Ensure your goods move smoothly with our expert customs support.",
   keywords:"Import Clearance UK, Customs Declaration Service, CDS Import Services, UK Customs Clearance, Fast Import Declarations, HS Code Classification, Customs Procedure Codes, Duty and VAT Calculation, T1 Transit Documents, Temporary Admission Support, Urgent Import Clearance, Freight Forwarder Customs Services",
 };


 const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { title: "Import Declarations (CDS)", desc: "Fast, accurate import declarations for goods entering the UK.", icon: <Anchor /> },
    { title: "HS Code Classification", desc: "Correct commodity codes to avoid overpaying duty.", icon: <Briefcase /> },
    { title: "Customs Procedure Codes (CPCs)", desc: "Correct CPC selection to avoid delays.", icon: <Search /> },
    { title: "Document Code Validation", desc: "Ensuring all required certificates and licences are included.", icon: <CheckCircle /> },
    { title: "Duty & VAT Calculation", desc: "Including postponed VAT accounting (PVA).", icon: <ShieldCheck /> },
    { title: "T1 Transit Documents", desc: "Creation and discharge of transit movements.", icon: <Truck /> },
    { title: "Temporary Admission & ATA Carnets", desc: "Support for goods entering the UK temporarily.", icon: <Globe /> },
    { title: "Urgent & Same-Day Declarations", desc: "Priority processing for time-critical shipments.", icon: <Clock /> },
    { title: "Support for Freight Forwarders & Hauliers", desc: "White-label customs services for logistics providers.", icon: <FileText /> },
  ];

  const risks = [
    "Delays at ports",
    "Rejected entries",
    "Incorrect duty charges",
    "VAT accounting issues",
    "Compliance penalties",
    "Supply chain disruption"
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
    { title: "EORI Number", details: ["Required for all UK importers and exporters."] },
    { title: "VAT Number (if applicable)", details: ["For postponed VAT accounting."] },
    { title: "Licences or Certificates", details: ["If required for restricted goods."] },
    { title: "Country of Origin", details: ["Determines duty rates and trade agreement eligibility."] }
  ];

  const problems = [
    { title: "Incorrect HS Codes", desc: "We classify goods accurately to avoid overpayment." },
    { title: "Wrong CPC Codes", desc: "Incorrect procedure codes can cause delays or rejected declarations." },
    { title: "Missing Document Codes", desc: "CDS requires specific document references for many goods." },
    { title: "Incorrect Valuation", desc: "Errors in customs value can trigger audits or penalties." },
    { title: "Duty Relief Misuse", desc: "We ensure reliefs are applied correctly and legally." },
    { title: "Post-Clearance Errors", desc: "We handle amendments and corrections on your behalf." }
  ];

  const features = [
    { title: "Nationwide Expertise", desc: "We understand the requirements of every major UK port and airport." },
    { title: "Fast Turnaround", desc: "We process declarations quickly to keep your goods moving." },
    { title: "Compliance-First Approach", desc: "We ensure every declaration meets HMRC requirements." },
    { title: "Transparent Pricing", desc: "Clear, competitive rates with no hidden fees." },   
    { title: "24/7 Support", desc: "Urgent shipments? No problem — we’re always available." }
  ];

  const importFaq = [
    {
      question: "How long does import clearance take in the UK?",
      answer:
        "Most import declarations are processed quickly. However, the exact timeframe depends on documentation accuracy, port traffic, and any HMRC checks.",
    },
    {
      question: "Do you support CDS import declarations?",
      answer:
        "Yes — all import declarations are fully processed through the Customs Declaration Service (CDS).",
    },
    {
      question: "Can you handle urgent or same-day shipments?",
      answer:
        "Absolutely. We offer priority processing for urgent and time-critical shipments.",
    },
    {
      question: "Do you work with freight forwarders?",
      answer:
        "Yes — we provide white-label customs clearance services for freight forwarders and logistics companies.",
    },
    {
      question: "What if I don’t know my HS codes?",
      answer:
        "No worries. Our customs experts can accurately classify your goods and apply the correct HS codes.",
    },
  ];
  
    return(
      <>
      <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
          
      <NewInnerBanner
        title="Import Clearance UK"
        backgroundImage="/images/road-bg.jpg"
        bannerDescription={[
          "Fast, Compliant Customs Support for All UK Ports and Airports", 
          "Importing goods into the UK requires precision, compliance, and a deep understanding of customs regulations. Every shipment must be declared correctly through the Customs Declaration Service (CDS), with accurate HS codes, correct valuation, and the right customs procedure codes (CPCs). Any errors can lead to delays, rejected declarations, additional charges, or goods being held at the border."        
        ]}
      />

      <ServiceHero
        title="Import Clearance UK"
        description={[
          "Global Customs provides fast, reliable import clearance services across the UK, supporting importers, freight forwarders, hauliers, manufacturers, retailers, and e-commerce businesses. We work with all major UK ports, airports, and inland border facilities to ensure your goods move smoothly and without delay",
          "This page explains how our import clearance service works, what documents you need, and why businesses nationwide trust Global Customs for accurate, eicient, and compliant declarations.",         
        ]}
        image1="/images/road-big.jpg"
        image2="/images/road-small.jpg"
        image3="/images/road-smaal2.jpg"
      />
      
      <section className="py-24 bg-slate-50 font-sans">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Side: The "Why" & The "Risks" */}
            <div className="lg:w-3/5">
              <h3 className="text-[#3daee0] text-sm font-bold uppercase  mb-6">
                Why Import Clearance Matters
              </h3>
              <h2 className="text-3xl font-bold text-slate-900 mb-10">
                Every shipment entering the UK must be declared to HMRC.
              </h2>
              
              <p className="text-xl text-slate-500 mb-8 font-medium">
                Incorrect or incomplete declarations can cause:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {risks.map((risk, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 shadow-md bg-white rounded-xl border border-slate-100">
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
                    We ensure your declarations are correct the first time.
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
      <section className="py-20 ">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Import Clearance Services</h2>
            <p className="mt-4 text-slate-600">We provide a complete range of import services across the UK:</p>
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ports & Airports We Cover <span className="text-[#3daee0]">Across the UK</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Wherever your goods enter the UK, we can handle the customs process with full coverage at all major entry points.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#3daee0] hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    {loc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{loc.title}</h3>
                </div>
                <ul className="space-y-3">
                  {loc.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-[#3daee0] opacity-70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Footer Note */}
          <div className="mt-12 text-center p-6 bg-[#3daee0] rounded-lg">
            <p className="text-white font-medium text-lg">
              Ready to clear your cargo? Our team is available at every major UK gateway.
            </p>
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
              <p className="text-slate-600 mb-6">Our CDS services support:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Importers', 'Exporters', 'Freight forwarders', 'Hauliers', 
                  'Retailers', 'Manufacturers', 'E-commerce sellers', 
                  'Amazon FBA merchants', 'Automotive suppliers', 'Food & drink distributors'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                Whether you move one shipment a month or hundreds per week, we tailor our service to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What You Need for Import Clearance</h2>
            <p className="text-slate-600 mt-4">To process your import declaration quickly, we typically require:</p>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How Global Customs Ensures Fast, Compliant Import Clearance</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Common Import Problems We Solve</h2>
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
              We work with businesses across:
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
            Whether you import small parcels or full containers, we can support your needs.
          </p>

        </div>
      </section>



       <Testimonials/>
       <SiteFAQs
         sectionTitle="FAQs"
         sectionDescription="Get clear answers for faster, hassle-free UK import clearance."
         buttonText="get a quote"
         buttonLink="/contact"
         faqs={importFaq}
       />
       <SiteCta
          title="Need fast, reliable import clearance anywhere in the UK?"
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