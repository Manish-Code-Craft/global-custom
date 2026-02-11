import Container from "./Container";
import Link from "next/link";

export default function Heroservice({ title, desc, backgroundImage }) {
  const paragraphs = Array.isArray(desc) ? desc : [desc];

  return (
    <div className="relative z-30 text-white py-20 lg:py-40 bg-black">
      
      <div
        className="banner-image absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="relative z-20 w-full">
        <Container>
          <div className="flex items-center justify-between hero-about">
            <div className="law-hero-info max-w-[650px] xl:max-w-[1050px]">
              <div className="law-hero__content">
                
                <h1
                  className="tracking-wider law-hero__content-title mb-6 font-bold"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {title}
                </h1>

                {/* Description (string OR array) */}
                <div className="space-y-4">
                  {paragraphs.map((para, index) => (
                    <p key={index} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="flex justify-center flex-wrap pt-8 gap-4">
                  <Link legacyBehavior href="tel:+441634565540">
                    <a className="banner-btn bg-[#3daee0] py-[15px] px-[50px] uppercase font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-500">
                      +44 1634 565540
                    </a>
                  </Link>

                  <Link legacyBehavior href="/contact">
                    <a className="banner-btn bg-white text-[#3daee0] py-[15px] px-[50px] uppercase font-semibold rounded-md hover:bg-[#3daee0] hover:text-white transition-all duration-500">
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
