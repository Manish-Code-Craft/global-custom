import Image from "next/image";

const services = [
  {
    title: "Customs Clearance",
    href: "/road-custom-clearance",
    image: "/images/custom-service001.png",
  },
  {
    title: "CDS declarations",
    href: "/cds-declarations",
    image: "/images/custom-service01.png",
  },
  {
    title: "T1 transit",
    href: "/t1-transit-documents",
    image: "/images/custom-service02.png",
  },
  {
    title: "HS code classification",
    href: "/hs-code-classification",
    image: "/images/custom-service03.png",
  },
  {
    title: "Duty Consultancy",
    href: "/duty-vat-consultancy",
    image: "/images/custom-service011.png",
  },
 
];

export default function NewService() {
  return (
    <section className="section new-service">
      <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-3 lg:px-5">
        
        {/* 5 Column Grid - No Wrap */}
        <div className="services mt-0 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-[30px] translate-y-0 lg:-translate-y-[30%]">

          {services.map((service) => (
            <div
              key={service.href}
              className="rounded-2xl group relative overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition duration-300"
            >
              <a href={service.href} className="relative block h-[260px]">

                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

                {/* Icon Top Right */}
                <div className="absolute top-4 right-4 w-[42px] h-[42px] flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                  <Image
                    src="/images/svg/arrow.svg"
                    alt="Arrow"
                    width={10}
                    height={10}
                    className="transition-transform h-8  -rotate-45 duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* Title Bottom */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h4 className="text-white font-semibold text-[16px] xl:text-[18px] tracking-wide leading-snug">
                    {service.title}
                  </h4>
                </div>

              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
