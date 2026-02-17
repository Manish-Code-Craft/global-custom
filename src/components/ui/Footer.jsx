import Link from "next/link";
import { useRouter } from "next/router";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const CurrentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <>
      <footer className="bg-[#0f0f0f] text-white pt-[60px]">
        <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-3 lg:px-5">

          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">

            {/* Brand */}
            <div>
              <img
                src="/images/GCC_LOGO_white.png"
                alt="Global Custom Clearance"
                className="w-[260px]"
              />
              <p className="mt-5 text-gray-300 leading-relaxed">
              We are more than a platform. We are the leading Custom Brokers to ensure all your import and export declarations are compliant to HMRC.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>

              <a
                href="tel:+441634565540"
                className="block text-2xl font-bold hover:text-[#26aae3] transition"
              >
                +44 1634 565540
              </a>

              <a
                href="mailto:imports@globalcust.co.uk"
                className="block mt-3 text-[#26aae3] font-medium hover:underline"
              >
                imports@globalcust.co.uk
              </a>

              <div className="mt-6 grid grid-cols-2 gap-4 max-w-[200px]">
                <SocialLinks
                  name="Linkedin"
                  link="https://www.linkedin.com/company/global-custom-clearance-ltd/"
                />
                <SocialLinks
                  name="Pinterest"
                  link="https://uk.pinterest.com/globalcustomsclearanceltd/"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/about-us" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Knowledge Hub
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Registered Office */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Registered Office</h4>

              <div className="text-gray-300 text-sm leading-relaxed space-y-2">
                <p>Unit 1B, Cobalt House</p>
                <p>Medway City Estate</p>
                <p>Rochester, Kent</p>
                <p className="font-medium text-white">ME2 4BQ</p>
              </div>

              <p className="mt-4 text-xs text-gray-400">
                United Kingdom
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-[50px]" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 text-sm text-gray-400">
            <p>
              © {CurrentYear} Global Custom Clearance. All rights reserved |  <Link href="/gdpr-compliance" className="hover:text-white"> GDPR Compliance </Link>
            </p>

            <p>
             {" "}
              Website Design, Development & SEO by{" "}
              <a
                href="https://www.amrsoftec.com/"
                className="text-[#26aae3] font-semibold"
              >
                AMR Softec
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <Link class=" fixed bottom-[145px] right-[30px] z-[100] footer-down-phone" title="Customs Customs Clearance UK Contact Number - +44 1634 565540" href="tel:+441634565540">
      <span class="w-14 h-14 block"><svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><linearGradient id="linear-gradient" x1="5.86" y1="34.14" x2="34.14" y2="5.86" gradientTransform="translate(0 40) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f8da30"></stop><stop offset="1" stop-color="#fdab22"></stop></linearGradient></defs><g id="Layer_1-2" data-name="Layer 1"><g id="_97" data-name=" 97"><circle id="background" fill="url(#linear-gradient)" cx="20" cy="20" r="20"></circle><g><path fill="#fff" d="M28.52,26.02c0-.49-.17-.73-.62-.89-1.47-.49-2.94-.97-4.4-1.47-.29-.11-.62-.06-.88.13-.55.38-1.12.74-1.67,1.12-.11.09-.26.09-.37.02-.92-.5-1.76-1.11-2.52-1.83-1.07-.99-2-2.08-2.7-3.37-.09-.17-.08-.28.03-.44.38-.55.73-1.1,1.11-1.65.18-.24.23-.57.12-.85-.5-1.48-.99-2.96-1.49-4.44-.14-.41-.4-.6-.83-.6-1,0-2,0-2.99,0-1.38,0-2.37,1.02-2.36,2.4.02,2.41.61,4.68,1.69,6.82,1.97,3.9,4.92,6.81,8.86,8.72,2.11,1.02,4.34,1.57,6.7,1.57,1.13,0,2.11-.79,2.26-1.9.02-.13.03-.27.03-.41h0c0-.14,0-.28,0-.41v-1.04c.01-.5.01-1,.01-1.49h0Z"></path><path fill="#fff" d="M28.59,11.37c-1.28-1.35-2.84-2.2-4.65-2.6-.6-.13-1.12.25-1.15.83-.02.48.28.83.83.96,1.02.23,1.97.63,2.79,1.28,2.34,1.88,3.27,4.3,2.77,7.26-.09.55.21,1.02.71,1.11.49.1.96-.22,1.05-.71,0-.02,0-.04.01-.06.09-.58.15-1.17.19-1.49-.04-2.7-.88-4.81-2.55-6.57h0Z"></path><path fill="#fff" d="M22.63,13.35c2.57.64,4.04,2.88,3.6,5.49-.09.55.21,1.02.71,1.11.52.1.98-.23,1.08-.79.07-.41.1-.82.15-1.23-.02-3.04-2.17-5.71-5.13-6.35-.57-.12-1.04.15-1.16.66s.19.96.75,1.1h0Z"></path><path fill="#fff" d="M21.64,16.17c1.21.34,1.8,1.24,1.61,2.49-.09.49.24.96.73,1.05.49.09.96-.24,1.05-.73.05-.26.07-.53.1-.79-.02-1.81-1.28-3.38-3.05-3.78-.54-.12-1.01.15-1.13.66-.12.49.17.95.7,1.09h0Z"></path></g></g></g></svg></span></Link>
    </>
  );
}
