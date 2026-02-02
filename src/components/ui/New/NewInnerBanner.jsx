import Container from "@/components/ui/Container";
import Link from "next/link";

export default function NewInnerBanner({
  title,
  bannerDescription = [],
  backgroundImage,
}) {
  return (
    <div className="relative z-30 text-white banner-section bg-black">
      {/* Background Image */}
      <div
        className="banner-image absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Content */}
      <div className="banner-text relative z-20 w-full">
        <Container>
          <div className="law-hero-area flex items-center justify-between hero-about">
            <div className="law-hero-info max-w-[650px] xl:max-w-[1100px]">
              <div className="law-hero__content">
                {/* Title */}
                <h1
                  className="tracking-wider law-hero__content-title mb-6 mt-[85px] font-bold"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {title}
                </h1>

                {/* Banner Description (Array of Paragraphs) */}
                <div className="space-y-4 text-[16px]">
                  {bannerDescription.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex justify-center flex-wrap pt-8 gap-4">
                  <Link legacyBehavior href="tel:+441634565540">
                    <a className="banner-btn bg-[#3daee0] py-[15px] px-[50px] uppercase font-semibold inline-flex justify-center gap-2 rounded-md hover:bg-white hover:text-black transition-all duration-500">
                      +44 1634 565540
                    </a>
                  </Link>

                  <Link legacyBehavior href="/contact">
                    <a className="banner-btn bg-white text-[#3daee0] py-[15px] px-[50px] uppercase font-semibold inline-flex justify-center gap-2 rounded-md hover:bg-[#3daee0] hover:text-white transition-all duration-500">
                      Get A Free Estimate
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
