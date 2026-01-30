import Container from '@/components/ui/Container';
import SectionHeading from "@/components/ui/SectionHeading";
import Btn from "@/components/ui/Btns/Btn";
import FaqItem from '@/components/ui/Faq/FaqItem';

const Airfaq = () => {
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
                      question="What is air freight custom clearance?"
                      answer="Air freight custom clearance involves the process of preparing and submitting documentation required to facilitate imports and exports into a country, ensuring that all goods transported by air comply with the customs regulations." />
                      <FaqItem
                      question="‍‍How long does air freight custom clearance take?"
                      answer="The duration for air freight custom clearance varies depending on several factors, including the country of origin, the type of goods, and the completeness of the documentation. Typically, it can take anywhere from a few hours to a few days."/>
                      <FaqItem
                      question="What documents are required for air freight custom clearance?"
                      answer="Key documents for air freight custom clearance include the commercial invoice, packing list, air waybill, import/export license, and any relevant certificates or permits." />
                      <FaqItem
                      question="‍What are the costs associated with air freight custom clearance?"
                      answer="Costs for air freight custom clearance can include duties and taxes, customs brokerage fees, and handling charges. These costs vary based on the type and value of goods, as well as the destination country’s regulations."/>
                      <FaqItem
                      question="How can I track the status of my air freight custom clearance?"
                      answer="You can track the status of your air freight custom clearance through the Global Custom Clearance Company’s online tracking system, providing real-time updates on your shipment’s progress." />
                      <FaqItem
                      question="‍What are the common challenges in air freight custom clearance?"
                      answer="Common challenges in air freight custom clearance include incomplete or inaccurate documentation, unexpected customs duties, and delays due to security checks or regulatory compliance issues."/>
                      <FaqItem
                      question="How can I expedite my air freight custom clearance process?"
                      answer="To expedite your air freight custom clearance, ensure all documentation is complete and accurate, utilize a trusted customs broker, and opt for pre-clearance services if available." />
                      <FaqItem
                      question="What is the role of a customs broker in air freight clearance?"
                      answer="A customs broker facilitates the air freight clearance process by preparing and submitting documentation, ensuring compliance with regulations, and representing the importer/exporter during customs inspections." />
                      <FaqItem
                      question="Can I clear my air freight shipment myself?"
                      answer="While it is possible to clear your air freight shipment yourself, it is often recommended to use the services of a professional customs broker to navigate complex regulations and ensure a smooth process." />
                      
                    </div>
                </div>
            </div>
        </Container>
    </section>      
    </div>
  )
}

export default Airfaq
