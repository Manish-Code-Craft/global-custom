import Container from "@/components/ui/Container";
import Link from "next/link";
import { useState } from "react";
import Moredef from "./Moredef";

export default function Heroroad({ title, description, bannerdescription, image1, image2, image3, backgroundImage, title2 }) {


  return (
    <>
      <div className="relative z-30 text-white banner-section bg-black">
        <div
          className="banner-image absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="banner-text relative z-20 w-full">
          <Container>
            <div className="law-hero-area flex items-center justify-between hero-about">
              <div className="law-hero-info max-w-[650px] xl:max-w-[1100px]">
                <div className="law-hero__content">
                  <h1
                    className="tracking-wider law-hero__content-title mb-5 mt-[85px] font-bold"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {title}
                  </h1>
                  <p
                    className="mb-50 text-[16px]"
                    dangerouslySetInnerHTML={{ __html: (bannerdescription) }}
                  />
                  
                  <div className="flex justify-center flex-wrap pt-6 gap-4">
                    <Link legacyBehavior href="tel:+7653483432">
                      <a className="banner-btn bg-[#3daee0] py-[15px] px-[50px] uppercase font-semibold inline-flex justify-center gap-2 text-default-950 rounded-md hover:bg-primary hover:text-black hover:bg-white transition-all duration-500">
                        +44 1634 565540
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="banner-btn bg-[#fff] text-[#3daee0] py-[15px] px-[50px] uppercase font-semibold inline-flex justify-center gap-2 text-default-950 rounded-md hover:bg-primary hover:text-black hover:bg-white transition-all duration-500">
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
      <Moredef title={title2} description={description} image1={image1} image2={image2} image3={image3} />
    </>
  );
}
