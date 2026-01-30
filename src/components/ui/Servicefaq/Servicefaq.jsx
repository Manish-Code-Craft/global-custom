import Container from '@/components/ui/Container';
import SectionHeading from "@/components/ui/SectionHeading";
import Btn from "@/components/ui/Btns/Btn";
import FaqItem from '@/components/ui/Faq/FaqItem';

const Servicefaq = () => {
  return (
    <div>
        <section className="py-32">
        <Container>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                    <div className='sm:max-w-sm'>
                        <div className=" sticky top-[150px] text-black">
                            <SectionHeading
                            title="FAQs"
                            description="Looking for a complete, comprehensive customs clearance service?"/>
                            <div className='mt-5'>
                                <Btn link="/contact" title="get a quote" />
                            </div>
                        </div>
                    </div>
                    <div id="tab-accordion" className="col-span-2 faq-accordion" itemScope="" itemType="https://schema.org/FAQPage">
                      <FaqItem
                      question="What is Road Custom Clearance?"
                      answer="Road custom clearance involves the process of ensuring that goods transported by road across borders comply with all relevant customs regulations. This includes documentation, inspections, and payment of duties and taxes." />
                      <FaqItem
                      question="‍‍What documents are required for Road Custom Clearance?"
                      answer="Key documents for road custom clearance include the commercial invoice, packing list, bill of lading, customs declaration form, and any applicable licenses or certificates. Specific requirements may vary depending on the destination country."/>
                      <FaqItem
                      question="How long does Road Custom Clearance take?"
                      answer="The duration of road custom clearance can vary depending on the complexity of the shipment, the accuracy of the provided documentation, and the efficiency of the customs authority. Typically, it can take from a few hours to several days." />
                      <FaqItem
                      question="‍What are the common challenges in Road Custom Clearance?"
                      answer="Common challenges include incomplete or incorrect documentation, delays due to inspections, compliance with varying regulations, and unexpected duties or taxes. Our team helps mitigate these issues with expert guidance and support."/>
                      <FaqItem
                      question="How can Global Custom Clearance Company assist with Road Custom Clearance?"
                      answer="Global Custom Clearance Company provides comprehensive road custom clearance services, including document preparation, compliance checks, liaison with customs authorities, and real-time tracking to ensure smooth and efficient clearance." />
                      <FaqItem
                      question="‍Are there any additional fees for Road Custom Clearance?"
                      answer="Additional fees may include customs duties, taxes, inspection fees, and any administrative charges. Our team will provide a detailed breakdown of all potential costs upfront to ensure transparency and avoid surprises."/>
                      <FaqItem
                      question="Can you handle urgent Road Custom Clearance requests ?"
                      answer="Yes, we specialize in handling urgent road custom clearance requests. Our team is available 24/7 to expedite the process, ensuring that your goods reach their destination without unnecessary delays." />
                      <FaqItem
                      question="What is GVMS and how does it relate to Road Custom Clearance?"
                      answer="GVMS (Goods Vehicle Movement Service) is a system used to facilitate the movement of goods into and out of the UK. It enables pre-lodgement of customs declarations, which speeds up the clearance process for road freight. Our team can assist you in navigating GVMS to ensure a seamless customs experience." />
                      <FaqItem
                      question="What are the benefits of using Global Custom Clearance Company for Road Custom Clearance?"
                      answer="By choosing Global Custom Clearance Company, you benefit from our expertise in customs regulations, comprehensive service coverage, timely clearance, reduced risk of delays, and tailored solutions to meet your specific needs. Our dedicated team ensures your road freight crosses borders smoothly and efficiently." />
                      
                    </div>
                </div>
            </div>
        </Container>
    </section>      
    </div>
  )
}

export default Servicefaq
