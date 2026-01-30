import Container from "@/components/ui/Container";
import Link from "next/link";
export default function Testimonials() {
  return (
    <section className=" bg-[#049fe1] ">
      <Container>
        <div className="full-width bg-bg-6 ">
          <div className="testimonials px-[12px] md:px-[36px] xl:px-0  flex flex-col gap-6 mx-auto py-[98px] lg:flex-row max-w-[1320px]">
            <div className="flex-[1.36] ">
              <h2 className="mt-8  text-[35px] text-white leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-[25px]">Don’t take our word for it. See what our clients say.</h2>
              <p className="text-quote md:text-lead-lg text-white mb-[10px] md:mb-[50px]">
                At Global Customs Clearance Ltd our focus is to provide the best &nbsp; 
                <a
                  href="/customs-clearance-uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-white"
                >
                     Customs duty clearance service &nbsp; 
                </a>{" "}
                 in the business whilst completing all assignments with the highest level of quality.
              </p>

              <Link legacyBehavior href="/">
                <a className="btn about-btn inline-flex justify-center items-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-black hover:bg-white transition-all duration-500">
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
            <div className="flex flex-col gap-8 flex-1">
              <div className="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px] animate-float">
                <p className="text-text mb-[15px]">"Always a pleasure to work with the team at GCC. Quick, easy and reliable servie.  "</p>
                <div className="flex items-center gap-6">

                  <div>
                    <p className="line-clamp-2 font-bold mb-[3px] text-lead">Jason Parker</p>

                  </div>
                </div>
              </div>
              <div className="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px] ">
                <p className="text-text mb-[15px]">"Nothing is ever too much trouble for James and the team, they always so helpful. We can rely on them 100%, so quick and efficient! Great team, great service."</p>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="line-clamp-2 font-bold mb-[3px] text-lead">Erin Loughlin</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 flex-1">
              <div className="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px] ">
                <p className="text-text mb-[15px] ">"Having used many agents in the past, I cannot stress how much these guys went above and beyond to ensure that the process was as smooth and simple as possible."</p>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="line-clamp-2 font-bold mb-[3px] text-lead">Nick Bond</p>
                  </div>
                </div>
              </div>
              <div className="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px] animate-float">
                <p className="text-text mb-[15px]">"Great people and a cost effective service provided. GCC are now my "go-to" for anything Customs related."</p>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="line-clamp-2 font-bold mb-[3px] text-lead">Kevin Gerbson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}