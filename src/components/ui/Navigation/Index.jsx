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
            <li><NavSubLink href="/industries/food-drink" name="Food & Drink" /></li>
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
                <li><NavSubLink href="/customs-clearance-kent" name="Customs Clearance Tilbury" /></li>
                <li><NavSubLink href="/customs-clearance-kent" name="Customs Clearance Kent" /></li>
                <li><NavSubLink href="/customs-clearance-medway" name="Customs Clearance Medway" /></li>
                <li><NavSubLink href="/customs-clearance-gillingham" name="Customs Clearance Gillingham" /></li>
                <li><NavSubLink href="/customs-clearance-rochester" name="Customs Clearance Rochester" /></li>
                <li><NavSubLink href="/customs-clearance-chatham" name="Customs Clearance Chatham" /></li>               
                <li><NavSubLink href="/customs-clearance-dover" name="Customs Clearance Dover" /></li>
                <li><NavSubLink href="/customs-clearance-london" name="Customs Clearance London" /></li>               
            </ul>
        </li>

        
        <li className="group relative"><NavLink href="/testimonials" name="Testimonials" /></li>
        <li className="group relative"><NavLink href="/about-us" name="About Us" /></li>
        <li className="group relative"><NavLink href="/contact" name="Contact Us" /></li>
    </ul>
  );
}
