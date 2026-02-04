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
    title: "Duty & VAT Consultancy | Customs Duty & Import VAT Experts UK",
    description:
      "Specialist duty and VAT consultancy for UK imports and exports. Reduce overpayments, ensure HMRC compliance, and protect cash flow.",
    keywords:
      "Duty Consultancy UK, VAT Consultancy, Import VAT UK, Customs Duty Advice, HMRC Compliance",
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "Customs Duty Calculation", desc: "Accurate calculation of customs duty based on value, origin, and procedure.", icon: <Calculator /> },
    { title: "Import VAT Assessment", desc: "Correct import VAT treatment including postponed VAT accounting.", icon: <FileCheck /> },
    { title: "Overpayment Review & Recovery", desc: "Identify and recover overpaid customs duty and VAT.", icon: <RefreshCcw /> },
    { title: "Customs Procedure Optimisation", desc: "Ensure the most cost-effective and compliant customs procedure.", icon: <BadgeCheck /> },
    { title: "Trade Agreement Duty Relief", desc: "Confirm eligibility for reduced or zero duty rates.", icon: <Boxes /> },
    { title: "Ongoing Duty & VAT Support", desc: "Long-term advisory support for regular importers.", icon: <LifeBuoy /> },
    { title: "HMRC Compliance Review", desc: "Reduce audit risk and penalty exposure.", icon: <PackageSearch /> },
  ];

  const risks = [
    "Overpayment of customs duty",
    "Incorrect import VAT charges",
    "HMRC penalties and assessments",
    "Cash-flow disruption",
    "Rejected or amended declarations",
    "Missed duty reliefs",
    "Non-compliant VAT accounting",
  ];

  const locations = [
    {
      title: "Major Ports",
      icon: <Ship className="w-8 h-8 text-[#3daee0]" />,
      items: ["Felixstowe", "Southampton", "London Gateway", "Dover", "Liverpool", "Hull", "Immingham", "Bristol", "Tilbury"],
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
    { title: "Commercial Invoices", details: ["Correct values, currency, and Incoterms."] },
    { title: "Commodity Codes", details: ["Confirmed HS / commodity codes."] },
    { title: "Origin Evidence", details: ["Supplier declarations and proof of origin."] },
    { title: "Customs Declarations", details: ["Import and export entry details."] },
    { title: "VAT Information", details: ["UK VAT registration and accounting method."] },
    { title: "Transport Details", details: ["Mode of transport and shipment structure."] },
  ];

  const problems = [
    { title: "Overpaid Duty & VAT", desc: "We identify unnecessary costs and recovery opportunities." },
    { title: "Incorrect VAT Accounting", desc: "We correct postponed VAT and reclaim errors." },
    { title: "Incorrect Customs Value", desc: "We resolve valuation issues inflating charges." },
    { title: "Missed Duty Reliefs", desc: "We ensure correct application of reliefs and agreements." },
    { title: "Supplier Invoice Errors", desc: "We correct Incoterms and invoice inaccuracies." },
    { title: "HMRC Compliance Risk", desc: "We reduce audit exposure and penalties." },
  ];

  const features = [
    { title: "HMRC-Focused Expertise", desc: "Advice aligned strictly with UK customs and VAT law." },
    { title: "End-to-End Cost Review", desc: "From valuation through to VAT accounting." },
    { title: "Compliance-First Approach", desc: "We prioritise audit protection and accuracy." },
    { title: "Transparent Advice", desc: "Clear guidance with no ambiguity or hidden risks." },
    { title: "Fast Turnaround", desc: "Timely support to keep goods moving." },
  ];

  const classificationFaq = [
    {
      question: "Can you help reduce customs duty costs?",
      answer: "Yes — we review valuation, origin, procedures, and duty relief eligibility.",
    },
    {
      question: "Do you support postponed VAT accounting?",
      answer: "Yes — we ensure correct application and HMRC-compliant reporting.",
    },
    {
      question: "Can you recover overpaid duty or VAT?",
      answer: "Yes — where eligible, we assist with claims and corrections.",
    },
    {
      question: "Do you assist during HMRC audits?",
      answer: "Yes — we provide documentation review and compliance support.",
    },
    {
      question: "Who benefits from duty and VAT consultancy?",
      answer: "Importers, exporters, freight forwarders, and e-commerce businesses.",
    },
  ];

  const points = [
    { condition: "Goods imported into the UK for sale", example: "Duty and VAT payable at import" },
    { condition: "Goods imported using postponed VAT", example: "VAT declared on VAT return" },
    { condition: "Goods entering bonded warehouses", example: "Duty and VAT suspended" },
    { condition: "Goods qualifying for trade agreements", example: "Reduced or zero duty rates" },
    { condition: "Complex multi-border movements", example: "Duty planning reduces costs" },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>

        <NewInnerBanner
          title="Duty & VAT Consultancy"
          backgroundImage="/images/road-bg.jpg"
          bannerDescription={[
            "Expert Customs Duty & Import VAT Advice for UK Businesses",
            "Errors in customs duty and import VAT can lead to unnecessary costs, penalties, and cash-flow disruption. Our duty and VAT consultancy ensures your imports and exports are compliant, cost-effective, and fully aligned with HMRC requirements.",
          ]}
        />

        <ServiceHero
          title="Duty & VAT Consultancy Services"
          description={[
            "Global Customs provides specialist duty and VAT consultancy for UK importers and exporters. We help businesses calculate the correct duty and VAT, reduce overpayments, and maintain full HMRC compliance.",
            "This page explains how duty and VAT work, why accurate calculations matter, and how Global Customs protects margins and cash flow.",
          ]}
          image1="/images/road-big.jpg"
          image2="/images/road-small.jpg"
          image3="/images/road-smaal2.jpg"
        />

        {/* WHAT IS SECTION */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              What Is <span className="text-[#3daee0]">Customs Duty & Import VAT</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Customs duty and import VAT are charges applied when goods enter the UK. The amount payable depends on the commodity code, customs value, origin, and the customs procedure used.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Duty rates",
                "Import VAT liability",
                "Cash-flow impact",
                "VAT reclaim eligibility",
                "Trade agreement savings",
                "HMRC compliance requirements",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md border border-gray-200">
                  <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-[#3daee0] text-white text-sm font-semibold">✓</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-[#3daee0]/5 border-l-4 border-[#3daee0]">
              <p className="text-gray-700">
                Accurate duty and VAT calculations are essential for compliance, cost control, and audit protection.
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
                  Why Accurate Duty & VAT Advice Matters
                </h2>

                <p className="text-xl text-slate-500 mb-8 font-medium">
                  Incorrect duty and VAT treatment can cause:
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
                      We ensure you pay the correct duty and VAT — nothing more.
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
              <h2 className="text-3xl font-bold text-slate-900">Our Duty & VAT Consultancy Services</h2>
              <p className="mt-4 text-slate-600">We provide a complete range of advisory services:</p>
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
                    alt="Duty and VAT consultancy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Work With</h2>
                <p className="text-slate-600 mb-6">Our duty and VAT consultancy supports:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Importers",
                    "Exporters",
                    "Freight forwarders",
                    "Hauliers",
                    "Retailers",
                    "Manufacturers",
                    "E-commerce sellers",
                    "Amazon FBA merchants",
                    "Automotive suppliers",
                    "Food & drink distributors",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  Whether you import occasionally or daily, we can support your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">What We Need to Review Your Duty & VAT</h2>
              <p className="text-slate-600 mt-4">To assess your duty and VAT position accurately, we typically require:</p>
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
                <p className="font-bold text-[#0ea5e9]">
                  If you’re unsure about any of this, we guide you step-by-step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How Global Customs Ensures Accurate Duty & VAT Advice
            </h2>

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

        {/* PROBLEMS */}
        <section className="py-20 bg-[#0ea5e9] text-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Common Duty & VAT Problems We Solve
            </h2>

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

        {/* INDUSTRIES */}
        <section className="py-24 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <div className="text-left lg:text-center">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                Industries We Support
              </h2>
              <p className="text-slate-600 mb-10">
                Our duty and VAT consultancy supports:
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
              From simple imports to complex supply chains, we provide clear duty and VAT advice.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Common questions about duty and VAT consultancy."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={classificationFaq}
        />

        <SiteCta
          title="Need expert duty and VAT advice?"
          description="Contact Global Customs today for compliant, cost-effective duty and VAT consultancy."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  );
}
