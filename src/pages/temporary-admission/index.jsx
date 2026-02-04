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
    title: "Temporary Admission (TA) | Duty-Free Temporary Imports UK",
    description:
      "Temporary Admission (TA) allows goods to enter the UK without paying duty or VAT. Expert TA processing, compliance, and HMRC support.",
    keywords:
      "Temporary Admission UK, TA Customs Procedure, Temporary Import UK, Duty Free Import, HMRC Temporary Admission",
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "Temporary Admission Setup", desc: "Correct setup of the TA customs procedure for eligible goods.", icon: <Boxes /> },
    { title: "TA Declaration Filing", desc: "Accurate CDS declarations under Temporary Admission.", icon: <FileCheck /> },
    { title: "Duty & VAT Suspension", desc: "Ensure duty and VAT are suspended where permitted.", icon: <Calculator /> },
    { title: "Compliance Monitoring", desc: "Track deadlines and ensure re-export conditions are met.", icon: <BadgeCheck /> },
    { title: "TA Extensions & Amendments", desc: "Support with extensions or changes to TA authorisation.", icon: <RefreshCcw /> },
    { title: "Ongoing TA Advisory Support", desc: "Continuous support for repeat temporary imports.", icon: <LifeBuoy /> },
    { title: "TA Exit & Discharge Support", desc: "Correct closure of TA movements to avoid charges.", icon: <PackageSearch /> },
  ];

  const risks = [
    "Full duty and VAT charges",
    "HMRC penalties",
    "Incorrect TA declarations",
    "Missed re-export deadlines",
    "Goods seized or delayed",
    "TA authorisation withdrawn",
    "Compliance breaches",
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
    { title: "Purpose of Import", details: ["Clear explanation of why goods are entering the UK temporarily."] },
    { title: "Goods Description", details: ["Detailed description including serial numbers where applicable."] },
    { title: "Re-export Timeline", details: ["Expected date goods will leave the UK."] },
    { title: "Ownership Details", details: ["Confirmation goods will not be sold in the UK."] },
    { title: "Transport Information", details: ["Mode of transport and border location."] },
    { title: "Supporting Documents", details: ["Contracts, event details, or repair agreements."] },
  ];

  const problems = [
    { title: "Missed Re-export Deadlines", desc: "We monitor timelines to avoid duty becoming payable." },
    { title: "Incorrect TA Usage", desc: "We ensure goods qualify for Temporary Admission." },
    { title: "Invalid Declarations", desc: "We correct CDS errors under TA." },
    { title: "Unexpected Duty Bills", desc: "We prevent duty and VAT demands." },
    { title: "Lack of Documentation", desc: "We ensure HMRC-ready paperwork." },
    { title: "TA Discharge Failures", desc: "We correctly close TA movements." },
  ];

  const features = [
    { title: "HMRC TA Expertise", desc: "Deep understanding of UK Temporary Admission rules." },
    { title: "End-to-End TA Management", desc: "From entry to re-export and discharge." },
    { title: "Strict Compliance Control", desc: "We prevent conditions being breached." },
    { title: "Fast Border Processing", desc: "Accurate declarations reduce delays." },
    { title: "Clear Commercial Advice", desc: "We explain TA obligations in plain language." },
  ];

  const classificationFaq = [
    {
      question: "What is Temporary Admission?",
      answer: "It allows eligible goods to enter the UK without paying duty or VAT if they are re-exported.",
    },
    {
      question: "How long can goods stay under TA?",
      answer: "Typically up to 24 months, depending on goods and purpose.",
    },
    {
      question: "Can TA be extended?",
      answer: "Yes — extensions may be possible with HMRC approval.",
    },
    {
      question: "What happens if goods are not re-exported?",
      answer: "Duty and VAT become payable, and penalties may apply.",
    },
    {
      question: "Do you handle TA exits?",
      answer: "Yes — we ensure correct discharge of the TA procedure.",
    },
  ];

  const points = [
    { condition: "Goods entering the UK temporarily", example: "Exhibitions, demonstrations, repairs" },
    { condition: "Goods remaining under ownership", example: "No sale within the UK" },
    { condition: "Goods intended for re-export", example: "Returned to country of origin" },
    { condition: "Commercial equipment", example: "Tools, machinery, instruments" },
    { condition: "Event or trade show goods", example: "Duty and VAT suspended" },
  ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>

        <NewInnerBanner
          title="Temporary Admission (TA)"
          backgroundImage="/images/road-bg.jpg"
          bannerDescription={[
            "Import Goods Temporarily Without Paying Duty or VAT",
            "Temporary Admission allows eligible goods to enter the UK with duty and VAT suspended, provided strict conditions are met. Errors can result in full charges and penalties — expert handling is essential.",
          ]}
        />

        <ServiceHero
          title="Temporary Admission (TA) Services"
          description={[
            "Global Customs provides specialist Temporary Admission services for businesses importing goods into the UK for exhibitions, repairs, testing, demonstrations, or professional use.",
            "We manage TA declarations, compliance obligations, and re-export requirements to ensure your goods move smoothly and legally.",
          ]}
          image1="/images/road-big.jpg"
          image2="/images/road-small.jpg"
          image3="/images/road-smaal2.jpg"
        />

        {/* WHAT IS TA */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              What Is <span className="text-[#3daee0]">Temporary Admission</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Temporary Admission is a UK customs procedure that allows non-UK goods to enter the country with full or partial relief from customs duty and import VAT, provided the goods are re-exported within a specified time.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Duty and VAT suspended",
                "Strict re-export conditions",
                "No sale in the UK",
                "Time-limited authorisation",
                "HMRC compliance required",
                "Correct discharge mandatory",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-md border border-gray-200">
                  <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-[#3daee0] text-white text-sm font-semibold">✓</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-[#3daee0]/5 border-l-4 border-[#3daee0]">
              <p className="text-gray-700">
                Failure to meet Temporary Admission conditions can result in full duty and VAT charges.
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
                  Why Temporary Admission Must Be Handled Correctly
                </h2>

                <p className="text-xl text-slate-500 mb-8 font-medium">
                  Incorrect use of TA can lead to:
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
                      We ensure your Temporary Admission is compliant from start to finish.
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
                Our Temporary Admission Services
              </h2>
              <p className="mt-4 text-slate-600">
                Complete TA support from entry to re-export:
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
                    alt="Temporary Admission services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Who Uses Temporary Admission
                </h2>
                <p className="text-slate-600 mb-6">
                  Temporary Admission is commonly used by:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Exhibitors and event organisers",
                    "Manufacturers",
                    "Engineering companies",
                    "Repair and maintenance firms",
                    "Film and media crews",
                    "Professional service providers",
                    "Freight forwarders",
                    "International contractors",
                    "Automotive suppliers",
                    "Technology companies",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle className="text-[#0ea5e9] h-4 w-4" /> {item}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  If your goods are entering the UK temporarily, TA may be the correct solution.
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
                What We Need to Arrange Temporary Admission
              </h2>
              <p className="text-slate-600 mt-4">
                To process Temporary Admission correctly, we typically require:
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
                  We guide you through every requirement to ensure compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-[12px] md:px-[36px] xl:px-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              How Global Customs Manages Temporary Admission
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
              Common Temporary Admission Problems We Solve
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
                Temporary Admission is commonly used across:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#3daee0] mb-12">
              {[
                "Exhibitions & events",
                "Manufacturing",
                "Engineering",
                "Automotive",
                "Film & media",
                "Technology",
                "Construction",
                "Professional services",
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
              If your goods are entering the UK temporarily, we ensure TA is handled correctly.
            </p>
          </div>
        </section>

        <Testimonials />

        <SiteFAQs
          sectionTitle="FAQs"
          sectionDescription="Common questions about Temporary Admission (TA)."
          buttonText="get a quote"
          buttonLink="/contact"
          faqs={classificationFaq}
        />

        <SiteCta
          title="Need help with Temporary Admission?"
          description="Contact Global Customs today for compliant Temporary Admission processing and expert support."
          buttonText="Contact us"
          buttonLink="/contact"
          backgroundImage="/images/road-service.png"
          overlayOpacity={0.4}
        />

      </Layout>
    </>
  );
}
