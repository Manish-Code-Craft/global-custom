import Image from 'next/image';
import Container from './Container';

export default function Process(){
    return(
        <>
{/* <section className='section bg-[#d1ecf7]'>
    <Container>
      <div className="process">
        <div className="mx-auto ">
          <div className="flex ">
            <div className="w-full">
              <h2 className="text-4xl sm:text-5xl font-bold capitalize text-center text-default-950 mb-8 md:mt-[5px] sm:mt-[30px]">
                Transport your goods in&nbsp;3&nbsp;steps
              </h2>
              <div className="flex flex-wrap gap-1 justify-between mt-10 mb-10 transport-your-goods-container">
                <div className="w-full sm:w-1/3 text-center px-4 mb-8 sm:mb-0 step process-box bg-white p-[50px]">
                  <div className="mb-4 ml-0 flex items-center justify-center h-16 w-20 mx-auto">
                    <Image src="/images/1.png" width={124} height={124} alt='' />
                  </div>
                  <Image alt="Send us a commercial invoice" src="/images/delivery-steps.png" width={230} height={230} className="mx-auto mb-4 max-w-full" />
                  <div className="text-2xl font-semibold text-default-950">
                    Send us your freight details
                  </div>
                </div>
                <div className="w-full sm:w-1/3 text-center px-4 mb-8 sm:mb-0 step process-box bg-white p-[50px]">
                  <div className="mb-4 ml-0 flex items-center justify-center h-16 w-20 mx-auto">
                    <Image src="/images/2.png" width={124} height={124} alt='' />
                  </div>
                  <Image alt="We will send you a quote" src="/images/delivery-steps2.png" width={230} height={230} className="mx-auto mb-4 max-w-full" />
                  <div className="text-2xl font-semibold text-default-950">
                    We'll send you a quote
                  </div>
                </div>
                <div className="w-full sm:w-1/3 text-center px-4 step process-box bg-white p-[50px]">
                  <div className="mb-4 ml-0 flex items-center justify-center h-16 w-20 mx-auto">
                    <Image src="/images/3.png" width={124} height={124} alt='' />
                  </div>
                  <Image alt="Your goods are transported" src="/images/delivery-steps3.png" width={230} height={230} className="mx-auto mb-4 max-w-full" />
                  <div className="text-2xl font-semibold text-default-950">
                    Your goods are transported
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </section> */}

    <section className='section bg-[#d1ecf7]'>
      <Container>
        <div className="process">
          <div className="mx-auto ">
            <div className="w-full">
            <h2 className="text-4xl sm:text-5xl font-bold capitalize text-center text-default-950 mb-8 md:mt-[5px] sm:mt-[30px]">
                Custom Clearance
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold underline capitalize text-center text-default-950 mb-8 md:mt-[5px] sm:mt-[30px]">
                Transport your goods in&nbsp;3&nbsp;steps
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center mt-16 mb-10 transport-your-goods-container ">
                <div className="w-full text-center px-4 mb-8 sm:mb-0 step process-box bg-white p-[50px] rounded-xl">
                  <div className="mb-4 flex items-center justify-center h-16 w-20 mx-auto">
                    <Image src="/images/1.png" width={124} height={124} alt='' />
                  </div>
                  <Image alt="Send us a commercial invoice" src="/images/delivery-steps.png" width={230} height={230} className="mx-auto mb-4 max-w-full" />
                  <div className="text-2xl font-semibold text-default-950">
                    Send us your freight details
                  </div>
                </div>
                <div className="w-full text-center px-4 mb-8 sm:mb-0 step process-box bg-white p-[50px] rounded-xl">
                  <div className="mb-4 flex items-center justify-center h-16 w-20 mx-auto">
                    <Image src="/images/2.png" width={124} height={124} alt='' />
                  </div>
                  <Image alt="We will send you a quote" src="/images/delivery-steps2.png" width={230} height={230} className="mx-auto mb-4 max-w-full" />
                  <div className="text-2xl font-semibold text-default-950">
                    We'll send you a quote
                  </div>
                </div>
                <div className="w-full text-center px-4 step process-box bg-white p-[50px] rounded-xl">
                  <div className="mb-4 flex items-center justify-center h-16 w-20 mx-auto">
                    <Image src="/images/3.png" width={124} height={124} alt='' />
                  </div>
                  <Image alt="Your goods are transported" src="/images/delivery-steps3.png" width={230} height={230} className="mx-auto mb-4 max-w-full" />
                  <div className="text-2xl font-semibold text-default-950">
                    Your goods are transported
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
        </>
    )
}