import React from 'react';
import Container from "@/components/ui/Container";
import Image from 'next/image';

const Servicedef = ({ title, description, description1, image1, title2, description2, description22, image2, title3, description3, image3 }) => {
  return (
    <div>
      {/* Section 1 */}
      {(title || description || description1 || image1) && (
        <div className="pb-[80px] rajeev">
          <div className="max-w-[1350px] mx-auto px-[15px]">
                <div className="lg:flex lg:flex-row sm:flex sm:flex-col items-center gap-[66px] service_last">
                  {image1 && (
                    <div className="service-image">
                      <div className="xl:block">
                        <div className="relative">
                          <Image className="w-full rounded-lg" src={image1} alt="" width={573} height={500} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
                    {title && <h2 className="mt-8 font-bold text-5xl lg:text-heading-1 md:text-[46px] text-[35px] mb-[22px]">{title}</h2>}
                    {description && <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]" dangerouslySetInnerHTML={{ __html: description }} />}
                    {description1 && <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]" dangerouslySetInnerHTML={{ __html: description1 }} />}
                  </div>
                </div>
              </div>
            </div>
      )}

      {/* Section 2 */}
      {(title2 || description2 || description22 || image2) && (
        <div className="py-[80px] bg-[#c6fcff] rajeev">
          <div className="max-w-[1350px] mx-auto px-[15px]">
                <div className="lg:flex lg:flex-row-reverse sm:flex sm:flex-col items-center gap-[66px] service_last">
                  {image2 && (
                    <div className="service-image">
                      <div className="xl:block">
                        <div className="relative">
                          <Image className="w-full rounded-lg" src={image2} alt="" width={573} height={500} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
                    {title2 && <h2 className="font-bold text-5xl lg:text-heading-1 md:text-[46px] text-[35px] mb-[22px]">{title2}</h2>}
                    {description2 && <p className="text-quote md:text-lead-lg text-gray-600 mb-[10px]" dangerouslySetInnerHTML={{ __html: description2 }} />}
                    {description22 && <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]" dangerouslySetInnerHTML={{ __html: description22 }} />}
                  </div>
                </div>
              </div>
            </div>
      )}

      {/* Section 3 */}
      {(title3 || description3 || image3) && (
        <div className="py-[80px] rajeev">
          <div className="max-w-[1350px] mx-auto px-[15px]">
                <div className="lg:flex lg:flex-row sm:flex sm:flex-col items-center gap-[66px] service_last">
                  {image3 && (
                    <div className="service-image">
                      <div className="xl:block">
                        <div className="relative">
                          <Image className="w-full rounded-lg" src={image3} alt="" width={573} height={500} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex-1 lg:gap-[30px] xl:gap-[64px] content-center">
                    {title3 && <h2 className="mt-8 font-bold text-5xl lg:text-heading-1 md:text-[46px] text-[35px] mb-[22px]">{title3}</h2>}
                    {description3 && <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]" dangerouslySetInnerHTML={{ __html: description3 }} />}
                  </div>
                </div>
              </div>
            </div>
      )}
    </div>
  );
};

export default Servicedef;
