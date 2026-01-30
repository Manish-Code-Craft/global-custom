import Link from 'next/link';
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Contact({
    title,
    content
} ) {
    return(
        <>
       <div className="relative z-30 text-white bg-black mb-20 pt-[200px] pb-[80px]">
      <div className="banner-image absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}></div>
      <div className='relative z-20 w-full'>
        <Container>
          <div className="flex items-center justify-between">
            <div className="law-hero-info max-w-[650px] xl:max-w-[850px]">
              <div className="law-hero__content">
                <h1 className="tracking-wider law-hero__content-title mb-5 font-bold" data-aos="fade-up" data-aos-duration="2000">Contact Us</h1>
                <p className="mb-50">
                  Our focus on personalized service, competitive rates and customer satisfaction ensures that we always meet and exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>

            <section className="pb-[120px]">
                <Container>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      <div className="bg-white rounded-xl shadow-[0_8px_48px_#eee] group">
        <div className="rounded-lg p-6 text-center shrink-0">
          <div className="inline-flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="map-pin"
              className="lucide lucide-map-pin h-12 w-12 text-gray-800"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h3 className="md:text-2xl text-3xl font-bold text-gray-800 mb-2 mt-6">Address</h3>
          <p className="md:text-base font-medium text-slate-500 mb-6">
          Unit 1B, Cobalt House, Medway City Estate Rochester, Kent ME2 4BQ
          </p>
          <a href="#" className="relative font-medium text-primary">
            <span className="absolute start-0 -bottom-0.5 w-0 h-0.5 group-hover:w-10/12 bg-primary transition-all duration-500"></span>
            Find Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="move-right"
              className="lucide lucide-move-right h-4 w-auto inline-block ms-2"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[0_8px_48px_#eee] group">
        <div className="rounded-lg p-6 text-center shrink-0">
          <div className="inline-flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="alert-circle"
              className="lucide lucide-alert-circle h-12 w-12 text-gray-800" >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
          </div>
          <h3 className="md:text-2xl text-xl font-bold text-gray-800 mb-2 mt-6">E-mail</h3>
          <p className="md:text-base font-medium text-slate-500 mb-6">
          imports@globalcust.co.uk
          </p>
          <a href="mailto:imports@globalcust.co.uk" className="relative font-medium text-primary">
            <span className="absolute start-0 -bottom-0.5 w-0 h-0.5 group-hover:w-10/12 bg-primary transition-all duration-500"></span>
            Reach Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="move-right"
              className="lucide lucide-move-right h-4 w-auto inline-block ms-2"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[0_8px_48px_#eee] group">
        <div className="rounded-lg p-6 text-center shrink-0">
          <div className="inline-flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="smartphone"
              className="lucide lucide-smartphone h-12 w-12 text-gray-800"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
              <path d="M12 18h.01"></path>
            </svg>
          </div>
          <h3 className="md:text-2xl text-xl font-bold text-gray-800 mb-2 mt-6">Book or Call</h3>
          <p className="md:text-base font-medium text-slate-500 mb-6">
          +44 1634 565540
          </p>
          <a href="tel:+441634565540" className="relative font-medium text-primary">
            <span className="absolute start-0 -bottom-0.5 w-0 h-0.5 group-hover:w-10/12 bg-primary transition-all duration-500"></span>
            Call Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="move-right"
              className="lucide lucide-move-right h-4 w-auto inline-block ms-2"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
                </Container>
            </section>
        </>
    )
}