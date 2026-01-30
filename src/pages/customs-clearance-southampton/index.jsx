import NewService from "@/components/Home/Services/NewService"
import Layout from "@/components/ui/Layout"
import Head  from "next/head"
import Servicedef from "@/components/ui/Servicedef"
import Heroservice from "@/components/ui/Heroservice"
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PageHead from "@/components/ui/PageHead"
import SounthamptonWhyChoose from "../../components/Pages/SouthamptonWhyCoose"
gsap.registerPlugin(ScrollTrigger);
export default function Services({preview}){
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
    title: "Leading Customs Clearance Services Southampton",
    description:"In search of  best custom clearance services in Southampton? Trust Global Customs Clearance Ltd for hassle-free customs clearance solutions. Call now!",
    keywords:"Custom Clearance Southampton, Southampton Customs Brokers, UK Customs Clearance Services, Global Customs Clearance, Import Export Clearance Southampton,",
  };
    return(
        <>
        <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
        <Heroservice title="Customs Clearance Southampton" desc="Navigating the complexities of customs clearance services for the United Kingdom can be a challenge, but Global Custom Clearance Ltd. is here to simplify the process. We offer comprehensive customs clearance services, including import, export, and transit, ensuring your shipments move smoothly and efficiently. Our team of experienced professionals is dedicated to providing accurate and timely customs clearance solutions that meet the highest compliance standards. Choose Global Custom Clearance Ltd. for reliable, efficient, and compliant customs clearance services." backgroundImage="/images/service-bg.jpg"/>
        <NewService/>
        <SounthamptonWhyChoose/>
        <Servicedef title="Expert Road Custom Clearance" description="Expedite your supply chain with our expert road customs clearance services. Our experienced professionals handle everything from HS code classification to meticulous documentation, ensuring smooth communication with customs authorities and compliant duty management. Enjoy faster clearance times, reduced costs, minimized risks, and a more efficient supply chain. We specialize in road clearance across various industries and boast a global network for seamless service. Contact us for a free quote and see how we can streamline your road customs clearance." image1="/images/service-road.jpg" title2="Port Badges" description2='Delays at seaport can cripple your business. Our expert sea customs clearance services ensure your ocean freight traverses borders efficiently. We navigate complex regulations with precision, handling HS code classification, comprehensive documentation, and duty & tax management. Our strong relationships with customs authorities guarantee smooth clearance and keep you informed with real-time shipment tracking. Experience faster clearance times, reduced costs, and minimized risks. We specialize in sea clearance across industries and operate a global network for seamless service. Contact us today for a free quote and unlock a smoother sea customs clearance experience.' image2="/images/service-sea.jpg" title3="Air Freight Made Easy" description3="Expedite your air cargo journey with our expert air freight clearance services. Our seasoned team ensures seamless navigation of customs complexities. We handle HS code classification for accurate duties, meticulously prepare paperwork, and leverage strong relationships with authorities for efficient clearance.  Enjoy faster release times, reduced costs, and peace of mind. We specialize in air freight across industries and boast a global network. Get a free quote and discover how we can streamline your air customs clearance." image3="/images/service-air.jpg" imageUrl="/images/service-air.jpg" />
        </Layout>
        </>
    )
}