import Image from "next/image";
import Container from "../Container";
import { Globe, Clock, MessageCircle, ShieldCheck } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section className="py-20  bg-[#049fe1] relative overflow-hidden">
      
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-bl-full -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/10 rounded-tr-full -z-0"></div>

      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Us
            </h2>

            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              As a Kent-based specialist, we bridge the gap between global trade regulations 
              and local logistical efficiency. Our team brings decades of experience 
              to every declaration.
            </p>

            <div className="space-y-8">
              <BenefitItem
                icon={<Globe size={22} color="#3daee0" />}
                title="Local Expertise"
                desc="Deep knowledge of the Kent and SE transport corridors and specific port requirements."
              />

              <BenefitItem
                icon={<Clock size={22} color="#3daee0" />}
                title="Fast Turnaround"
                desc="Direct links to HMRC systems ensure declarations are processed in minutes, not days."
              />

              <BenefitItem
                icon={<MessageCircle size={22} color="#3daee0" />}
                title="24/7 Support"
                desc="We operate around the clock to ensure your goods never stop moving."
              />

              <BenefitItem
                icon={<ShieldCheck size={22} color="#3daee0" />}
                title="Trusted by UK Importers"
                desc="Verified partner for hundreds of UK companies across retail, industrial and food sectors."
              />
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[320px] sm:h-[400px] lg:h-[480px]">
              
              <Image
                src="/images/about-banner.png"
                alt="Customs clearance team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white px-6 py-5 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1 text-[#3daee0]">
                15+
              </p>
              <p className="text-xs font-medium uppercase tracking-widest opacity-70">
                Years Experience
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

function BenefitItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 group">
      
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm group-hover:shadow-md transition">
        {icon}
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-1">
          {title}
        </h4>
        <p className="text-white leading-relaxed">
          {desc}
        </p>
      </div>

    </div>
  );
}
