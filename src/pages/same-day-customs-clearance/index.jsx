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
    title: "Same-Day Customs Clearance | Urgent Import & Export Clearance UK",
    description:
      "Same-day customs clearance for urgent UK imports and exports. Fast CDS declarations, error resolution, and HMRC compliance support.",
    keywords:
      "Same Day Customs Clearance, Urgent Customs Clearance UK, Emergency Import Clearance, Fast CDS Declarations",
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "Same-Day Import Declarations", desc: "Urgent CDS import declarations processed the same day.", icon: <FileCheck /> },
    { title: "Same-Day Export Declarations", desc: "Fast export clearance to prevent shipment delays.", icon: <Boxes /> },
    { title: "Rejected Declaration Fixes", desc: "Immediate correction of CDS errors and re-submission.", icon: <RefreshCcw /> },
    { title: "Duty & VAT Calculations", desc: "Accurate duty and VAT calculation under tight deadlines.", icon: <Calculator /> },
    { title: "Document & Code Review", desc: "Rapid validation of HS codes, CPCs, and document codes.", icon: <BadgeCheck /> },
    { title: "Port & Border Liaison", desc: "Direct coordination with ports, depots, and HMRC.", icon: <Warehouse /> },
    { title: "24/7 Emergency Support", desc: "Out-of-hours clearance for critical shipments.", icon: <LifeBuoy /> },
  ];

  const risks = [
    "Cargo held at port or airport",
    "Missed delivery deadlines",
    "Storage and demurrage charges",
    "Rejected CDS declarations",
    "Incorrect duty or VAT charges",
    "Customer or contract penalties",
    "Supply chain disruption",
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
    { title: "Commercial Invoice", details: ["Correct values, Incoterms, and currency."] },
    { title: "Packing List", details: ["Accurate weights and package details."] },
    { title: "Commodity Codes", details: ["Confirmed HS / commodity codes."] },
    { title: "Transport Details", details: ["MRN, airway bill, or bill of lading."] },
    { title: "Licences & Certificates", details: ["If required for controlled goods."] },
    { title: "Importer / Exporter Details", details: ["EORI and VAT registration numbers."] },
  ];

  const problems = [
    { title: "Rejected Declarations", desc: "We correct errors and resubmit immediately." },
    { title: "Missing Documentation", desc: "We identify and resolve gaps quickly." },
    { title: "Incorrect HS or CPC Codes", desc: "We fix coding issues that cause rejections." },
    { title: "Urgent Clearance Requests", desc: "We prioritise time-critical shipments." },
    { title: "Unexpected Charges", desc: "We prevent incorrect duty and VAT assessments." },
    { title: "Port Delays", desc: "We liaise directly with ports and depots." },
  ];

  const features = [
    { title: "Same-Day Processing", desc: "Declarations submitted and resolved within hours." },
    { title: "CDS Specialists", desc: "Deep expertise in the UK Customs Declaration Service." },
    { title: "Error Resolution Experts", desc: "Fast fixes for rejected or held entries." },
    { title: "HMRC-Compliant Approach", desc: "Speed without compromising compliance." },
    { title: "24/7 Availability", desc: "Support when your shipment cannot wait." },
  ];

  const classificationFaq = [
    {
      question: "How fast is same-day customs clearance?",
      answer: "In most cases, declarations are processed within hours, subject to document availability and HMRC response.",
    },
    {
      question: "Do you fix rejected CDS declarations?",
      answer: "Yes — we specialise in urgent error correction and resubmission.",
    },
    {
      question: "Do you support imports and exports?",
      answer: "Yes — we handle both import and export same-day clearance.",
    },
    {
      question: "Do you work with freight forwarders?",
      answer: "Yes — we provide white-label urgent clearance support.",
    },
    {
      question: "Can you help if I don’t know the issue?",
      answer: "Yes — we diagnose the problem and resolve it fast.",
    },
  ];

  const points = [
    { condition: "Urgent import stuck at port", example: "Same-day CDS submission" },
    { condition: "Rejected customs declaration", example: "Immediate correction and resubmission" },
    { condition: "Air freight arriving same day", example: "Fast clearance to meet delivery" },
    { condition: "Time-critical export", example: "Avoid missed sailings or flights" },
    { condition: "High-value or sensitive cargo", example: "Priority handling and compliance" },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>

        <NewInnerBanner
          title="Same-Day Customs Clearance"
          backgroundImage="/images/road-bg.jpg"
          bannerDescription={[
            "Urgent Customs Clearance When Time Is Critical",
            "Delays at ports or airports can cost thousands. Our same-day customs clearance service ensures urgent import and export declarations are processed quickly, accurately, and in full compliance with HMRC requirements.",
          ]}
        />

        <ServiceHero
          title="Same-Day Customs Clearance Services"
          description={[
            "Global Customs provides same-day customs clearance for time-critical UK imports and exports. We act immediately to submit, correct, and resolve customs declarations.",
            "Whether your shipment is stuck, rejected, or arriving urgently, our specialists work fast to release your goods and keep your supply chain moving.",
          ]}
          image1="/images/road-big.jpg"
          image2="/images/road-small.jpg"
          image3="/images/road-smaal2.jpg"
        />

        {/* WHAT IS SAME-DAY CLEARANCE */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              What Is <span className="text-[#3daee0]">Same-Day Customs Clearance</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Same-day customs clearance is an urgent service designed to process import or export declarations within hours. It is commonly used when goods are held, rejected, or arriving on tight deadlines.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Priority declaration handling",
                "Fast CDS submission",
                "Immediate error correction",
                "Port and depot coordination",
                "Reduced storage costs",
                "Compliance maintained",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md border border-gray-200">
                  <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-[#3daee0] text-white text-sm font-semibold">✓</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-[#3daee0]/5 border-l-4 border-[#3daee0]">
              <p className="text-gray-700">
                Same-day clearance minimises delays, costs, and operational disruption.
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
                  Why Fast Customs Clearance Matters
                </h2>

                <p className="text-xl text-slate-500 mb-8 font-medium">
                  Delayed clearance can result in:
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
                      We clear urgent shipments quickly and compliantly.
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
                Our Same-Day Customs Clearance Services
              </h2>
              <p className="mt-4 text-slate-600">
                Rapid response for urgent customs situations:
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
                    alt="Same-day customs clearance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Who Uses Same-Day Customs Clearance
                </h2>
                <p className="text-slate-600 mb-6">
                  Our urgent clearance service supports:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Importers",
                    "Exporters",
                    "Freight forwarders",
                    "Hauliers",
                    "E-commerce businesses",
                    "Retailers",
                    "Manufacturers",
                    "Amazon FBA sellers",
                    "Automotive suppliers",
                    "Time-critical logistics providers",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  If your shipment cannot wait, our same-day service is the solution.
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
                What We Need for Same-Day Clearance
              </h2>
              <p className="text-slate-600 mt-4">
                To act immediately, we typically require:
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
                  The sooner we receive documents, the faster we clear your goods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How Global Customs Delivers Same-Day Clearance
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
              Common Same-Day Clearance Problems We Solve
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
                Same-day customs clearance supports:
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
              When speed matters, we deliver compliant same-day clearance.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Common questions about same-day customs clearance."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={classificationFaq}
        />

        <SiteCta
          title="Need same-day customs clearance?"
          description="Contact Global Customs now for urgent, compliant customs clearance support."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  );
}
