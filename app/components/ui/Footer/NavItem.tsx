import { ArrowRight } from "lucide-react";
export interface Navitem {
  name: string;
  href: string;
}
const NavItem: React.FC<{ item: Navitem; onClick: (href: string) => void }> = ({
  item,
  onClick,
}) => (
  <li>
    <a
      href={item.href}
      onClick={(e) => {
        e.preventDefault();
        onClick(item.href);
      }}
      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 inline-flex items-center gap-2 group"
    >
      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
      <span>{item.name}</span>
    </a>
  </li>
);
export default NavItem;
