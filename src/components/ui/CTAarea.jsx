

import Btn from "@/components/ui/Btns/Btn";
import SectionHeading from "@/components/ui/SectionHeading";
export default function CtaArea( {
    link,
    title
} ) {
    return (
    <>
        <div className="section law-cta-area text-center pt-120 pb-120">
            <div className="container max-w-[800px] m-auto">
            <SectionHeading
                minititle="Contact Us To Better Understand Your Case"
                title="NEED LEGAL ADVICE?"
                description="Contact us to unravel the complexities of your case. Our expert team is ready to provide tailored legal guidance, ensuring you grasp the nuances of your situation. Trust us to illuminate your path forward with clarity and confidence."
                />           
            <div className="mt-5 law-cta-contact-wrapper">
                <div className="text-[20px]  font-bold">Get Free Legal Consultant:</div>
                <div className="my-5"><a href="tel:+17787983707" className="text-[40px] font-bold text-primary">+1-778-798-3707</a></div>
                <Btn link="/contact" title="get a quote" btnclass="" />
            </div>
            </div>
        </div>
            
        </>
    );
};