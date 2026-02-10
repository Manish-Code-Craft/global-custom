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

        <li className="group relative">
        <NavLink href="#" name="Industries" />
        <ul className="sub-menu">
            <li><NavSubLink href="/industries/ecommerce" name="E-commerce" /></li>
            <li><NavSubLink href="/industries/automotive" name="Automotive" /></li>
            <li><NavSubLink href="/industries/food-and-drink" name="Food & Drink" /></li>
            <li><NavSubLink href="/industries/pharmaceuticals" name="Pharmaceuticals" /></li>
            <li><NavSubLink href="/industries/manufacturing" name="Manufacturing" /></li>
            <li><NavSubLink href="/industries/retail" name="Retail" /></li>
        </ul>
        </li>


        <li className="group relative"><NavLink href="#" name="Locations" />
            <ul className="sub-menu">
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
                <li><NavSubLink href="/customs-clearance-london" name="Customs Clearance London" /></li>               
            </ul>
        </li>
        
        <li className="group relative"><NavLink href="/#" name="Airports" /></li>     
       
        <li className="group relative">
        <NavLink href="/blog" name="Knowledge Hub" />
        <ul className="sub-menu">
            <li><NavSubLink href="/hs-code-guides" name="HS Code Guides" /></li>
            <li><NavSubLink href="/duty-relief-guides" name="Duty Relief Guides" /></li>
            <li><NavSubLink href="/port-guides" name="Port Guides" /></li>
            <li><NavSubLink href="/customs-glossary" name="Customs Glossary" /></li>
            <li><NavSubLink href="/importer-checklists" name="Importer Checklists" /></li>
            <li><NavSubLink href="/cds-vs-chief-guides" name="CDS vs CHIEF Guides" /></li>
            <li><NavSubLink href="/how-to-avoid-port-delays" name="How to Avoid Port Delays" /></li>
            <li><NavSubLink href="/how-to-classify-goods-correctly" name="How to Classify Goods Correctly" /></li>
            <li><NavSubLink href="/post-brexit-customs-advice" name="Post-Brexit Customs Advice" /></li>
            <li><NavSubLink href="/common-importer-mistakes" name="Common Importer Mistakes" /></li>
            <li><NavSubLink href="/customs-audit-preparation" name="How to Prepare for a Customs Audit" /></li>
            <li><NavSubLink href="/duty-relief-schemes" name="Understanding Duty Relief Schemes" /></li>
            <li><NavSubLink href="/temporary-admission-explained" name="Temporary Admission Explained" /></li>
            <li><NavSubLink href="/ata-carnet-guide" name="ATA Carnet Step-by-Step" /></li>
            <li><NavSubLink href="/speed-up-customs-clearance" name="How to Speed Up Customs Clearance" /></li>
            <li><NavSubLink href="/importers-2026-guide" name="What Importers Must Know in 2026" /></li>
            <li><NavSubLink href="/reduce-duty-costs-legally" name="How to Reduce Duty Costs Legally" /></li>
            <li><NavSubLink href="/ecommerce-importing-guide" name="E-commerce Importing Guide" /></li>
            <li><NavSubLink href="/amazon-fba-import-guide" name="Amazon FBA Import Guide" /></li>
            <li><NavSubLink href="/uk-border-changes-explained" name="UK Border Changes Explained" /></li>
        </ul>
        </li>
    

        <li className="group relative">
        <NavLink href="#" name="About" />
        <ul className="sub-menu">
            <li><NavSubLink href="/testimonials" name="Testimonials" /></li>           
        </ul>
        </li>
       
        <li className="group relative"><NavLink href="/contact" name="Contact" /></li>
    </ul>
  );
}
