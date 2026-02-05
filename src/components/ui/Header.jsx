import Link from "next/link";
import React, { useEffect } from 'react';
import { AllMainJS } from "@/components/js/AllMainJS";
import Navigation from "@/components/ui/Navigation/Index";
import Logo from "@/components/ui/Logo/Logo";
import BtnContact from "@/components/ui/Btns/BtnContact";
import Btn from "@/components/ui/Btns/Btn";
import LogoWhite from "@/components/ui/Logo/LogoWhite";
import Container from "@/components/ui/Container";
import MobileCta from "@/components/ui/MobileCta";
import SidebarNav from "@/components/ui/Navigation/SidebarNav";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Header() {
    useEffect(() => {
        AOS.init();
        AllMainJS(); 
      }, []);
  return (
    <>

    <header className="header">
        <Container>
            <div className="flex items-center justify-between py-2">
                <div className="w-[200px] md:w-[210px] leading-[0]">
                    <Link title="Global Custom Clearance,UK" href="/">
                   <Image src="/images/GCC_LOGO.webp" width={396} height={125}  alt="logo"/>
                    </Link>
                </div>
                <div className="main-menu hidden xl:block">
                <Navigation/>
                </div>
                <div className="ml-0 md:flex items-center gap-5">
                    <div className="hidden xl:flex">
                    <BtnContact link="/contact" title="Get a Free Estimate" btnclass='contact-header'/>
                    </div>
                    <div className="ml-0 xl:hidden">
                        <div className="mobile-nav-btn"><span></span><span></span></div>
                    </div>
                </div>
                
            </div>
        </Container>
    </header>
    <SidebarNav/>
    <MobileCta/>
    </>
  );
}
