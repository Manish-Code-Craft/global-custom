import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState } from 'react';
import { Ship, Plane, AlertCircle } from 'lucide-react';
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

export default function Road({ preview }) {

  const PageMeta = {
    title: "Customs Clearance for Small Businesses | Simple & Affordable UK Customs",
    description:
      "Customs clearance services designed for small businesses. Simple pricing, expert support, and full HMRC compliance for UK imports and exports.",
    keywords:
      "Small Business Customs Clearance, Customs Clearance UK, Import Export for SMEs, HMRC Customs Support",
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "Import Customs Clearance", desc: "Simple, compliant import declarations for small businesses.", icon: <FileCheck /> },
    { title: "Export Customs Clearance", desc: "Fast export declarations to move goods internationally.", icon: <Boxes /> },
    { title: "Duty & VAT Calculation", desc: "Clear calculation of customs duty and import VAT.", icon: <Calculator /> },
    { title: "HS Code & CPC Support", desc: "Help choosing the correct commodity and procedure codes.", icon: <BadgeCheck /> },
    { title: "Error Fixes & Amendments", desc: "Correction of rejected or incorrect declarations.", icon: <RefreshCcw /> },
    { title: "Ongoing SME Support", desc: "Friendly, jargon-free support as your business grows.", icon: <LifeBuoy /> },
    { title: "First-Time Importer Guidance", desc: "Step-by-step help for new importers and exporters.", icon: <PackageSearch /> },
  ];

  const risks = [
    "Rejected customs declarations",
    "Unexpected duty or VAT charges",
    "Delays at ports and airports",
    "HMRC penalties",
    "Confusing paperwork",
    "Incorrect codes or values",
    "Cash-flow disruption",
  ];

  const locations = [
    {
      title: "Major Ports",
      icon: <Ship className="w-8 h-8 text-[#3daee0]" />,
      items: ["Dover", "Felixstowe", "Southampton", "London Gateway", "Liverpool", "Hull", "Immingham", "Bristol", "Tilbury"],
    },
    {
      title: "Airports",
      icon: <Plane className="w-8 h-8 text-[#3daee0]" />,
      items: ["Heathrow", "Gatwick", "Manchester", "East Midlands", "Birmingham", "Stansted"],
    },
    {
      title: "Inland Border Facilities",
      icon: <Warehouse className="w-8 h-8 text-[#3daee0]" />,
      items: ["Sevington", "Ashford", "Dover Western Docks", "Birmingham", "Warrington"],
    },
  ];

  const requirements = [
    { title: "Commercial Invoice", details: ["Goods description, value, currency, and Incoterms."] },
    { title: "Packing List", details: ["Weights, quantities, and packaging details."] },
    { title: "Commodity Codes", details: ["HS or commodity codes (we help if unsure)."] },
    { title: "Transport Details", details: ["Courier, freight, airway bill, or MRN."] },
    { title: "Business Details", details: ["UK EORI and VAT number if registered."] },
    { title: "Licences or Certificates", details: ["Only if required for your goods."] },
  ];

  const problems = [
    { title: "First-Time Import Confusion", desc: "We guide you through the process step by step." },
    { title: "Rejected Declarations", desc: "We fix errors and resubmit quickly." },
    { title: "Unexpected Charges", desc: "We explain costs clearly before submission." },
    { title: "Incorrect HS Codes", desc: "We help avoid misclassification issues." },
    { title: "Missing Documents", desc: "We identify exactly what’s needed." },
    { title: "Growing Import Volumes", desc: "We scale support as your business grows." },
  ];

  const features = [
    { title: "SME-Focused Service", desc: "Designed specifically for small businesses." },
    { title: "Clear, Simple Pricing", desc: "No hidden fees or confusing costs." },
    { title: "Friendly Expert Support", desc: "We explain customs in plain English." },
    { title: "HMRC-Compliant Processing", desc: "Speed without risking compliance." },
    { title: "Scalable Support", desc: "From your first shipment to daily imports." },
  ];

  const classificationFaq = [
    {
      question: "Do you work with small businesses and startups?",
      answer: "Yes — we specialise in supporting small businesses and first-time importers.",
    },
    {
      question: "Can you help if I’ve never imported before?",
      answer: "Absolutely — we guide you through every step.",
    },
    {
      question: "Do I need a VAT number?",
      answer: "Not always — we advise based on your situation.",
    },
    {
      question: "Can you fix rejected declarations?",
      answer: "Yes — we correct and resubmit entries quickly.",
    },
    {
      question: "Is your service affordable for SMEs?",
      answer: "Yes — our pricing is designed for small businesses.",
    },
  ];

  const points = [
    { condition: "First-time importing", example: "Step-by-step customs guidance" },
    { condition: "Low shipment volumes", example: "Affordable per-shipment pricing" },
    { condition: "Growing e-commerce sales", example: "Scalable clearance support" },
    { condition: "Courier or freight imports", example: "Simple import handling" },
    { condition: "Exporting internationally", example: "Compliant export declarations" },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>

        <NewInnerBanner
          title="Customs Clearance for Small Businesses"
          backgroundImage="/images/road-bg.jpg"
          bannerDescription={[
            "Simple, Affordable Customs Clearance for Small Businesses",
            "Customs doesn’t need to be complicated. Our small business customs clearance service makes importing and exporting simple, compliant, and cost-effective — even if it’s your first shipment.",
          ]}
        />

        <ServiceHero
          title="Customs Clearance Services for Small Businesses"
          description={[
            "Global Customs supports small businesses, startups, and SMEs with reliable UK customs clearance. We handle the paperwork, calculations, and HMRC requirements so you can focus on growing your business.",
            "Whether you ship occasionally or regularly, we provide clear guidance, fast processing, and friendly expert support.",
          ]}
          image1="/images/road-big.jpg"
          image2="/images/road-small.jpg"
          image3="/images/road-smaal2.jpg"
        />

        {/* WHAT IS SECTION */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              Customs Clearance for <span className="text-[#3daee0]">Small Businesses</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Customs clearance is the legal process required when goods enter or leave the UK. For small businesses, mistakes can be costly — but with the right support, customs becomes straightforward.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Import and export declarations",
                "Duty and VAT calculation",
                "HMRC compliance",
                "Simple documentation",
                "Clear cost breakdowns",
                "Support at every step",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md border border-gray-200">
                  <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-[#3daee0] text-white text-sm font-semibold">✓</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-[#3daee0]/5 border-l-4 border-[#3daee0]">
              <p className="text-gray-700">
                We make customs clearance simple — even if you’ve never done it before.
              </p>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-24 font-sans">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-3/5">
                <h2 className="text-3xl font-bold text-slate-900 mb-10">
                  Why Small Businesses Need Expert Customs Support
                </h2>

                <p className="text-xl text-slate-500 mb-8 font-medium">
                  Without expert help, small businesses often face:
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

              <div className="lg:w-2/5 lg:mt-24">
                <div className="relative p-1 bg-gradient-to-b from-[#3daee0] to-blue-600 rounded-[2.5rem] shadow-2xl shadow-blue-200">
                  <div className="bg-white rounded-[2.4rem] p-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6">
                      <CheckCircle2 className="text-[#3daee0] w-10 h-10" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                      We simplify customs so small businesses can trade confidently.
                    </p>
                    <div className="mt-8 pt-8 border-t border-slate-100">
                      <Btn link="/contact" title="Contact Us" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">
                Our Small Business Customs Services
              </h2>
              <p className="mt-4 text-slate-600">
                Everything you need to import or export with confidence:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="text-[#0ea5e9] mb-4">
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

        {/* WHO WE WORK WITH */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                  <Image
                    src="/images/road-custom.png"
                    width={800}
                    height={800}
                    alt="Customs clearance for small businesses"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Who We Support
                </h2>
                <p className="text-slate-600 mb-6">
                  Our customs clearance service is ideal for:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Small businesses",
                    "Startups",
                    "Online sellers",
                    "Amazon FBA sellers",
                    "Retailers",
                    "Manufacturers",
                    "Import agents",
                    "Exporters",
                    "Growing SMEs",
                    "First-time traders",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  No matter your size, we treat your shipment with priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                What We Need to Clear Your Goods
              </h2>
              <p className="text-slate-600 mt-4">
                We keep requirements simple and guide you through them:
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
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
                  If you’re unsure, we’ll explain everything clearly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Why Small Businesses Choose Global Customs
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
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

        {/* PROBLEMS */}
        <section className="py-20 bg-[#0ea5e9] text-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Common Small Business Customs Problems We Solve
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((prob, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="font-bold text-lg mb-2">
                    {prob.title}
                  </h4>
                  <p className="text-blue-50 text-sm">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-24 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-left lg:text-center">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                Industries We Support
              </h2>
              <p className="text-slate-600 mb-10">
                Small business customs clearance supports:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "E-commerce",
                "Retail",
                "Automotive",
                "Food & drink",
                "Manufacturing",
                "Pharmaceuticals",
                "Technology",
                "Amazon FBA",
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
              From first shipment to scaling globally, we support your journey.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Common questions about customs clearance for small businesses."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={classificationFaq}
        />

        <SiteCta
          title="Need customs clearance for your small business?"
          description="Contact Global Customs today for simple, affordable, and compliant customs clearance."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  );
}
