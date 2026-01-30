import { gsap } from "gsap/dist/gsap";
import React, { useEffect } from 'react';
export default function Header() {
    useEffect(() => {   
      const svg = document.getElementById("svg");
      const tl = gsap.timeline();
      const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

      tl.to(".amarpreloader-text", {
        delay: 0.1,
        y: -100,
        opacity: 0,
      });
      tl.to(svg, {
        duration: 0.1,
        // attr: { d: curve },
        ease: "power2.easeIn",
      }).to(svg, {
        duration: 0.3,
        attr: { d: flat },
        ease: "power2.easeOut",
      });
      tl.to(".amarpreloader", {
        y: -1500,
      });
      tl.to(".amarpreloader", {
        zIndex: -1,
        display: "none",
      });

      }, []);
  return (
  <div className="amarpreloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <h5 className="amarpreloader-text">Loading</h5>
    </div>
    );
}