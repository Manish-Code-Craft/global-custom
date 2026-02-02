import Container from "@/components/ui/Container";
import Image from "next/image";

export default function ServiceHero({
  title,
  description = [],
  image1,
  image2,
  image3,
}) {
  return (
    <section className="section moredef">
      <Container>
        <div className="lg:grid lg:grid-cols-2 gap-[80px]">
          {/* Content */}
          <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
            <h2 className="mt-8 font-bold text-5xl lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
              {title}
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-quote md:text-lead-lg text-gray-600 mb-[50px]">
              {description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <Image
              className="h-full w-full object-cover mx-auto mb-[30px] lg:mb-0 lg:flex-1 max-w-[80%]"
              src={image1}
              alt="Service overview"
              width={500}
              height={500}
            />

            <Image
              src={image2}
              width={289}
              height={216}
              className="moredef-img absolute shadow-3 rounded-2xl top-14 left-[-80px] animate-float w-1/3"
              alt="Service detail"
            />

            <Image
              src={image3}
              width={289}
              height={316}
              className="moredef-image absolute shadow-3 rounded-2xl right-[-13px] animate-float -bottom-12 w-1/3"
              alt="Service highlight"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
