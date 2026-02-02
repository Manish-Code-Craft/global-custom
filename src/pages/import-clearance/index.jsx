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
import { 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight, 
  FileText, 
  Globe, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Search, 
  HelpCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Anchor,
  Briefcase,
  AlertCircle,
  Link as LinkIcon,
  Package
} from 'lucide-react';
import SiteFAQs from "@/components/ui/SiteFAQs";
import SiteCta from "@/components/ui/SiteCta";

export default function Road ({ preview }) {

  const PageMeta = {
   title: "Import Clearance  | Custom Clearance Services UK",
   description:"Global Custom Clearance (UK) provides expert road customs clearance services, ensuring efficient and compliant transport of goods across UK borders. Our experienced team manages all aspects of customs documentation, duty calculations, and regulatory compliance to facilitate smooth transit for your road freight shipments.",
   keywords:"Road Customs Clearance, Border Clearance Services, Fast Customs Processing, Freight Forwarding Solutions,",
 };


 const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { title: "Import Declarations", desc: "Full import declarations for goods entering the UK.", icon: <Anchor /> },
    { title: "Export Declarations", desc: "Accurate export filings for goods leaving the UK.", icon: <Globe /> },
    { title: "Supplementary Declarations", desc: "For businesses using simplified procedures.", icon: <FileText /> },
    { title: "Customs Procedure Codes (CPCs)", desc: "Correct CPC selection to avoid delays.", icon: <Search /> },
    { title: "Document Code Validation", desc: "Ensuring all required certificates and licences are included.", icon: <CheckCircle /> },
    { title: "HS Code Classification", desc: "Correct commodity codes to avoid overpaying duty.", icon: <Briefcase /> },
    { title: "Duty & VAT Calculation", desc: "Including postponed VAT accounting (PVA).", icon: <ShieldCheck /> },
    { title: "T1 Transit Documents", desc: "Creation and discharge of transit movements.", icon: <Truck /> },
    { title: "Urgent & Same-Day Declarations", desc: "Priority processing for time-critical shipments.", icon: <Clock /> }
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
    { title: "Expert Knowledge of CDS Requirements", desc: "We stay up to date with all regulatory changes." },
    { title: "Fast Turnaround", desc: "We process declarations quickly to keep your goods moving." },
    { title: "Compliance-First Approach", desc: "We ensure every declaration meets HMRC requirements." },
    { title: "Transparent Pricing", desc: "Clear, competitive rates with no hidden fees." },
    { title: "Nationwide Coverage", desc: "We support all major UK ports and airports." },
    { title: "24/7 Support", desc: "Urgent shipments? No problem — we’re always available." }
  ];

  const SITE_FAQS = [
    {
      question: "How long does a CDS declaration take?",
      answer:
        "Most declarations are processed quickly, but timing depends on documentation accuracy, port traffic, and any HMRC compliance checks.",
    },
    {
      question: "Do you support CDS import and export declarations?",
      answer:
        "Yes — we handle both import and export declarations fully through the Customs Declaration Service (CDS).",
    },
    {
      question: "Can you handle urgent or same-day declarations?",
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
        "No problem. Our customs specialists can accurately classify your goods and ensure the correct HS codes are applied.",
    },
  ];

    return(
      <>
      <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
        <Heroroad bannerdescription='Fast, Compliant Customs Support for All UK Ports and Airports' title='Import Clearance UK' title2='Import Clearance UK' description="Importing goods into the UK requires precision, compliance, and a deep understanding of customs regulations. Every shipment must be declared correctly through the Customs Declaration Service (CDS), with accurate HS codes, correct valuation, and the right customs procedure codes (CPCs). Any errors can lead to delays, rejected declarations, additional charges, or goods being held at the border. Global Customs provides fast, reliable import clearance services across the UK, supporting importers, freight forwarders, hauliers, manufacturers, retailers, and e-commerce businesses. We work with all major UK ports, airports, and inland border facilities to ensure your goods move smoothly and without delay."
        image1="/images/road-big.jpg" image2='/images/road-small.jpg' image3='/images/road-smaal2.jpg' backgroundImage="/images/road-bg.jpg"
       />



      {/* What is CDS - Grid Layout */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#0ea5e9] p-2 rounded-lg text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">What Is CDS?</h2>
              </div>
              <p className="text-slate-600 mb-4">
                The Customs Declaration Service (CDS) is the UK’s modern customs platform, replacing the old CHIEF system. It handles:
              </p>
              <ul className="space-y-3 mb-6">
                {['Import declarations', 'Export declarations', 'Duty and VAT calculations', 'Customs procedure codes (CPCs)', 'Document codes and licences', 'Tari and commodity code validation'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="text-[#0ea5e9] mt-1 h-5 w-5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 border-l-4 border-[#0ea5e9] p-4 rounded-r-lg">
                <p className="text-[#0ea5e9] font-bold">
                  CDS is more detailed and complex than CHIEF, requiring additional data fields and precise information.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-50 p-2 rounded-lg text-red-500">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Why CDS Matters for Your Business</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Incorrect or incomplete CDS declarations can cause:
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <ul className="grid grid-cols-1 gap-4">
                  {['Delays at ports', 'Rejected declarations', 'Incorrect duty charges', 'VAT accounting errors', 'Compliance penalties', 'Supply chain disruption'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="text-[#0ea5e9]" />
                Global Customs ensures your declarations are correct the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 ">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our CDS Declaration Services</h2>
            <p className="mt-4 text-slate-600">We provide a complete range of CDS services:</p>
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
              <p className="text-slate-600 mb-6">Our CDS services support:</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
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
            <h2 className="text-3xl font-bold text-slate-900">What You Need for a CDS Declaration</h2>
            <p className="text-slate-600 mt-4">To process your declaration quickly, we typically require:</p>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How Global Customs Ensures Fast, Compliant CDS Filing</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Common CDS Problems We Solve</h2>
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
      {/* <section className="py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Industries We Support</h2>
          <p className="text-slate-600 mb-8">We work with businesses across:</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['E-commerce', 'Automotive', 'Food & drink', 'Pharmaceuticals', 'Retail', 'Manufacturing', 'Logistics & freight forwarding', 'Amazon FBA sellers'].map((ind, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-slate-50 text-slate-700 font-medium border border-slate-200">
                {ind}
              </span>
            ))}
          </div>
          <p className="text-slate-900 font-medium">Whether you import small parcels or full containers, we can support your needs.</p>
        </div>
      </section> */}

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
         sectionDescription="Answers to common questions about CDS import and export declarations, timelines, and urgent submissions."
         buttonText="get a quote"
         buttonLink="/contact"
         faqs={SITE_FAQS}
       />
       <SiteCta
          title="Need fast, reliable CDS declarations?"
          description="Contact Global Customs today for expert support, accurate filings, and 24/7 assistance."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

    </Layout>
    </>
    )
}