import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/ui/Logo/Logo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BtnCall from "./Btns/BtnCall";

import SocialLinks from "./SocialLinks";
import { useRouter } from "next/router";
import { useState } from "react";
import BannerForm from "../Form/BannerForm";
export default function Footer() {
  const Year = new Date();
  const CurrentYear = Year.getFullYear();
  const router = useRouter();
 const hideOnHome = router.pathname === "/";
  return (
    <>
    {/* {!hideOnHome && (
      <section className="relative z-10 overflow-hidden bg-[#f0f0f0] dark:bg-dark py-20 lg:py-[120px]">
        <Container>
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <SectionHeading
                  minititle="Contact Us"
                  title=" Contact Global Custom Clearance Ltd."
                  description="
								Contact us at Global Custom Clearance Ltd to unravel the complexities of your case. Our expert team is ready to provide tailored legal guidance, ensuring you understand the nuances of your situation. Trust us to illuminate your path forward which is clear from customs with clarity and confidence."
                />
                <div className="mt-5 hidden md:block">
                  <BtnCall link="tel:+441634565540" title="+44 1634 565540" />
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
                <BannerForm/>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#3daee0"
                      />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <Image
                      alt=""
                      priority={true}
                      src={"/images/svgviewer-png-output.png"}
                      width={100}
                      height={100}
                    />
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    <Image
                      alt=""
                      priority={true}
                      src={"/images/svgviewer-png-output (1).png"}
                      width={100}
                      height={100}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      )} */}

      <section className="pt-[50px] xl:pt-[80px] pb-[50px] bg-[#101010] text-white">
        <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-3 lg:px-5">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[50px] xl:gap-[80px]">
            <div>
              <img
                src="/images/GCC_LOGO_white.png"
                width={390}
                height={125}
                className="footer-logo"
                alt="GCC Logo"
              />
              <p className="mt-4">
                We are more than a platform. We are the leading Custom Brokers
                to ensure all your import and export declarations are compliant
                to HMRC.
              </p>
              <div className="text-[28px] md:text-[55px] leading-[65px] font-black xl:mt-[30px] mt-4">
                {" "}
                <div>
                  <a href="tel:+441634565540">+44 1634 565540</a>
                </div>
              </div>
              <div className="text-[24px] md:text-[35px] leading-[65px] text-[#009fe4] font-black xl:mt-[30px] mt-4 footer-mail">
                <a href="mailto:imports@globalcust.co.uk">
                  imports@globalcust.co.uk
                </a>
              </div>
            </div>
            <div className="group hway hway-active">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[30px]">
                <SocialLinks
                  name="Linkedin"
                  link="https://www.linkedin.com/company/global-custom-clearance-ltd/"
                />
                <SocialLinks name="Pinterest" link="https://uk.pinterest.com/globalcustomsclearanceltd/" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mt-[50px]">
                <div className="col-span-2 hidden md:flex">
                  <div className="">
                    <div>
                      <b>Address : </b>Unit 1B, Cobalt House, Medway City Estate Rochester, Kent
                      ME2 4BQ
                    </div>
                  </div>
                </div>
              </div>
                <div className="pt-4">
                   <h2 className="text-[24px] font-semibold">Locations</h2>
                   <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4 footer-location">
                    <Link href="/customs-clearance-liverpool" className="relative border w-full group/link bg-black bg-opacity-50 h-[70px] flex items-center justify-center">Liverpool</Link>
                    <Link href="/customs-clearance-felixstowe" className="relative border group/link bg-black bg-opacity-50 h-[70px] flex items-center justify-center">Felixstowe</Link>
                    <Link href="/customs-clearance-london-gateway" className="relative border w-full group/link bg-black bg-opacity-50 h-[70px] flex items-center justify-center">London Gateway</Link>
                    <Link href="/customs-clearance-southampton" className="relative border group/link bg-black bg-opacity-50 h-[70px] flex items-center justify-center">Southampton</Link>
                   </div>
                </div>
             
            </div>
          </div>
          <div className="hidden xl:block pt-[80px]">
            <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-3 lg:px-5">
              <div className="hidden xl:flex justify-center">
                <a
                  href="/"
                  className="hover:text-[#26aae3] mx-[30px] font-medium"
                >
                  HOME
                </a>
                <a
                  href="/about-us"
                  className="hover:text-[#26aae3] mx-[30px] font-medium"
                >
                  ABOUT
                </a>
                <a
                  href="/services"
                  className="hover:text-[#26aae3] mx-[30px] font-medium"
                >
                  SERVICES
                </a>
                <a
                  href="/testimonials"
                  className="hover:text-[#26aae3] mx-[30px] font-medium"
                >
                  TESTIMONIALS
                </a>
                <a
                  href="/contact"
                  className="hover:text-[#26aae3] mx-[30px] font-medium"
                >
                  CONTACT US
                </a>
                <a
                  href="/blog"
                  className="hover:text-[#26aae3] mx-[30px] font-medium"
                >
                  Knowledge Hub
                </a>
              </div>
              <div className="my-[30px] border-t-[1px] border-t-[rgb(49 46 46)]"></div>
              <div className="text-center mt-5">
                {" "}
                Copyright {new Date().getFullYear()}, All Right reserved | <Link href="/gdpr-compliance" >GDPR Compilance</Link> - Website Design,
                Development & SEO By:{" "}
                <a href="https://www.amrsoftec.com/">
                  <span className="text-[#3daee0] font-bold	">AMR Softec</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link class=" fixed bottom-[145px] right-[30px] z-[100] footer-down-phone" title="Customs Customs Clearance UK Contact Number - +44 1634 565540" href="tel:+441634565540">
      <span class="w-14 h-14 block"><svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><linearGradient id="linear-gradient" x1="5.86" y1="34.14" x2="34.14" y2="5.86" gradientTransform="translate(0 40) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f8da30"></stop><stop offset="1" stop-color="#fdab22"></stop></linearGradient></defs><g id="Layer_1-2" data-name="Layer 1"><g id="_97" data-name=" 97"><circle id="background" fill="url(#linear-gradient)" cx="20" cy="20" r="20"></circle><g><path fill="#fff" d="M28.52,26.02c0-.49-.17-.73-.62-.89-1.47-.49-2.94-.97-4.4-1.47-.29-.11-.62-.06-.88.13-.55.38-1.12.74-1.67,1.12-.11.09-.26.09-.37.02-.92-.5-1.76-1.11-2.52-1.83-1.07-.99-2-2.08-2.7-3.37-.09-.17-.08-.28.03-.44.38-.55.73-1.1,1.11-1.65.18-.24.23-.57.12-.85-.5-1.48-.99-2.96-1.49-4.44-.14-.41-.4-.6-.83-.6-1,0-2,0-2.99,0-1.38,0-2.37,1.02-2.36,2.4.02,2.41.61,4.68,1.69,6.82,1.97,3.9,4.92,6.81,8.86,8.72,2.11,1.02,4.34,1.57,6.7,1.57,1.13,0,2.11-.79,2.26-1.9.02-.13.03-.27.03-.41h0c0-.14,0-.28,0-.41v-1.04c.01-.5.01-1,.01-1.49h0Z"></path><path fill="#fff" d="M28.59,11.37c-1.28-1.35-2.84-2.2-4.65-2.6-.6-.13-1.12.25-1.15.83-.02.48.28.83.83.96,1.02.23,1.97.63,2.79,1.28,2.34,1.88,3.27,4.3,2.77,7.26-.09.55.21,1.02.71,1.11.49.1.96-.22,1.05-.71,0-.02,0-.04.01-.06.09-.58.15-1.17.19-1.49-.04-2.7-.88-4.81-2.55-6.57h0Z"></path><path fill="#fff" d="M22.63,13.35c2.57.64,4.04,2.88,3.6,5.49-.09.55.21,1.02.71,1.11.52.1.98-.23,1.08-.79.07-.41.1-.82.15-1.23-.02-3.04-2.17-5.71-5.13-6.35-.57-.12-1.04.15-1.16.66s.19.96.75,1.1h0Z"></path><path fill="#fff" d="M21.64,16.17c1.21.34,1.8,1.24,1.61,2.49-.09.49.24.96.73,1.05.49.09.96-.24,1.05-.73.05-.26.07-.53.1-.79-.02-1.81-1.28-3.38-3.05-3.78-.54-.12-1.01.15-1.13.66-.12.49.17.95.7,1.09h0Z"></path></g></g></g></svg></span></Link>
    </>
  );
}
