import Layout from "@/components/ui/Layout";
import PageHead from "@/components/ui/PageHead";
import React, { useState, useEffect } from 'react';
import { 
  Ship, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Box, 
  ArrowRight, 
  Zap,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import Link from "next/link";
import WhyUsSection from "@/components/ui/New/WhyUsSection";
import PortSection from "@/components/ui/New/PortSection";
import Faq from "@/components/ui/Faq/Faq";

// --- Data ---

const services = [
  {
    title: "Customs Clearance",
    description: "Seamless clearance for imports and exports across all major UK ports.",
    icon: <FileText className="w-6 h-6" />,
    link:"/customs-clearance-uk"
  },
  {
    title: "CDS Declarations",
    description: "Full compliance with the latest Customs Declaration Service (CDS) systems.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    link:"/cds-declarations"
  },
  {
    title: "T1 Transit",
    description: "Efficient transit documentation for goods moving through the UK.",
    icon: <Globe className="w-6 h-6" />,
    link:"/t1-transit-documents"
  },
  {
    title: "HS Code Classification",
    description: "Expert classification to ensure accurate duty payments and compliance.",
    icon: <Box className="w-6 h-6" />,
    link:"/hs-code-classification"
  },
  {
    title: "Duty Consultancy",
    description: "Strategic advice to optimize duty costs and navigate trade tariffs.",
    icon: <ShieldCheck className="w-6 h-6" />,
    link:"/duty-vat-consultancy"
  },
  {
    title: "Get a Fast Quote",
    description: "Ready to move goods? Contact us now for a competitive price and immediate support.",
    icon: <Zap className="w-6 h-6" />,
    link:"/contact"
  }
];

const ports = [
  { name: "Felixstowe", code: "FXT" },
  { name: "Southampton", code: "SOU" },
  { name: "Dover", code: "DOV" },
  { name: "London Gateway", code: "LGP" }
];

const features = [
  { title: "Local Expertise", desc: "Specialists based in Kent with deep knowledge of UK logistics." },
  { title: "Fast Turnaround", desc: "Speed is our priority to keep your supply chain moving." },
  { title: "24/7 Support", desc: "Round-the-clock customs support for peace of mind." },
  { title: "Trusted Partner", desc: "Reliable partner for UK importers, exporters, and freight forwarders." }
];

const testimonials = [
  {
    name: "Daniel Osborn",
    role: "Happy Customer",
    content: "It’s great it cleared everything quickly great company",
    rating: 5
  },
  {
    name: "Andy Barber",
    role: "Happy Customer",
    content: "Excellent service from Start to Finish, we was stuck at Customs in France from having the incorrect paperwork from Italy,We phoned Global Customs,,with there knowledge and professionalism they was able to assist us with getting the correct paperwork and we was able to continue our journey 👍👍",
    rating: 5
  },
  {
    name: "Gavin Osborn",
    role: "Happy Customer",
    content: "Friendly and professional service.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Happy Customer",
    content: "Service with Excellence.",
    rating: 5
  },
  {
    name: "Tajinder Singh",
    role: "Happy Customer",
    content: "Professional and reliable.",
    rating: 5
  },
];

const faqs = [
  {
    question: "What is customs clearance?",
    answer: "Customs clearance is a process compulsory for all goods entering or leaving the EU. Customs clearance allows HM Customs &amp; Excise to account for any due charges, ensure correct documentation has been used and conformity to EU law. It also allows Customs to monitor which goods are coming into or leaving the UK."
  },
  {
    question: "‍‍Why should I use a customs agent?",
    answer: "Customs agents are there to facilitate a professional service between HM Customs &amp; Excise and importers/exporters. Our agents have significant understanding the Customs rules and regulations applicable and are therefore best suited to provide assistance."
  },
  {
    question: "Where can you complete UK customs clearance?",
    answer: "We can complete Import UK customs clearance for your shipments at the following Airports and Sea ports.<br><b>  Airports: </b>London Gatwick Airport, London Heathrow Airport, London Stansted Airport, London City Airport, London Luton Airport, Birmingham, East Midlands Airport, Manchester, Glasgow, Leeds and Edinburgh.<br><b>Sea Ports:</b> <b>Any UK port</b> including Felixstowe, London Gateway, Southampton, Grangemouth, Tilbury, Thames port, Dover and Greenock."
  },
  {
    question: "‍How do we customs clear cargo in other ports?",
    answer: "We are based in Southeast England. Thanks to changes in technology, remote access to other port community systems around the coasts of the UK make it possible to access all systems from one location."
  },
  {
    question: "How long does customs clearance take?",
    answer: "The customs clearance process can vary from shipment to shipment and is dependent on what goods are entering the country, once goods have entered the UK port. Certain products may need additional documentation checks or a physical examination to ensure that declarations are correct."
  },
  {
    question: "‍What supporting customs clearance documentation do I require?",
    answer: "Basic documentation would be:<br><b>1.</b> Shipping document ( Bill of Lading – original or telex)<br><b>2.</b> Supplier’s commercial invoice<br><b>3.</b> Packing list<br>Other documentation required for specific goods would be:<br><b>1.</b> Certificate of Origin<br><b>2.</b> Preference Certificates<br><b>3.</b> Health certificates ( for foodstuffs etc )<br><b>4.</b> COA<br><b>5.</b> Organic certificate<br><b>Note:</b> Importers should check before they ship if any special documentation is required."
  },
  {
    question: "Who decides how much import duties and taxes I have to pay?",
    answer: "UK VAT is currently 20%. Duty is dependent on the type of product being imported. All duty rates are set out by Brussels for the EU, and are payable upon free circulation within the EU.<br>All goods are classified into commodity codes. The duty and VAT amount vary for each commodity. Importers are responsible for the classification of the codes. However, if you need advice you can call 03000588454."
  },
  {
    question: "‍How to calculate customs clearance charges?",
    answer: "There are a number of methods that will help you calculate your customs clearance charges. You might be looking to calculate the transactional value or price payable ‍The duration of customs clearance can vary widely depending on several factors, including the nature of the goods, the efficiency of the customs authority, and the completeness and accuracy of the provided documentation. Typically, it can range from a few hours to several days.<br>Utilising experienced customs brokers and ensuring all documents are correctly filled out can significantly expedite this process."
  },
  {
    question: "‍How can I pay for import duties and taxes?",
    answer: "Your customs clearance agent will advise you how much duty and VAT is required to be paid. You can pay customs directly or you can pay us first and we will pay customs on your behalf."
  },
  {
    question: "‍Where can I find more information on customs clearance?",
    answer: "Further information on customs clearance, their rules and regulations, service standards and details of your local Customs clearance office can be found on their website: <b><a href='https://www.gov.uk/import-goods-into-uk' style='color:#3daee0'; target='_blank' rel='noopener noreferrer'>www.gov.uk/starting-to-import‍</a></b>"
  },
  {
    question: "‍What happens after customs clearance?",
    answer: "We provide you with copies of all documentation completed on your behalf, which have been lodged with HMRC. All documents will be archived for at least 4 years."
  },
  {
    question: "‍I am importing for the first time – How do I know the products I will import are allowed into the EU?",
    answer: "Some commodities, firearms and explosives for example, cannot be imported into the EU unless by an authorised person. If you have any doubts about whether your goods are approved in the EU, feel free to contact us prior to shipment. Details of restricted goods can be found on the UK Customs website:<b><a href='https://www.gov.uk/guidance/import-controls' style='color:#3daee0'; target='_blank' rel='noopener noreferrer'> www.gov.uk/guidance/import-controls.</a></b> Alternatively, please check with a member of our experienced team who would be happy to assist."
  },
  {
    question: "‍I am moving my personal effects/ moving abroad, what do I do?",
    answer: "In order to attain VAT and duty relief for personal effects upon import, specific conditions must be met. If you have recently returned to the UK, lived overseas for a minimum of one year, and have owned the goods for 6 months, no VAT and duty are required. Goods can still be imported if they do not fall under these criteria but duty and VAT may be applicable. If you are importing a car, the relief of VAT and duty will depend on the purpose of the vehicle."
  },
  {
    question: "‍Can I import foodstuffs?",
    answer: "The majority of foodstuffs are okay to import when accompanied by relevant official documentation. Certain food items would need additional documentation to be lodged with port health. Importers are required to ensure all documents are in place before goods are imported."
  }
];
const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/60 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80"        >
          <source src="https://www.globalcust.co.uk/videos/banner-main.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 xl:max-w-[1400px] 2xl:max-w-[1500px] lg:flex items-center mx-auto px-6 w-full pt-16">
        <div className="md:w-3/4 lg:w-2/3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#049fe1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#049fe1]"></span>
            </span>
            <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
              Specialists Based in Kent
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-sm">
            Fast, Reliable UK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049fe1] via-sky-400 to-[#049fe1] bg-[length:200%_auto] animate-gradient">
              Customs Clearance
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-normal leading-relaxed">
            24/7 customs support for importers, exporters, freight forwarders, and e-commerce businesses. Speed and compliance guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/contact" className="group relative px-8 py-4 bg-[#049fe1] text-white rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(4,159,225,0.5)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_-15px_rgba(4,159,225,0.6)] hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Contact Us Today <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
            
            {/* <Link href="tel:+7653483432" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            +44 1634 565540
            </Link> */}
          </div>
        </div>

        <div className='button-banner flex flex-col  items-end text-white	 lg:w-[40%]'>
                <p className="text-[16px] text-banner">Call the Team Now on: <Link href="tel:+441634565540" className='text-[24px] font-bold banner-email'>+44 1634 565540</Link></p>
                <p className="text-[16px] text-banner ">Email us at: <Link href="mailto:imports@globalcust.co.uk" className='text-[24px] font-bold banner-email'>imports@globalcust.co.uk</Link></p>
                <div className=' grid lg:block grid-cols-2 gap-2'>
                <Link className="button mt-6" href='/document/global customs direct rep.docx' download="global customs direct rep.docx" target='_blank'>
                      <span className="text">Open a New Account</span>
                      <div className="overlay">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    <div className=' lg:hidden '>
                    <Link className="button mt-6" href='/document/gcc-document.xlsx' download="gcc-document.xlsx" target='_blank'>
                      <span className="text">Download Instructions</span>
                      <div className="overlay">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    </div>
                  </div>
                <p className='max-w-[250px] text-right text-[14px]'>Please request forms to be emailed to imports@globalcust.co.uk</p>
                <div className='hidden lg:flex '>
                <Link className="button mt-6" href='/document/gcc-document.xlsx' download="gcc-document.xlsx" target='_blank'>
                      <span className="text">Download Instructions</span>
                      <div className="overlay">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    </div>
              </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 ">
        <span className="text-[10px] uppercase tracking-widest text-white/70">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description,link, index }) => (
  <Link href={link} className="group relative p-8 bg-white rounded-3xl border border-slate-100 transition-all duration-500 hover:border-[#049fe1]/20 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1">
    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
      <div className="text-[#049fe1] transform rotate-12 scale-150">{icon}</div>
    </div>
    
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#049fe1] mb-6 group-hover:bg-[#049fe1] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
      {icon}
    </div>
    
    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#049fe1] transition-colors">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm font-medium">{description}</p>
    
    <div className="mt-6 flex items-center gap-2 text-[#049fe1] font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
      {index === 5 ? "Get started" : "Learn more"} <ArrowRight size={14} />
    </div>
  </Link>
);

const ServicesSection = () => {
  return (
    <section className="py-32 bg-slate-50/50 relative">
      <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 gap-6">
          <div className="">
            <span className="text-[#049fe1] font-bold tracking-widest text-xs uppercase bg-[#049fe1]/10 px-3 py-1 rounded-full">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 mb-4 tracking-tight">Comprehensive Customs Solutions</h2>
          </div>
          <p className="text-slate-500 max-w-[1200px] mx-auto text-lg leading-relaxed">
          Over the years, we’ve learned that best customs clearance begins and ends with experienced and friendly professionals, which explains our rigorous hiring process. We believe that our team is the best in the business, and have complete and total confidence in every person providing Customs clearance services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortCard = ({ name, code }) => (
  <div className="relative group overflow-hidden rounded-2xl bg-slate-50 p-1">
    <div className="relative h-full bg-white rounded-xl p-6 flex items-center justify-between transition-all duration-300 group-hover:shadow-lg border border-transparent group-hover:border-slate-100">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#049fe1] group-hover:text-white transition-all duration-300">
          <Ship size={20} />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 text-lg group-hover:text-[#049fe1] transition-colors">{name}</h4>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">UK Gateway</span>
        </div>
      </div>
      <div className="text-3xl font-black text-slate-100 group-hover:text-slate-900/5 transition-colors duration-300 font-mono tracking-tighter">
        {code}
      </div>
    </div>
  </div>
);

const PortsSection = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Major Ports Covered</h2>
          <p className="text-slate-500 text-lg">We operate at all major UK gateways, providing consistent and reliable clearance wherever your cargo arrives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ports.map((port, idx) => (
            <PortCard key={idx} {...port} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#049fe1]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#049fe1]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#049fe1] font-bold tracking-widest text-sm uppercase">Client Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Trusted by Industry Leaders</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Slider Container */}
          <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
             {testimonials.map((testimonial, index) => {
               const isActive = index === currentIndex;
               return (
                 <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                      ${isActive ? 'opacity-100 translate-x-0 z-20' : 'opacity-0 translate-x-12 z-0'}
                    `}
                 >
                   <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center relative">
                      {/* Quote Icon */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#049fe1] rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-slate-50">
                        <Quote size={20} fill="currentColor" />
                      </div>

                      <div className="flex justify-center gap-1 mb-6 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                        ))}
                      </div>

                      <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed italic mb-8">
                        "{testimonial.content}"
                      </p>

                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{testimonial.name}</h4>
                        <p className="text-slate-500 text-sm">{testimonial.role}</p>
                      </div>
                   </div>
                 </div>
               );
             })}
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 p-3 rounded-full bg-white text-slate-400 hover:text-[#049fe1] shadow-lg border border-slate-100 hover:scale-110 transition-all z-30"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 p-3 rounded-full bg-white text-slate-400 hover:text-[#049fe1] shadow-lg border border-slate-100 hover:scale-110 transition-all z-30"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#049fe1] w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-[#049fe1] relative overflow-hidden isolate">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-sky-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>

      <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-tight">
            Why Choose <br /> Global Customs?
          </h2>
          <div className="grid gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group flex gap-5">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-[#049fe1] transition-all duration-300">
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sky-50 leading-relaxed font-medium opacity-90">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pl-10">
          <div className="relative bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl shadow-sky-900/20">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#049fe1]/5 rounded-3xl flex items-center justify-center text-[#049fe1] mb-8 ring-8 ring-[#049fe1]/5">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Certified Excellence</h3>
              <p className="text-slate-500 mb-10 leading-relaxed">
                We maintain the highest standards of compliance, security, and efficiency in the industry.
              </p>
              
              <div className="flex gap-8 items-center justify-center w-full">
                <div className="group flex flex-col items-center gap-3">
                  <div className="h-20 w-32 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:border-[#049fe1] group-hover:shadow-md transition-all duration-300">
                     <span className="font-black text-slate-300 text-3xl group-hover:text-[#049fe1] transition-colors">AEO</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Standard</span>
                </div>
                <div className="w-px h-16 bg-slate-100"></div>
                <div className="group flex flex-col items-center gap-3">
                  <div className="h-20 w-32 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:border-[#049fe1] group-hover:shadow-md transition-all duration-300">
                     <span className="font-black text-slate-300 text-3xl group-hover:text-[#049fe1] transition-colors">ISO</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#049fe1] font-bold tracking-widest text-xs uppercase bg-[#049fe1]/10 px-3 py-1 rounded-full">
            FAQ
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 mb-6 tracking-tight">
            Got questions? <br /> We've got answers.
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed max-w-3xl mx-auto">
            Navigating customs can be complex. Here are answers to some of the most
            common questions our clients ask us to help you understand the process better.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden
                  ${isOpen
                    ? "border-[#049fe1] bg-white shadow-md"
                    : "border-slate-200 bg-white hover:border-[#049fe1]/50"
                  }`}
              >
                <button
                  className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span
                    className={`font-bold text-lg pr-4 transition-colors
                      ${isOpen
                        ? "text-[#049fe1]"
                        : "text-slate-800 group-hover:text-[#049fe1]"
                      }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0
                      ${isOpen
                        ? "bg-[#049fe1] text-white"
                        : "bg-slate-50 text-slate-400 group-hover:bg-[#049fe1]/10 group-hover:text-[#049fe1]"
                      }`}
                  >
                    <ChevronDown
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={18}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out
                    ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="pb-6 px-6 pt-0 text-slate-500 leading-relaxed font-medium"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


const CTASection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#049fe1]/10 border border-[#049fe1]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#049fe1] animate-pulse"></span>
            <span className="text-[#049fe1] text-xs font-bold uppercase tracking-wider">Ready to Ship?</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Let's Clear Your Customs <br/> <span className="text-[#049fe1]">Hassle-Free</span>
        </h2>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience the fastest, most reliable customs clearance service in the UK. Get a quote in minutes, not days.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link href="/contact" className="px-10 py-5 bg-[#049fe1] text-white rounded-full font-bold text-xl shadow-[0_10px_30px_-10px_rgba(4,159,225,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(4,159,225,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
            Get Your Quote <ArrowRight size={24} />
          </Link>
          <Link href="tel:+441634565540" className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-700 rounded-full font-bold text-xl hover:border-[#049fe1] hover:text-[#049fe1] transition-all duration-300">
            Talk to an Expert
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
           <CheckCircle2 size={16} className="text-green-500" /> No hidden fees
           <span className="w-1 h-1 rounded-full bg-slate-300"></span>
           <CheckCircle2 size={16} className="text-green-500" /> Fast response time
        </p>
      </div>
    </section>
  );
};
export default function Home() {

   const PageMeta = {
    title: "Global Customs Clearance Ltd | Customs Clearance",
    description:"Global Customs Clearance, the leading Customs Brokers offering 24 hour services to ensure that your clearances are not delayed.",
    keywords: "Global Customs Clearance, Customs Brokers, Customs Clearance Services,  Fast Customs Clearance, International Customs Brokerage, Freight Forwarding and Customs Clearance,",
  };
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
      <HeroSection />
      <ServicesSection />     
      <PortSection/>
      <TestimonialsSection />      
      <WhyUsSection/>
      <FAQSection />     
      <CTASection />
 </Layout>
</>
  );
}