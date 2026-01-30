import Layout from "@/components/ui/Layout"
import Head  from "next/head"
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Heroservice from "@/components/ui/Heroservice"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PageHead from "@/components/ui/PageHead"
import Container from "@/components/ui/Container"
import Link from "next/link"
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
export default function EnsDeclarationuk({preview}) {
     const PageMeta = {
        title: "ENS Declaration UK - Safety & Security Declarations",
        description: "Ensure smooth and compliant shipments with our ENS (Entry Summary Declaration) services in the UK. Global Customs Clearance Ltd specializes in Safety & Security Declarations, helping businesses meet border compliance regulations efficiently. ",
        keywords:"ENS Declaration UK, Safety & Security Declarations, UK Import Declarations, Export Safety Filing,",
     };
     return (
        <>
        <PageHead PageMeta={PageMeta} />
        <Layout preview={preview}>
           <Heroservice 
           title="ENS Declaration UK - Safety & Security Declarations"
           desc=""
           backgroundImage="/images/service-bg.jpg"/>
             <div className="ens-declaration-uk-page-wrap">
                <section className="ens-declaration-uk-section s-1 m-0 p-0">
                <Container>
                <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-10 items-center">
                <div>
                <h2>What Is a Safety and Security Declaration?</h2>
                <p>The Safety and Security (S&S) declaration is a mandatory customs requirement aimed at enhancing border security by providing authorities with details about goods being imported. It enables border agencies to assess potential risks, such as illicit trafficking or threats to national security, before goods arrive.</p>
                <p>These declarations include information about the goods, such as their description, origin, destination, and transport details. For imports into the UK from the EU, this will become a compulsory step in the logistics process starting January 31, 2025.</p>
                </div>
                <div>
                <Image src="/images/ens-declaration-uk-safety/first.jpg" alt="What Is a Safety and Security Declaration?" width={1920} height={1080}  className="rounded-xl" />
                </div>
                <div className="mt-5">
                <Image src="/images/ens-declaration-uk-safety/second.jpg" alt="What Is a Safety and Security Declaration?" width={1920} height={1080}  className="rounded-xl" />
                </div>
                <div>
                <h2>Why Is This Happening Now?</h2>
                <p>Before Brexit, safety and security declarations were not required for movements between the UK and the EU, as they were part of the same customs territory. However, since the UK’s departure from the EU, and as part of the phased introduction of its own customs control measures, the UK is reintroducing this requirement to align with international standards and ensure border security.</p>
                </div>
                </div>
                </Container>
                </section>
                <section className="ens-declaration-uk-section s-2 m-0 p-0">
                <Container>
                <h2>What Does This Mean for Your Business?</h2>
                <p>For UK businesses importing from the EU, the introduction of these declarations means an extra layer of compliance in your logistics operations. To avoid costly delays and disruptions, it’s important to start preparing now.</p> 
                <h2>Who Is Responsible? </h2>
                <p>Typically, the carrier of record is responsible for submitting the safety and security declaration. This is the operator of the active means of transport on, or in, which the goods are brought into the customs territory.</p> 
                <p>It is the carrier’s responsibility to ensure that the declaration is submitted within the legal time limits. It must only be done by a representative or third party, such as an intermediary, with the carrier’s knowledge and consent.</p>

                <h2>What if Goods Are Travelling by Roll-on Roll-off (RoRo)?</h2>
                <p> If your goods are travelling by roll-on roll-off, the haulage company is responsible for lodging the declaration for accompanied goods. The ferry operator is responsible for lodging the declaration for unaccompanied goods. More information can be found on the GOV.UK website: <Link className="blue" href="https://www.gov.uk/guidance/safety-and-security-requirements-on-imports-and-exports" target="_blank">Safety and Security Requirements</Link>.</p>

                <h2>What if goods are travelling by air or sea?  </h2>
                <ul>
                <li>If your goods are travelling by air or sea, the legal requirement is with the party that has contracted and issued the bill of lading or an air waybill, for the carriage of the goods into Great Britain or Northern Ireland. For sea, this means the shipping company is responsible, and for air, the airline.
                </li>
                <li>At Global Custom Clearance Ltd, we understand that the introduction of the Safety and Security declaration brings new challenges to UK importers and we will bring you new updates as they are released.
                </li>
                <li>If you are experiencing challenges outside of these declarations and require assistance with UK customs regulations and processes, contact us today.
                </li>
                </ul>

                </Container>
                </section>
                <section className="ens-declaration-uk-section s-3 m-0 p-0">
                <Container>
                <h2>At present, safety and security declarations are not required on imports from EU member states to GB. However, this regulatory requirement will be implemented on 31st January 2025, which is later than the anticipated 31st October implementation date.   
                </h2>
                </Container>
                </section>
                <section className="ens-declaration-uk-section s-4 m-0 p-0">
                <Container>
                <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-10 items-center"> 
                <div>
                <h2>In summary:</h2>
                <ul>
                <li>From 31st January 2025 onwards, any goods imported from the EU to Great Britain must be covered by a safety and security declaration, also known as the ENS or Entry Summary Declaration.</li>
                <li>This revised EU import ENS declaration will require less information than that required for other country imports or exports from GB or NI. </li>
                <li>The reduced dataset for EU imports on an Entry Summary Declaration will present as follows:
                <br/>20 mandatory fields that must be completed for all declarations 
                <br/>8 conditional fields that will only need to be completed under given circumstances. 
                </li>
                </ul>
                </div>
                <div className="rounded-xl bg-center bg-cover bg-no-repeat">
                <Image src="/images/ens-declaration-uk-safety/ens-timing.png" alt="What Is a Safety and Security Declaration?" width={1920} height={1080}  className="rounded-xl" />  
                </div>
                </div>
                </Container>
                </section>
                <section className="ens-declaration-uk-section s-3 m-0 p-0">
                <Container>
                <h2>If your business already submits safety and security declarations for imports from countries outside the EU or voluntarily submits them for EU imports, HMRC suggests that you need not change your existing systems or procedures for the reduced level of information on the revised ENS from 31st January. Instead, HMRC encourages the full input of data.</h2>
                </Container>
                </section>
                <section className="ens-declaration-uk-section s-2 m-0 p-0">
                <Container>
                <h2>What you need to know</h2>
                <ul>
                <li>Businesses that export from Great Britain to the EU or import from countries outside the EU are already required to submit safety and security declarations</li>
                <li>Carriers or hauliers are legally responsible for the submission of safety and security declarations, as they carry the goods, and the safety and security of the shipment are integral to their required due diligence.  Further information can be found at the link below:<Link href="https://www.gov.uk/guidance/safety-and-security-requirements-on-imports-and-exports#imports-into-great-britain-and-northern-ireland" target="_blank">Submitting safety and security declarations </Link></li>
                <li>A party other than the carrier, such as the importer or an intermediary, can lodge the declaration on the carrier’s behalf, but the carrier remains the responsible party for ensuring the declaration is submitted</li>
                <li>If your business submits declarations for Rest of World imports now, HMRC suggests that your business will not need to make any changes and should continue to submit declarations as they are  done now.  However, the reduced data set for safety and security declarations is an option available to you.</li>
                </ul>
                </Container>
                </section>
                <section className="ens-declaration-uk-section s-2 m-0 p-0">
                <Container>
                <h2>What to do now:</h2>
                <ul>
                <li>HMRC encourages businesses that are ready to start submitting safety and security declarations for imports from the EU before 31st January 2025 to do so </li>
                <li>Ensure that your business has agreed with your supply chain as to which party will be responsible for completing any import declarations for EU to Great Britain imports from 31st January 2025 and the most suitable method for making those declarations. </li>
                <li><b>GB and NI Exports to the EU</b><br/>
                For clarity, this new guidance does not apply to exports from GB or NI to the EU where safety and security declarations are already in place and their requirement has not been changed. </li>
                </ul>
                </Container>
                </section>
             </div>
        </Layout>
        </>
    );
}
