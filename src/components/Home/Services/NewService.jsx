import Container from "@/components/ui/Container";
import Image from "next/image";
export default function NewService(){
    return (
    <section className="section new-service">
        <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-3 lg:px-5">
          <div className="services xl:px-0 mt-0 mx-auto flex flex-wrap gap-[30px] translate-y-0 lg:-translate-y-[30%]">
            <div className="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1">
              <a href="/road-custom-clearance" className="flex flex-col justify-between h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#019ee2] group-hover:bg-[#158E99]">
              <Image
                alt=""
                width={500}
                height={500}
                decoding="async"
                className="rounded-full xl:p-[6px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"
                style={{ color: "transparent" }}
                src="/images/road.png"
                srcSet="/_next/image?url=%2Fimages%2Froad.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Froad.png&w=1080&q=75 2x"
                quality={75}
                priority={false}
              />
                  </div>
                  <h4 className="font-bold font-chivo text-[17px] xl:text-heading-5">Road Customs Clearance</h4>
                </div>
                <Image
                  alt="Agon"
                  loading="lazy"
                  width={500}
                  height={500}
                  decoding="async"
                  data-nimg="1"
                  className="object-cover rounded-2xl aspect-[285/160] hidden md:block"
                  style={{ color: "transparent" }}
                  srcSet="/_next/image?url=%2Fimages%2Fcustom-service001.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fcustom-service001.png&w=1080&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcustom-service001.png&w=1080&q=75"
                />
              </a>
            </div>
            <div className="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1">
              <a href="/sea-custom-clearance" className="flex flex-col justify-between h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#019ee2] group-hover:bg-[#158E99]">
                    <Image
                      alt=""
                      loading="lazy"
                      width={500}
                      height={500}
                      decoding="async"
                      data-nimg="1"
                      className="rounded-full xl:p-[6px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"
                      style={{ color: "transparent" }}
                      srcSet="/_next/image?url=%2Fimages%2Fsea.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fsea.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fsea.png&w=1080&q=75"
                    />
                  </div>
                  <h4 className="font-bold font-chivo text-[17px] xl:text-heading-5">Sea Customs Clearance</h4>
                </div>
                <Image
                  alt="Agon"
                  loading="lazy"
                  width={500}
                  height={500}
                  decoding="async"
                  data-nimg="1"
                  className="object-cover rounded-2xl aspect-[285/160] hidden md:block"
                  style={{ color: "transparent" }}
                  srcSet="/_next/image?url=%2Fimages%2Fcustom-service02.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fcustom-service02.png&w=1080&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcustom-service02.png&w=1080&q=75"
                />
              </a>
            </div>
            <div className="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1">
              <a href="/air-freight-custom-clearance" className="flex flex-col justify-between h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#019ee2] group-hover:bg-[#158E99]">
                    <Image
                      src="/images/airport.png" width={512} height={512}
                      className="rounded-full xl:p-[6px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"
                      alt=""
                    />
                  </div>
                  <h4 className="font-bold font-chivo text-[17px] xl:text-heading-5">Air Freight Customs Clearance</h4>
                </div>
                <Image
                  alt="Agon"
                  loading="lazy"
                  width={500}
                  height={500}
                  decoding="async"
                  data-nimg="1"
                  className="object-cover rounded-2xl aspect-[285/160] hidden md:block"
                  style={{ color: "transparent" }}
                  src="/images/custom-service003.png"
                />
              </a>
            </div>
            <div className="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1">
              <a href="/ens-declaration-uk-safety-security-declarations" className="flex flex-col justify-between h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#019ee2] group-hover:bg-[#158E99]">
                    <Image
                      src="/images/ens-declaration-uk-safety/security.png" width={512} height={512}
                      className="rounded-full xl:p-[6px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"
                      alt="Safety & Security Declarations"
                    />
                  </div>
                  <h4 className="font-bold font-chivo text-[17px] xl:text-heading-5">ENS Declaration UK  Safety & Security Declarations</h4>
                </div>
                <Image
                  alt="ENS Declaration UK Safety & Security Declarations"
                  loading="lazy"
                  width={500}
                  height={500}
                  decoding="async"
                  data-nimg="1"
                  className="object-cover rounded-2xl aspect-[285/160] hidden md:block"
                  style={{ color: "transparent" }}
                  src="/images/ens-declaration-uk-safety/first.jpg" 
                />
              </a>
            </div>
          </div>
        </div>
    </section>
    );
}