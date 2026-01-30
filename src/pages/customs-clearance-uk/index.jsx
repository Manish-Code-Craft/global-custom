import NewService from "@/components/Home/Services/NewService"
import Layout from "@/components/ui/Layout"
import Head from "next/head"
import Servicedef from "@/components/ui/Servicedef"
import Heroservice from "@/components/ui/Heroservice"
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PageHead from "@/components/ui/PageHead"
import Container from "@/components/ui/Container"
import Link from "next/link"
import BannerForm from "@/components/Form/BannerForm"
gsap.registerPlugin(ScrollTrigger);
export default function Services({ preview }) {
  const container = useRef();
  useGSAP(() => {
    let scrollTriggers = gsap.utils.toArray(".scroll-trigger");
    let scrollItem = gsap.utils.toArray(".scroll-item");
    scrollTriggers.forEach((scrollTrigger, index) => {
      ScrollTrigger.create({
        trigger: scrollTrigger,
        start: 'top bottom',
        end: 'bottom top',
        toggleClass: { targets: scrollItem[index], className: "c-active" }
      });
    });

  });

  const PageMeta = {
    title: "Customs Clearance | Customs Support UK | Global Cust",
    description: "Global Cust provides expert solutions for road, sea, and flight logistics. Reliable and efficient services to meet all your transport needs.",
  };
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout preview={preview}>
        <div className="relative z-30 text-white bg-black ">
          <div className="banner-image absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: `url(/images/service-bg.jpg)` }}></div>
          <div className='lg:h-[100vh] flex items-center relative z-20 w-full'>
            <Container>
              <div className="flex items-center justify-between pt-24 lg:pt-0">

                <div className=" relative z-[2]">
                  <div className="grid lg:grid-cols-12 innerBanner-grid">
                    <div className="lg:col-span-8">

                      <h1 className="tracking-wider law-hero__content-title font-bold" data-aos="fade-up" data-aos-duration="2000">Customs Clearance Services UK</h1>
                      <div className='button-banner flex flex-col'>
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
                    <div className="lg:col-span-4">
                      <div className="p-5 bg-white rounded">
                        <h3 className="text-[#000] font-[600] text-lg mb-5">Get a Free Estimate</h3>
                        <BannerForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <NewService />
        <div className="rajeev pb-[80px]">
          <div className="scroll-trigger max-w-[1350px] mx-auto px-[15px] text-center text-lg">
            <p>Navigating the complexities of customs clearance services for the United Kingdom can be a challenge, but Global Custom Clearance Ltd. is here to simplify the process. We offer comprehensive customs clearance services, including import, export, and transit, ensuring your shipments move smoothly and efficiently. Our team of experienced professionals is dedicated to providing accurate and timely customs clearance solutions that meet the highest compliance standards. Choose Global Custom Clearance Ltd. for reliable, efficient, and compliant customs clearance services.</p>
          </div>
        </div>
        <Servicedef title="Expert Road Custom Clearance" description="Expedite your supply chain with our expert road customs clearance services. Our experienced professionals handle everything from HS code classification to meticulous documentation, ensuring smooth communication with customs authorities and compliant duty management. Enjoy faster clearance times, reduced costs, minimized risks, and a more efficient supply chain. We specialize in road clearance across various industries and boast a global network for seamless service. Contact us for a free quote and see how we can streamline your road customs clearance." image1="/images/service-road.jpg" title2="Port Badges" description2='Delays at seaport can cripple your business. Our expert sea customs clearance services ensure your ocean freight traverses borders efficiently. We navigate complex regulations with precision, handling HS code classification, comprehensive documentation, and duty & tax management. Our strong relationships with customs authorities guarantee smooth clearance and keep you informed with real-time shipment tracking. Experience faster clearance times, reduced costs, and minimized risks. We specialize in sea clearance across industries and operate a global network for seamless service. Contact us today for a free quote and unlock a smoother sea customs clearance experience.' image2="/images/service-sea.jpg" title3="Air Freight Made Easy" description3="Expedite your air cargo journey with our expert air freight clearance services. Our seasoned team ensures seamless navigation of customs complexities. We handle HS code classification for accurate duties, meticulously prepare paperwork, and leverage strong relationships with authorities for efficient clearance.  Enjoy faster release times, reduced costs, and peace of mind. We specialize in air freight across industries and boast a global network. Get a free quote and discover how we can streamline your air customs clearance." image3="/images/service-air.jpg" imageUrl="/images/service-air.jpg" />
      </Layout>
    </>
  )
}