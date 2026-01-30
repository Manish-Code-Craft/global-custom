import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Slider from "@/components/ui/Carousel";
export default function Services() {    
  return (
    <section className="section">
        <Container>
            <div className="flex justify-between items-center ">
                <SectionHeading title="Our Services" />
                <Link className="icon_hover" href="#"><svg fill="none" height="34" viewBox="0 0 45 34" width="45" xmlns="http://www.w3.org/2000/svg"> <path d="M1 17H41.9632" stroke="#000" strokeLinecap="round" strokeWidth="2"></path> <path d="M29.207 1L42.925 15.6273C43.6805 16.4329 43.64 17.6983 42.8347 18.454L28.0857 32.2929" stroke="#000" strokeLinecap="round" strokeWidth="2"></path> </svg> </Link>
            </div>
            <div className="adjustable-service flex">
                <div className="service-item"> 
                    <Image alt="" src="/images/road-custom.png" width={800} height={550} priority="true" className="bg_fill"/>
                    <div className="service-item-content">
                        <h3 className="text-[30px]">Road Customs Clearance</h3>
                        <div className="service-item-text">Our experienced Immigration Lawyers in Canada guide you through the complex immigration process, ensuring a smooth transition to your new life. Trust us to handle your case with expertise and dedication.</div>
                    </div>
                </div>
                <div className="service-item"> 
                    <Image alt="Visa Refusal Lawyer in Canada" src="/images/sea-custom.png" width={800} height={550} priority="true" className="bg_fill"/>
                    <div className="service-item-content">
                        <h3  className="text-[30px]">Sea Customs Clearance</h3>     
                        <div className="service-item-text"><div className="font-bold">Facing visa refusals?</div>
                        Our Visa Refusal Lawyers specialize in challenging decisions, providing strategic solutions to overcome obstacles and maximize your chances of approval.</div>                   
                    </div>
                </div>
                <div className="service-item"> 
                    <Image alt="Citizenship Lawyer in Canada" src="/images/air-custom.png" width={800} height={550} priority="true" className="bg_fill"/>
                    <div className="service-item-content">
                        <h3  className="text-[30px]">Air Freight Customs Clearance</h3>    
                        <div className="service-item-text">Achieve your dream of Canadian citizenship with our dedicated Citizenship Lawyers. We navigate the application process, offering tailored advice and support to make your journey to citizenship seamless.</div>                    
                    </div>
                </div>
                
            </div>
        </Container>
    </section> 
  );
}
