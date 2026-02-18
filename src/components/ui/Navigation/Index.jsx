import NavLink from "@/components/ui/Navigation/NavLink";
import NavSubLink from "@/components/ui/Navigation/NavSubLink";
export default function Navigation() {
  return (
    
    <ul className="xl:flex gap-7 items-center">
        <li className="group relative "><NavLink href="/" name="Home" /></li>
       
        <li className="group relative"><NavLink href="/#" name="Services" />
            <ul className="sub-menu">
                <li><NavSubLink href="/customs-clearance-uk" name="Customs Clearance" /></li>
                <li><NavSubLink href="/road-custom-clearance" name="Road customs clearance" /></li>
                <li><NavSubLink href="/sea-custom-clearance" name="Sea customs clearance " /></li>
                <li><NavSubLink href="/air-freight-custom-clearance" name="Air freight customs clearance" /></li>
                <li><NavSubLink href="/ens-declaration-uk-safety-security-declarations" name="ENS Declaration" /></li>
                <li><NavSubLink href="/import-clearance" name="Import Clearance" /></li>
                <li><NavSubLink href="/export-clearance" name="Export Clearance" /></li>
                <li><NavSubLink href="/cds-declarations" name="CDS Declarations" /></li>
                <li><NavSubLink href="/t1-transit-documents" name="T1 Transit Documents" /></li>
                <li><NavSubLink href="/hs-code-classification" name="HS Code Classification" /></li>
                <li><NavSubLink href="/urgent-customs-clearance" name="Urgent Customs Clearance" /></li>
                <li><NavSubLink href="/duty-vat-consultancy" name="Duty & VAT Consultancy" /></li>
                <li><NavSubLink href="/temporary-admission" name="Temporary Admission (TA)" /></li>
                <li><NavSubLink href="/ata-carnets" name="ATA Carnets" /></li>
                <li><NavSubLink href="/same-day-customs-clearance" name="Same-Day Customs Clearance" /></li>
                <li><NavSubLink href="/customs-clearance-small-businesses" name="Customs Clearance for Small Businesses" /></li>
            </ul>
        </li>

        <li className="group relative"><NavLink href="#" name="Industries" />
        <ul className="sub-menu">
            <li><NavSubLink href="/industries/ecommerce" name="E-commerce" /></li>
            <li><NavSubLink href="/industries/automotive" name="Automotive" /></li>
            <li><NavSubLink href="/industries/food-and-drink" name="Food & Drink" /></li>
            <li><NavSubLink href="/industries/pharmaceuticals" name="Pharmaceuticals" /></li>
            <li><NavSubLink href="/industries/manufacturing" name="Manufacturing" /></li>
            <li><NavSubLink href="/industries/retail" name="Retail" /></li>
        </ul>
        </li>
     <li className="group relative">
            <NavLink href="#" name="Locations" />
                <ul className="sub-menu loc-sub-menu">
                    <li><NavSubLink href="/customs-clearance-liverpool" name="Custom Clearance in Liverpool" /></li>
                    <li><NavSubLink href="/customs-clearance-felixstowe" name="Custom Clearance in Felixstowe" /></li>
                    <li><NavSubLink href="/customs-clearance-london-gateway" name="Custom Clearance in London Gateway" /></li>
                    <li><NavSubLink href="/customs-clearance-southampton" name="Custom Clearance in Southampton" /></li>

                    <li><NavSubLink href="/customs-clearance-tilbury" name="Customs Clearance Tilbury" /></li>
                    <li><NavSubLink href="/customs-clearance-kent" name="Customs Clearance Kent" /></li>
                    <li><NavSubLink href="/customs-clearance-medway" name="Customs Clearance Medway" /></li>
                    <li><NavSubLink href="/customs-clearance-gillingham" name="Customs Clearance Gillingham" /></li>

                    <li><NavSubLink href="/customs-clearance-rochester" name="Customs Clearance Rochester" /></li>
                    <li><NavSubLink href="/customs-clearance-chatham" name="Customs Clearance Chatham" /></li>
                    <li><NavSubLink href="/customs-clearance-dover" name="Customs Clearance Dover" /></li>
                    <li><NavSubLink href="/customs-clearance-hull" name="Customs Clearance Hull" /></li>

                    <li><NavSubLink href="/customs-clearance-immingham" name="Customs Clearance Immingham" /></li>
                    <li><NavSubLink href="/customs-clearance-bristol" name="Customs Clearance Bristol" /></li>
                    <li><NavSubLink href="/customs-clearance-grangemouth" name="Customs Clearance Grangemouth" /></li>
                    <li><NavSubLink href="/customs-clearance-teesport" name="Customs Clearance Teesport" /></li>

                    <li><NavSubLink href="/customs-clearance-holyhead" name="Customs Clearance Holyhead" /></li>
                    <li><NavSubLink href="/customs-clearance-portsmouth" name="Customs Clearance Portsmouth" /></li>
                    <li><NavSubLink href="/customs-clearance-poole" name="Customs Clearance Poole" /></li>
                    <li><NavSubLink href="/customs-clearance-plymouth" name="Customs Clearance Plymouth" /></li>

                    <li><NavSubLink href="/customs-clearance-grimsby" name="Customs Clearance Grimsby" /></li>
                    <li><NavSubLink href="/customs-clearance-goole" name="Customs Clearance Goole" /></li>
                    <li><NavSubLink href="/customs-clearance-port-of-tyne" name="Customs Clearance Port of Tyne" /></li>
                    <li><NavSubLink href="/customs-clearance-belfast" name="Customs Clearance Belfast" /></li>

                    <li><NavSubLink href="/customs-clearance-greenock" name="Customs Clearance Greenock" /></li>
                    <li><NavSubLink href="/customs-clearance-thamesport" name="Customs Clearance Thamesport" /></li>
                    <li><NavSubLink href="/customs-clearance-harwich" name="Customs Clearance Harwich" /></li>
                    <li><NavSubLink href="/customs-clearance-killingholme" name="Customs Clearance Killingholme" /></li>
                     </ul>
        </li>
     <li className="group relative"><NavLink href="#" name="Airports" />
            <ul className="sub-menu">
                <li><NavSubLink href="/customs-clearance-london-heathrow-airport" name="London Heathrow Airport (LHR)" /></li>                          
                <li><NavSubLink href="/customs-clearance-london-gatwick-airport" name="LONDON GATWICK AIRPORT (LGW)" /></li>                          
                <li><NavSubLink href="/customs-clearance-london-stansted-airport" name="LONDON STANSTED AIRPORT (STN)" /></li>                          
                <li><NavSubLink href="/customs-clearance-birmingham-airport" name="BIRMINGHAM AIRPORT (BHX)" /></li>                          
                <li><NavSubLink href="/customs-clearance-manchester-airport" name="MANCHESTER AIRPORT (MAN)" /></li>                          
                <li><NavSubLink href="/customs-clearance-east-midlands-airport" name="EAST MIDLANDS AIRPORT (EMA)" /></li>                          
                <li><NavSubLink href="/customs-clearance-liverpool-john-lennon-airport" name="LIVERPOOL JOHN LENNON AIRPORT (LPL)" /></li>                          
            </ul>
        </li>
       
            <li className="group relative"><NavLink href="/blog" name="Knowledge Hub" />
                <ul className="sub-menu">
                    <li><NavSubLink href="/hs-code-guides-understanding-finding-using-the-correct-commodity-codes" name="HS Code Guides" /></li>
                    <li><NavSubLink href="/duty-relief-guides-how-to-reduce-or-eliminate-import-duties-legally" name="Duty Relief Guides" /></li>
                    <li><NavSubLink href="/port-guides-navigating-uk-ports-for-smooth-customs-clearance" name="Port Guides" /></li>
                    <li><NavSubLink href="/customs-glossary-key-terms-every-importer-exporter-should-know" name="Customs Glossary" /></li>
                    <li><NavSubLink href="/importer-checklists" name="Importer Checklists" /></li>
                    <li><NavSubLink href="/cds-vs-chief-guides" name="CDS vs CHIEF Guides" /></li>
                    <li><NavSubLink href="/how-to-avoid-port-delays" name="How to Avoid Port Delays" /></li>
                    <li><NavSubLink href="/how-to-classify-goods-correctly" name="How to Classify Goods Correctly" /></li>
                    <li><NavSubLink href="/post-brexit-customs-advice-uk-importers-exporters" name="Post-Brexit Customs Advice" /></li>
                    <li><NavSubLink href="/importer-mistakes-common-errors-how-to-avoid-them" name="Common Importer Mistakes" /></li>
                    <li><NavSubLink href="/prepare-for-uk-customs-audit-guide" name="How to Prepare for a Customs Audit" /></li>
                    <li><NavSubLink href="/uk-duty-relief-schemes-import-costs-guide" name="Understanding Duty Relief Schemes" /></li>
                    <li><NavSubLink href="/temporary-admission-uk-duty-vat-relief" name="Temporary Admission Explained" /></li>
                    <li><NavSubLink href="/ata-carnet-step-by-step-guide" name="ATA Carnet Step-by-Step" /></li>
                    <li><NavSubLink href="/speed-up-uk-customs-clearance-guide" name="How to Speed Up Customs Clearance" /></li>
                    <li><NavSubLink href="/uk-import-rules-2026-changes-risks-opportunities" name="What Importers Must Know in 2026" /></li>
                    <li><NavSubLink href="/uk-import-rules-2026-changes-risks-opportunities" name="How to Reduce Duty Costs Legally" /></li>
                    <li><NavSubLink href="/ecommerce-importing-guide-uk-compliance" name="E-commerce Importing Guide" /></li>
                    <li><NavSubLink href="/amazon-fba-import-guide-uk" name="Amazon FBA Import Guide" /></li>
                    <li><NavSubLink href="/uk-border-changes-explained-importers-guide" name="UK Border Changes Explained" /></li>
                </ul>
          </li>
    

        <li className="group relative"><NavLink href="/about-us" name="About" />
        <ul className="sub-menu">
            <li><NavSubLink href="/testimonials" name="Testimonials" /></li>           
        </ul>
        </li>
       
        <li className="group relative"><NavLink href="/contact" name="Contact" /></li>
    </ul>
  );
}
