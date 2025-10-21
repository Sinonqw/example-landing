import { DesktopNavProps } from "@/types/header";
import NavLink from "./NavLink";
import CTAButton from "./HeaderCTAButton";

const DesktopNav: React.FC<DesktopNavProps> = ({ items, accentColor }) => (
  <nav className="hidden md:flex space-x-6 lg:space-x-10 items-center">
    {items.map((item) => (
      <NavLink key={item.name} item={item} accentColor={accentColor} />
    ))}
    <CTAButton accentColor={accentColor} />
  </nav>
);
export default DesktopNav;
