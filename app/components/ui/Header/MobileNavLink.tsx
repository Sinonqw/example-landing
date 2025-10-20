import Link from "next/link";
import { NavLinkProps } from "@/types/header";

const MobileNavLink: React.FC<NavLinkProps & { onClick: () => void }> = ({
  item,
  accentColor,
  onClick,
}) => (
  <Link
    href={item.href}
    onClick={onClick}
    className={`text-lg font-medium text-gray-800 hover:text-${accentColor}-600 hover:bg-white 
              transition duration-150 py-3 px-2 rounded-lg border-b border-gray-100 last:border-b-0`}
  >
    {item.name}
  </Link>
);
export default MobileNavLink;
