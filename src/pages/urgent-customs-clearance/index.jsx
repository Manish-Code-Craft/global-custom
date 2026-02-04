import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import { Ship, Plane,AlertCircle,} from 'lucide-react';
import {
  FileText,
  CheckCircle2,
  Send,
  FileWarning,
  Receipt,
  AlertTriangle,
  Warehouse,
  Calculator,
  Edit3,
  Truck,
  CheckCircle, 
  Headphones,
  Link as LinkIcon, 
} from "lucide-react";

import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";
import Btn from "@/components/ui/Btns/Btn";
import ServiceHero from "@/components/ui/New/ServiceHero";
import NewInnerBanner from "@/components/ui/New/NewInnerBanner";

export default function Road ({ preview }) {

  const PageMeta = {
   title: "Urgent Customs Clearance | Custom Clearance Services UK",
   description:"Get fast, reliable urgent customs clearance services in the UK. Expert support for import/export compliance & smooth border crossings.",
   keywords:"urgent customs clearance, customs clearance UK, import customs clearance, export customs clearance, fast customs clearance, same-day customs clearance, emergency customs clearance, customs brokerage UK, border clearance services, urgent import/export services",
 };


 const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { title: "Same-Day Import Declarations (CDS)", desc: "Fast, accurate import declarations for goods entering the UK.", icon: <FileText /> },
    { title: "Same-Day Export Declarations", desc: "Priority export filings for goods leaving the UK.", icon: <Send /> },
    { title: "Emergency HS Code Classification", desc: "Correct commodity codes to avoid delays.", icon: <AlertTriangle /> },
    { title: "Urgent T1 Transit Documents", desc: "Creation and discharge of T1s for stuck shipments.", icon: <Truck /> },
    { title: "Document Code Corrections", desc: "Fixing missing or incorrect document references.", icon: <FileWarning /> },
    { title: "Supplier Invoice Corrections", desc: "We help correct inaccurate or incomplete invoices.", icon: <Receipt /> },
    { title: "Duty & VAT Recalculations", desc: "Ensuring correct charges and compliance.", icon: <Calculator /> },
    { title: "Post-Clearance Amendments", desc: "Fixing errors on previously submitted declarations.", icon: <Edit3 /> },
    { title: "24/7 Support for Time-Critical Shipments", desc: "We act immediately when your goods are held.", icon: <Headphones /> },
  ];

  const risks = [
    {
      title: "Incorrect or missing HS codes",
      description: "Leads to declaration rejection."
    },
    {
      title: "Wrong CPC codes",
      description: "Causes delays or incorrect duty charges."
    },
    {
      title: "Missing document codes",
      description: "CDS requires specific references for many goods."
    },
    {
      title: "Supplier invoice errors",
      description: "Incorrect values, missing descriptions, or wrong Incoterms."
    },
    {
      title: "Licensing or certification issues",
      description: "Some goods require additional documentation."
    },
    {
      title: "Transit (T1) problems",
      description: "Incorrect or undischarged T1s can cause holds."
    },
    {
      title: "Random HMRC checks",
      description: "Even compliant shipments can be selected."
    }
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
    { title: "Any Missing Documents", details: ["Licences, certificates, or origin documents.t"] },    
  ];

  const problems = [
    { title: "Incorrect HS Codes", desc: "We classify goods accurately." },
    { title: "Wrong CPC Codes", desc: "We select the correct customs procedure." },
    { title: "Missing Document Codes", desc: "We add required references." },
    { title: "Incorrect Valuation", desc: "We correct customs value errors." },
    { title: "Transit (T1) Issues", desc: "We create or discharge T1s." },
    { title: "Supplier Invoice Errors", desc: "We correct missing or inaccurate details." },
    { title: "Post-Clearance Amendments", desc: "We fix errors on previously submitted declarations." },
  ];
  
  

  const features = [
    { title: "Immediate Response", desc: "We act as soon as you contact us." },
    { title: "Expert Problem-Solving", desc: "We identify and fix the issue quickly." },
    { title: "Direct Communication with HMRC", desc: "We liaise with customs to resolve holds." },
    { title: "Fast, Accurate Declarations", desc: "We ensure compliance and speed." },
    { title: "Transparent Pricing", desc: "Clear, competitive rates with no hidden fees." },
    { title: "24/7 Availability", desc: "We’re here whenever you need us." },
  ];
  
  

  const urgentClearanceFaq = [
    {
      question: "How fast is urgent customs clearance?",
      answer: "We act immediately — timing depends on documentation and HMRC response.",
    },
    {
      question: "Do you support urgent import and export declarations?",
      answer: "Yes — we handle both.",
    },
    {
      question: "Can you fix rejected declarations?",
      answer: "Absolutely — we specialise in resolving errors.",
    },
    {
      question: "Do you work with freight forwarders and hauliers?",
      answer: "Yes — we provide white-label urgent clearance services.",
    },
    {
      question: "What if I don’t know what the problem is?",
      answer: "We diagnose the issue and fix it.",
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
        title="Urgent Customs Clearance"
        backgroundImage="/images/road-bg.jpg"
        bannerDescription={[
          "Fast, Priority UK Import & Export Support", 
          "When your goods are stuck at the border, every minute matters. Delays can lead to missed delivery deadlines, production stoppages, failed Amazon FBA check-ins, spoiled goods, or costly storage and demurrage fees. Whether your shipment is held at Dover, Felixstowe, Heathrow, or any other UK port, you need a customs agent who can act immediately."        
        ]}
      />

      <ServiceHero
        title="Urgent Customs Clearance"
        description={[
          "Global Customs provides urgent, same-day customs clearance for importers, exporters, hauliers, freight forwarders, and e-commerce businesses. Our team works around the clock to resolve customs issues quickly, submit emergency declarations, and get your goods moving again.",
          "This page explains how our urgent clearance service works, the problems we solve, and why businesses across the UK rely on Global Customs when time is critical.",         
        ]}
        image1="/images/road-big.jpg"
        image2="/images/road-small.jpg"
        image3="/images/road-smaal2.jpg"
      />
      
      <section className="py-20 bg-slate-50">     
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">

          {/* Title */}
          <h2 className="text-3xl font-bold text-slate-900 mb-10 ">
            What Is a <span className="text-[#3daee0]">Urgent Customs Clearance?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Urgent customs clearance is a priority service designed for shipments that:
          </p>

          {/* Use cases */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Are stuck at the border",
              "Require immediate customs intervention",
              "Have missing or incorrect documentation",
              "Need same-day clearance",
              "Are time-sensitive or perishable",
              "Are required for production or retail deadlines",
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
            We step in quickly to resolve the issue and clear your goods.
            </p>
          </div>

        </div>
     
    </section>
      
      <section className="py-24  font-sans">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Side: The "Why" & The "Risks" */}
            <div className="lg:w-3/5">             
              <h2 className="text-3xl font-bold text-slate-900 mb-10">
              Why Shipments Get Delayed at Customs
              </h2>
              
              <p className="text-xl text-slate-500 mb-8 font-medium">
              Common reasons include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {risks.map((risk, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 shadow-md bg-white rounded-xl border border-slate-100"
                    >
                      <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />

                      <div>
                        <p className="text-slate-700 font-semibold mb-1">
                          {risk.title}
                        </p>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {risk.description}
                        </p>
                      </div>
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
                  We resolve these issues quickly and professionally.
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
            <h2 className="text-3xl font-bold text-slate-900">Our Urgent Customs Clearance Services</h2>
            <p className="mt-4 text-slate-600">We provide a complete range of emergency customs services:</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Needs Urgent Customs Clearance?</h2>
              <p className="text-slate-600 mb-6">Our urgent services support:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                   'Importers','Exporters', 'Hauliers', 'Freight forwarders', 
                  'Retailers', 'Manufacturers', 'E-commerce sellers', 
                  'Amazon FBA merchants', 'Automotive suppliers', 'Food & drink distributors'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
              If your goods are stuck, delayed, or time-critical, we can help.
              </p>
            </div>
          </div>
        </div>
      </section>
          

      {/* Requirements Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What You Need for Urgent Clearance</h2>
            <p className="text-slate-600 mt-4">To resolve issues quickly, we typically require:</p>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How Global Customs Resolves Urgent Issues Quickly</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Common Urgent Problems We Solve</h2>
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
         sectionDescription="Contact Global Customs immediately for fast, expert support and 24/7 assistance."
         buttonText="get a quote"
         buttonLink="/contact"
         faqs={urgentClearanceFaq}
       />
       <SiteCta
          title="Need urgent customs clearance right now?"
          description="Contact Global Customs today for expert support, accurate filings, and 24/7 assistance"
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

    

    </Layout>
    </>
    )
}