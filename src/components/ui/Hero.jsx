import Link from 'next/link';
import Container from "@/components/ui/Container";
import { FaCheckDouble } from "react-icons/fa6";
export default function Hero() {
  return (
      <div className="relative z-30 text-white banner-section bg-black">
        <div className='banner-video absolute after:bg-black after:absolute after:top-0 after:h-full after:left-0 after:w-full after:z-10 after:opacity-50 w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'>
          <video width="600" height="400" className='w-full z-10 absolute top-0 h-full left-0 object-cover' playsInline autoPlay muted loop>
            <source src="/videos/banner-main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='hero-text banner-text relative z-20 w-full'>
          <Container>
            <div className='lg:flex items-center'>
              <div className='text-column lg:w-[60%]'>
                <h1 className="mobile-head leading-relaxed tracking-wider law-hero__content-title font-bold animate-float" data-aos="fade-up" data-aos-duration="2000">Fast, Reliable UK Customs Clearance <br/><span className='text-[#3daee0]'>Specialists Based in Kent</span></h1>
                <div className=''>
                  <div className='flex items-center mt-4'>
                    <div className='icons-check'><FaCheckDouble /></div>
                    <div className='text-[17px] ml-4 normal-case text-banner'>24/7 customs support for importers, exporters, freight forwarders and e-commerce
                    businesses.</div>
                  </div>
                  
                </div>
              </div>
              <div className='button-banner flex flex-col  items-end	 lg:w-[40%]'>
                <p className="text-[16px] text-banner">Call the Team Now on: <Link href="tel:+441634565540" className='text-[24px] font-bold banner-email'>+44 1634 565540</Link></p>
                <p className="text-[16px] text-banner ">Email us at: <Link href="mailto:imports@globalcust.co.uk" className='text-[24px] font-bold banner-email'>imports@globalcust.co.uk</Link></p>
                <div className=' grid lg:block grid-cols-2 gap-2'>
                <Link className="button mt-6" href='/document/global customs direct rep.docx' download="global customs direct rep.docx" target='_blank'>
                      <span className="text">Open a New Account</span>
                      <div className="overlay">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    <div className=' lg:hidden '>
                    <Link className="button mt-6" href='/document/gcc-document.xlsx' download="gcc-document.xlsx" target='_blank'>
                      <span className="text">Download Instructions</span>
                      <div className="overlay">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    </div>
                  </div>
                <p className='max-w-[250px] text-right text-[14px]'>Please request forms to be emailed to imports@globalcust.co.uk</p>
                <div className='hidden lg:flex '>
                <Link className="button mt-6" href='/document/gcc-document.xlsx' download="gcc-document.xlsx" target='_blank'>
                      <span className="text">Download Instructions</span>
                      <div className="overlay">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
  );
}
