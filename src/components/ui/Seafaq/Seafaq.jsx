import Container from '@/components/ui/Container';
import SectionHeading from "@/components/ui/SectionHeading";
import Btn from "@/components/ui/Btns/Btn";
import FaqItem from '@/components/ui/Faq/FaqItem';

const Seafaq = () => {
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
                      question="What is sea freight custom clearance?"
                      answer="Sea freight custom clearance involves the process of inspecting, approving, and clearing goods being imported or exported via sea routes to ensure compliance with local and international regulations." />
                      <FaqItem
                      question="‍‍How long does sea freight custom clearance take?"
                      answer="The duration of sea freight custom clearance can vary based on the port, type of goods, and completeness of the documentation. Typically, it ranges from a few days to a week."/>
                      <FaqItem
                      question="What documents are required for sea freight custom clearance?"
                      answer="Essential documents for sea freight custom clearance include the bill of lading, commercial invoice, packing list, certificate of origin, and any relevant import/export permits." />
                      <FaqItem
                      question="‍How can I ensure a smooth sea freight custom clearance process?"
                      answer="To ensure a smooth sea freight custom clearance process, ensure all documentation is complete and accurate, declare the goods correctly, and comply with all regulatory requirements."/>
                      <FaqItem
                      question="What are the common challenges in sea freight custom clearance?"
                      answer="Common challenges include incomplete documentation, misdeclaration of goods, customs inspections, and delays due to non-compliance with regulations." />
                      <FaqItem
                      question="‍What are the duties and taxes involved in sea freight custom clearance?"
                      answer="Duties and taxes for sea freight custom clearance depend on the type of goods, their value, and the destination country's tariff regulations. These may include import duties, VAT, and excise taxes."/>
                      <FaqItem
                      question="Can Global Custom Clearance Company handle specialized cargo?"
                      answer="Yes, Global Custom Clearance Company can handle specialized cargo such as perishable goods, hazardous materials, and oversized shipments, ensuring compliance with all relevant regulations." />
                      <FaqItem
                      question="How do I track my sea freight shipment during the custom clearance process?"
                      answer="You can track your sea freight shipment through the tracking services provided by Global Custom Clearance Company, which offers real-time updates on the status of your cargo." />
                      <FaqItem
                      question="What happens if my sea freight shipment is held up in customs?"
                      answer="If your sea freight shipment is held up in customs, Global Custom Clearance Company will work diligently to resolve any issues, provide additional documentation if needed, and ensure the prompt release of your goods." />  
                    </div>
                </div>
            </div>
        </Container>
    </section>      
    </div>
  )
}

export default Seafaq
