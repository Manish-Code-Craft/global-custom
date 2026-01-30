import Container from "./Container"
import Link from "next/link"
export default function Heroservice({ title, desc, backgroundImage }) {
  return (
    <>
      <div className="relative z-30 text-white pt-20 lg:pt-40 pb-20 lg:pb-40 bg-black ">
        <div className="banner-image absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className=' relative z-20 w-full'>
          <Container>
            <div className="flex items-center justify-between hero-about">
              <div className="law-hero-info max-w-[650px] xl:max-w-[1050px]">
                <div className="law-hero__content">
                  <h1 className="tracking-wider law-hero__content-title mb-5 font-bold" data-aos="fade-up" data-aos-duration="2000">{title}</h1>
                  <p className="mb-50">
                    {desc}
                  </p>
                  <div className="flex justify-center flex-wrap pt-6 gap-4">
                    <Link legacyBehavior href="tel:+441634565540">
                      <a className="banner-btn bg-[#3daee0] py-[15px] px-[50px] uppercase font-semibold inline-flex justify-center gap-2  text-default-950  rounded-md hover:bg-primary hover:text-black hover:bg-white transition-all duration-500">+44 1634 565540</a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="banner-btn bg-[#fff] text-[#3daee0] py-[15px] px-[50px] uppercase font-semibold inline-flex justify-center gap-2 text-default-950  rounded-md hover:bg-primary hover:text-black hover:bg-white transition-all duration-500">Get A free Estimate</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}