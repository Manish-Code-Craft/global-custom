import NavLink from "@/components/ui/Navigation/NavLink";
import NavSubLink from "@/components/ui/Navigation/NavSubLink";
export default function Navigation() {
  return (
    
    <ul className="xl:flex gap-7 items-center">
        <li className="group relative "><NavLink href="/" name="Home" /></li>
        <li className="group relative"><NavLink href="/customs-clearance-uk" name="Customs Clearance" />
            <ul className="sub-menu">
                <li><NavSubLink href="/road-custom-clearance" name="Road customs clearance" /></li>
                <li><NavSubLink href="/sea-custom-clearance" name="Sea customs clearance " /></li>
                <li><NavSubLink href="/air-freight-custom-clearance" name="Air freight customs clearance" /></li>
                <li><NavSubLink href="/ens-declaration-uk-safety-security-declarations" name="ENS Declaration" /></li>
            </ul>
        </li>
        <li className="group relative"><NavLink href="#" name="Locations" />
            <ul className="sub-menu">
                <li><NavSubLink href="/customs-clearance-liverpool" name="Custom Clearance in Liverpool" /></li>
                <li><NavSubLink href="/customs-clearance-felixstowe" name="Custom Clearance in Felixstowe" /></li>
                <li><NavSubLink href="/customs-clearance-london-gateway" name="Custom Clearance in London Gateway" /></li>
                <li><NavSubLink href="/customs-clearance-southampton" name="Custom Clearance in Southampton" /></li>
            </ul>
        </li>
        
        <li className="group relative"><NavLink href="/testimonials" name="Testimonials" /></li>
        <li className="group relative"><NavLink href="/about-us" name="About Us" /></li>
        <li className="group relative"><NavLink href="/contact" name="Contact Us" /></li>
    </ul>
  );
}
