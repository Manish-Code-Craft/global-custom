import Link from 'next/link';
import Image from "next/image";
import Container from "@/components/ui/Container";
import Btn from "@/components/ui/Btns/Btn";
import BtnContact from "@/components/ui/Btns/BtnContact";
import SectionHeading from "@/components/ui/SectionHeading";
export default function ContentLeftImage() {
  return (
    <>
 <section id="about" className="section bg-[#fff] pb-20">
            <Container> 
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 ">
          <div className="grid sm:grid-cols-2 gap-6 items-center md:sticky md:top-[150px]">
            <div className="space-y-6">
              <div>
                <Image src="/images/custom-service03.png" width={500} height={500} className="max-w-full h-full rounded-lg hidden lg:block md:block" data-aos="fade-down" data-aos-duration="500" alt="" />
              </div>
              <div>
                <Image src="/images/custom-service02.png" width={500} height={500} className="max-w-full h-full rounded-lg hidden lg:block md:block" data-aos="fade-up" data-aos-duration="500"  alt=""/>
              </div>
            </div>
            <div>
              <Image src="/images/port.png" width={500} height={700} className="max-w-full h-full rounded-lg " data-aos="fade-left" data-aos-duration="500" alt="" />
            </div>
          </div>
          <div className="content-center	">
          <div className="max-w-2xl mx-auto ">
            <h2 className="text-5xl font-bold capitalize text-default-950 ">About Us</h2>
          </div>
            <h3 className="text-3xl font-medium text-default-950">Honest & Efficient Work</h3>
            <div className="flex justify-center gap-6 mt-10">
              <div>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-default-950" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-medium text-default-950">Building the Best</h2>
                <p className="text-base text-default-800 mt-4">Over the years, we’ve learned that best customs clearance begins and ends with experienced and friendly professionals, which explains our rigorous hiring process. We believe that our team is the best in the business, and have complete and total confidence in every person providing Customs clearance services.</p>
              </div>
            </div>
            <div className="flex justify-center gap-6 my-10">
              <div>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-default-950" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-medium text-default-950">Get More with Global</h2>
                <p className="text-base text-default-800 mt-4">At Global Customs Clearance Ltd our focus is to provide the best Customs duty clearance service in the business whilst completing all assignments with the highest level of quality. Our focus on personalized service, competitive rates and customer satisfaction ensures that we always meet and exceed expectations.</p>
              </div>
            </div>
            <div className="flex justify-center gap-6 my-10">
              <div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-default-950"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <polygon points="4 9 12 2 20 9 20 15 12 22 4 15"></polygon>
                  <line x1="4" y1="9" x2="12" y2="14"></line>
                  <line x1="20" y1="9" x2="12" y2="14"></line>
                </svg>

              </div>
              <div>
                <h2 className="text-xl font-medium text-default-950">Strategically Located for Seamless Service</h2>
                  <p className="text-base text-default-800 mt-4">
                  We operate across key UK ports to ensure fast and efficient customs clearance for businesses of all sizes. Whether you're importing or exporting, our expertise spans major locations, including &nbsp;  
                  <a href="/customs-clearance-liverpool" className="text-[#3daee0] font-semibold">Liverpool</a>,&nbsp;    
                  <a href="/customs-clearance-felixstowe" className="text-[#3daee0] font-semibold">Felixstowe</a>, &nbsp;    
                  <a href="/customs-clearance-london-gateway" className="text-[#3daee0] font-semibold">London Gateway</a>,&nbsp;  and &nbsp;  
                  <a href="/customs-clearance-southampton" className="text-[#3daee0] font-semibold">Southampton</a>.  
                  These strategic locations allow us to streamline your shipments, reduce delays, and keep your supply chain moving smoothly. No matter where your goods are, we have you covered!  
                  </p>

              </div>
            </div>
            <Link legacyBehavior href="about-us">
      <a className=" about-btn inline-flex justify-center items-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-black hover:bg-white transition-all duration-500">
        Read More
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </a>
    </Link>
          </div>
        </div>
      </Container> 
</section>

<section id="about-mobile" className="section bg-[#fff] pb-20">
            <Container> 
        <div className="grid md:grid-cols-1 grid-cols-1 gap-x-16 gap-y-8 aboutt">
              <div>
                <Image src="/images/about-banner.png" width={750} height={500} className="max-w-full h-full rounded-lg about-image" data-aos="fade-up" data-aos-duration="500"  alt=""/>
              </div>
          <div className="content-center	">
          <div className=" mx-auto ">
            <h2 className="text-5xl font-bold capitalize text-default-950 ">About Us</h2>
          </div>
            <h3 className="text-3xl font-medium text-default-950">Honest & Efficient Work</h3>
            <div className="flex justify-center gap-6 mt-10">
              <div>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-default-950" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-medium text-default-950">Building the Best</h2>
                <p className="text-base text-default-800 mt-4">Over the years, we’ve learned that best customs clearance begins and ends with experienced and friendly professionals, which explains our rigorous hiring process. We believe that our team is the best in the business, and have complete and total confidence in every person providing Customs clearance services.</p>
              </div>
            </div>
            <div className="flex justify-center gap-6 my-10">
              <div>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-default-950" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-medium text-default-950">Get More with Global</h2>
                <p className="text-base text-default-800 mt-4">At Global Customs Clearance Ltd our focus is to provide the best Customs duty clearance service in the business whilst completing all assignments with the highest level of quality. Our focus on personalized service, competitive rates and customer satisfaction ensures that we always meet and exceed expectations.</p>
              </div>
            </div>
            <Link legacyBehavior href="about-us">
      <a className=" about-btn inline-flex justify-center items-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-black hover:bg-white transition-all duration-500">
        Read More
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </a>
    </Link>
          </div>
        </div>
      </Container> 
</section>
 </>
  );
}
