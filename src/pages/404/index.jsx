import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Layout from "@/components/ui/Layout";
import Btn from "@/components/ui/Btns/Btn";
export default function NotFound() {
  return (
    <Layout>
        <Head>
          <meta name="robots" content="noindex"/>
          <title>404 - Page Not Found !</title>
            <meta name="description" content="At Global Customs Clearance Ltd our focus is to provide the best customer service in the business whilst completing all assignments with the highest level of quality. Our focus on personalized service, competitive rates and customer satisfaction ensures that we always meet and exceed expectations." />
        </Head>
        <Header/>
        <div className=" min-h-screen bg-[url('/images/404-bg.png')] bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto">
            <div className="lg:grid grid-cols-12 items-center justify-between">
                <div className="col-span-8">
                    <div className="max-w-[570px] mx-auto flex flex-col items-center text-center justify-center min-h-screen px-4">
                        <Image width={500} height={500} src="/images/404.svg" alt="" className="mb-14"/>
                        <h2 className=" mb-6">Page not found</h2>
                        <div className="mb-10">
                            SORRY this webpage no longer exists.
                        </div>
                        <Btn link="/" title="Back To Home" />
                    </div>
                </div>
                <div className="col-span-4 mt-[30px] lg:mt-0 mx-[-1rem] lg:mx-0">
                    <div className='banner-form rounded border-2 border-[#ff4867] border-dashed p-2.5 text-[#000]'>
                        <div className='bg-[#fff] p-4 rounded'><h2 className='lg:text-[30px] lg:leading-[34px] text-[22px] leading-[28px] font-bold'>Register -<br/><span className="text-[#ff4867]">Custom Clearance UK</span></h2>
                        {/* <BannerForm /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Layout>
  );
}
