import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Btn from "@/components/ui/Btns/Btn";

export default function SiteFAQs({
  sectionTitle,
  sectionDescription,
  buttonText,
  buttonLink,
  faqs = [],
}) {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">

            {/* LEFT STICKY CONTENT */}
            <div className="sm:max-w-sm">
              <div className="sticky top-[150px] text-black">
                <SectionHeading
                  title={sectionTitle}
                  description={sectionDescription}
                />

                {buttonText && buttonLink && (
                  <div className="mt-5">
                    <Btn link={buttonLink} title={buttonText} />
                  </div>
                )}
              </div>
            </div>

            {/* FAQ ACCORDION */}
            <div
              id="tab-accordion"
              className="col-span-2 faq-accordion"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="accordion-slide group faq-slide bg-[#f2f2f2] text-color p-5 mb-5"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-[20px] text-blue font-semibold flex justify-between items-center gap-5 cursor-pointer">
                    <span itemProp="name">{faq.question}</span>
                    <i className="fa fa-plus"></i>
                  </h3>

                  <div
                    className="faq-app-content h-0 scale-y-0 overflow-hidden group-[.active]:scale-y-100 group-[.active]:h-auto transition-all duration-[.3s]"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div
                      className="mt-5 faq-flex"
                      itemProp="text"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
