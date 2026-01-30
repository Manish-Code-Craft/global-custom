import Image from "next/image";
import Container from "@/components/ui/Container";
import BtnCall from "@/components/ui/Btns/BtnCall";
import Btn from "@/components/ui/Btns/Btn";
export default function HeroInnerPage({
    title,
    content
}) {
  return (
    <div className="relative z-30 text-white inner-banner-section before:bg-black/60 before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0">
        <div className='relative z-20 w-full'>
            <Container>
                <div className="min-h-[70vh] flex items-center justify-between pt-[150px] pb-[50px]">
                    <div className="law-hero-info max-w-[650px] xl:max-w-[850px]">
                        <div className="law-hero__content">
                            <h1 className="mb-5 font-bold text-[30px] lg:text-[50px]" data-aos="fade-up" data-aos-duration="2000">{title}</h1>
                            <p className="mb-50">
                            {content}
                            </p>
                            <div className="mt-5 hidden md:block">
                                <BtnCall link="tel:+441634565540" title="+44 1634 565540" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  );
}
