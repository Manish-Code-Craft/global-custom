import Image from "next/image";
import Container from "../Container";
import Link from "next/link";

const ports = [
  {
    link:"/customs-clearance-felixstowe",
    name: "Felixstowe",
    image: "/images/sea-custom.png",
  },
  {
    link:"/customs-clearance-southampton",
    name: "Southampton",
    image: "/images/sea-custom.png",
  },
  {
    link:"/customs-clearance-dover",
    name: "Dover",
    image: "/images/sea-custom.png",
  },
  {
    link:"/customs-clearance-london-gateway",
    name: "London Gateway",
    image: "/images/sea-custom.png",
  },
];

export default function PortSection() {
  return (
    <section className="pb-20  bg-white">
      <Container>
         {/* Header */}
      <div className=" mb-8 lg:mb-10 ">
        <div className=" text-center ">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Major UK Ports Covered
            </h2>
            <p className="text-lg text-gray-600 ">
               We operate across key UK ports to ensure fast and efficient customs clearance for businesses of all sizes. Whether you're importing or exporting, our expertise spans major locations, including &nbsp;  
                    
                <a href="/customs-clearance-felixstowe" className="text-[#3daee0] font-semibold">Felixstowe</a>, &nbsp; 
                <a href="/customs-clearance-southampton" className="text-[#3daee0] font-semibold">Southampton</a>,&nbsp; 
                <a href="/customs-clearance-dover" className="text-[#3daee0] font-semibold">Dover</a>,&nbsp; and &nbsp;
                <a href="/customs-clearance-london-gateway" className="text-[#3daee0] font-semibold">London Gateway</a>.  
                
                These strategic locations allow us to streamline your shipments, reduce delays, and keep your supply chain moving smoothly. No matter where your goods are, we have you covered!  
            </p>
          </div>
         
        </div>
      </div>

      {/* Grid */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ports.map((port) => (
            <PortCard key={port.name} port={port} />
          ))}
        </div>
      </div>
      </Container>
      
     
    </section>
  );
}

function PortCard({ port }) {
  return (
    <Link href={port.link} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      
      <div className="relative h-[240px] sm:h-[320px] lg:h-[360px]">

        {/* Background Image */}
        <Image
          src={port.image}
          alt={`${port.name} Port UK`}
          fill
          priority={false}
          className="object-cover transform-gpu will-change-transform transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 25vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/50"></div>

        {/* Title + Animated Line */}
        <div className="absolute bottom-6 left-6">
          <div className="inline-block">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              {port.name}
            </h3>

            <span className="block h-[2px] w-8 bg-[#3daee0] mt-2 rounded-full transition-all duration-500 group-hover:w-full"></span>
          </div>
        </div>

      </div>
    </Link>
  );
}


