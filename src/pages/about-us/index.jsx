
import PageHead from "@/components/ui/PageHead"
import Layout from "@/components/ui/Layout";
import AboutArea from "@/components/ui/AboutArea";
import HeroAbout from "@/components/ui/HeroAbout";
import Faq from "@/components/ui/Faq/Faq";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function About({ preview }) {
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
      title: "Global Custom Clearance",
      description:"Our focus on personalized service, competitive rates and customer satisfaction ensures that we always meet and exceed expectations.",
      keywords: "reliable customs clearance, best customs brokerage, hassle-free imports, export clearance solutions, trade compliance experts, efficient logistics services, UK customs specialists ",
    };
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout preview={preview}>
        <HeroAbout backgroundImage="/images/about-banner.jpg"/>
        <AboutArea/>
        

        {/* <Whyus/> */}
      <Faq/>
    </Layout>
    </>
  );
}