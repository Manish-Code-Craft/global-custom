import Container from '@/components/ui/Container';
import SectionHeading from "@/components/ui/SectionHeading";
import Btn from "@/components/ui/Btns/Btn";
import FaqItem from '@/components/ui/Faq/FaqItem';
import Head from 'next/head';
import SiteButton from '../Btns/SiteButton';


export default function Faq(){
    const faqData = [
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
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => {
          return {
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          };
        })
      };
    return(
        <>
        <Head>
        <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
        </Head>
            <section className="bg-black py-32">
        <Container>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                    <div className='sm:max-w-sm'>
                        <div className=" sticky top-[150px] text-white">
                            <SectionHeading
                            title="FAQs"
                            description="Looking for a complete, comprehensive customs clearance service?"/>
                            <div className='mt-5'>
                                <SiteButton href="/contact" label="Get a Quote"/> 
                                {/* <Btn link="/contact" title="get a quote" /> */}
                            </div>
                        </div>
                    </div>
                    <div id="tab-accordion" className="col-span-2 faq-accordion" itemScope="" itemType="https://schema.org/FAQPage">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index} // Don't forget the key!
                            question={item.question}
                            answer={item.answer}
                        />
                        ))}
                      {/* <FaqItem
                      question="What is customs clearance?"
                      answer="Customs clearance is a process compulsory for all goods entering or leaving the EU.
                                Customs clearance allows HM Customs &amp; Excise to account for any due charges,
                                ensure correct documentation has been used and conformity to EU law. It also
                                allows Customs to monitor which goods are coming into or leaving the UK." />
                      <FaqItem
                      question="‍‍Why should I use a customs agent?"
                      answer="Customs agents are there to facilitate a professional service between HM Customs
                                &amp; Excise and importers/exporters. Our agents have significant understanding the
                                Customs rules and regulations applicable and are therefore best suited to provide
                                assistance."/>
                      <FaqItem
                      question="Where can you complete UK customs clearance?"
                      answer="We can complete Import UK customs clearance for your shipments at the following
                                Airports and Sea ports.
                                <br>
                               <b>  Airports: </b>London Gatwick Airport, London Heathrow Airport, London Stansted
                                Airport, London City Airport, London Luton Airport, Birmingham, East Midlands
                                Airport, Manchester, Glasgow, Leeds and Edinburgh.
                                <br>
                                <b>Sea Ports:</b> <b>Any UK port</b> including Felixstowe, London Gateway, Southampton,
                                Grangemouth, Tilbury, Thames port, Dover and Greenock." />
                      <FaqItem
                      question="‍How do we customs clear cargo in other ports?"
                      answer="We are based in Southeast England. Thanks to changes in technology, remote
                                access to other port community systems around the coasts of the UK make it
                                possible to access all systems from one location."/>
                      <FaqItem
                      question="How long does customs clearance take?"
                      answer="The customs clearance process can vary from shipment to shipment and is
                                dependent on what goods are entering the country, once goods have entered the UK
                                port. Certain products may need additional documentation checks or a physical
                                examination to ensure that declarations are correct." />
                      <FaqItem
                      question="‍What supporting customs clearance documentation do I require?"
                      answer="Basic documentation would be:<br>
                                <b>1.</b> Shipping document ( Bill of Lading – original or telex)<br>
                                <b>2.</b> Supplier’s commercial invoice<br>
                                <b>3.</b> Packing list<br>
                                Other documentation required for specific goods would be:<br>
                                <b>1.</b> Certificate of Origin<br>
                                <b>2.</b> Preference Certificates<br>
                                <b>3.</b> Health certificates ( for foodstuffs etc )<br>
                                <b>4.</b> COA<br>
                                <b>5.</b> Organic certificate<br>
                                <b>Note:</b> Importers should check before they ship if any special documentation is
                                required."/>
                      <FaqItem
                      question="Who decides how much import duties and taxes I have to pay?"
                      answer="UK VAT is currently 20%. Duty is dependent on the type of product being imported.
                                All duty rates are set out by Brussels for the EU, and are payable upon free circulation
                                within the EU.<br>
                                All goods are classified into commodity codes. The duty and VAT amount vary for
                                each commodity. Importers are responsible for the classification of the codes.
                                However, if you need advice you can call 03000588454." />
                      <FaqItem
                      question="‍How to calculate customs clearance charges?"
                      answer="There are a number of methods that will help you calculate your customs clearance
                                charges. You might be looking to calculate the transactional value or price payable
                                ‍The duration of customs clearance can vary widely depending on several
                                factors, including the nature of the goods, the efficiency of the customs
                                authority, and the completeness and accuracy of the provided
                                documentation. Typically, it can range from a few hours to several days.<br>
                                Utilising experienced customs brokers and ensuring all documents are
                                correctly filled out can significantly expedite this process."/>
                      <FaqItem
                      question="‍How can I pay for import duties and taxes?"
                      answer="Your customs clearance agent will advise you how much duty and VAT is required to
                                be paid. You can pay customs directly or you can pay us first and we will pay
                                customs on your behalf."/>
                      <FaqItem
                      question="‍Where can I find more information on customs clearance?"
                      answer="Further information on customs clearance, their rules and regulations, service
                                standards and details of your local Customs clearance office can be found on their
                                website: <b><a href='https://www.gov.uk/import-goods-into-uk' style='color:#3daee0'; target='_blank' rel='noopener noreferrer'>www.gov.uk/starting-to-import‍</a></b> "/>
                      <FaqItem
                      question="‍What happens after customs clearance?"
                      answer="We provide you with copies of all documentation completed on your behalf, which
                                have been lodged with HMRC. All documents will be archived for at least 4 years."/>
                      <FaqItem
                      question="‍I am importing for the first time – How do I know the products I will import are allowed into the EU?"
                      answer="Some commodities, firearms and explosives for example, cannot be imported into
                                the EU unless by an authorised person. If you have any doubts about whether your
                                goods are approved in the EU, feel free to contact us prior to shipment.
                                Details of restricted goods can be found on the UK Customs
                                website:<b><a href='https://www.gov.uk/guidance/import-controls' style='color:#3daee0'; target='_blank' rel='noopener noreferrer'> www.gov.uk/guidance/import-controls.</a></b>  Alternatively, please check with a
                                member of our experienced team who would be happy to assist."/>
                     <FaqItem
                      question="‍I am moving my personal effects/ moving abroad, what do I do?"
                      answer="In order to attain VAT and duty relief for personal effects upon import, specific
                                conditions must be met. If you have recently returned to the UK, lived overseas for a
                                minimum of one year, and have owned the goods for 6 months, no VAT and duty are
                                required. Goods can still be imported if they do not fall under these criteria but duty
                                and VAT may be applicable.
                                If you are importing a car, the relief of VAT and duty will depend on the purpose of
                                the vehicle."/>
                      <FaqItem
                      question="‍Can I import foodstuffs?"
                      answer="The majority of foodstuffs are okay to import when accompanied by relevant official
                                documentation. Certain food items would need additional documentation to be
                                lodged with port health. Importers are required to ensure all documents are in place
                                before goods are imported."/> */}
                    </div>
                </div>
            </div>
        </Container>
    </section>            
        </>
    )
}