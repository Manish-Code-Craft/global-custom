import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/ui/Logo/Logo";
import Navigation from "@/components/ui/Navigation/Index";
import BtnContact from "@/components/ui/Btns/BtnContact";
export default function Sidebarnav(){

    return (
        <>
    <div className="gl-offcanvas-wrapper">
        <div className="gl-offcanvas bg-white">
            <div className="offc-top-pattern">
                <Image src="/images/nav-parrten-top.webp" alt="" width={298} height={280} />
            </div>
            <div className="gl-offcanvas__top tp-border-bottom pb-3 mb-3">
                <div className="gl-offcanvas-close w-10">
                    <span><svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>
                </div>
                <div className="w-[150px]">
                    <Link href="/"><Logo/></Link>
                </div>
            </div>            
            <div className="gl-mobile-menu mean-container d-xl-none"> 
                <div className="mean-bar">
                    <Navigation/>
                </div>
            </div>
            <div className="gl-offcanvas__widget my-5 d-none d-xl-block">
                <div className="gl-offcanvas-cta flex items-center tp-border-bottom pb-4 mb-6">
                    <span className="icon mr-5"><Image src="/images/ofp-phone.webp" alt="" width={40} height={40} className="w-[40px]" /></span>
                    <span>
                        <span className="block mb-0">Phone number</span>
                        <b><a href="tel:+441634565540">+44 1634 565540 </a></b>
                        
                    </span>
                </div>
                <div className="gl-offcanvas-cta flex items-center tp-border-bottom pb-4 mb-6">
                    <span className="icon mr-5"><Image src="/images/ofc-mail-icon.webp" alt="" width={40} height={40} className="w-[40px]" /></span>
                    <span>
                        <span className="block mb-0">Email address</span>
                        <b><a href="mailto:imports@globalcust.co.uk">imports@globalcust.co.uk</a></b>
                    </span>
                </div>
                <div className="gl-offcanvas-cta flex items-center pb-4 mb-6">
                    <span className="icon mr-5"><Image src="/images/ofc-locaiton.webp" alt="" width={40} height={40} className="w-[60px]" /></span>
                    <span>
                         <span className="block mb-0">Office Address</span>
                        <b><a href="https://maps.app.goo.gl/yMj9fZqRMfa2sWa68" target="_blank">Unit 1B, Cobalt House, Medway City Estate Rochester, Kent ME2 4BQ</a></b>
                    </span>
                </div>
            </div>
            <div className="gl-offcanvas__bottom">
                <div className="gl-offcanvas-btn-wrapper">
                    <BtnContact link="/contact" title="get in touch" />
                </div>
            </div>
            <div className="offc-bottom-pattern">
                <img src="/images/nav-parrten-botoom.webp" width={298} height={280} alt="" />
            </div>
        </div>
    </div>
    <div className="body-overlay"></div>
        </>
    );
}