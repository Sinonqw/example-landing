import Link from "next/link";
import { NavLinkProps } from "@/types/header";

const NavLink: React.FC<NavLinkProps> = ({ item }) => (
  <Link
    href={item.href}
    className={`relative text-base font-semibold 
              text-gray-700 dark:text-gray-300 
              hover:text-indigo-600 dark:hover:text-indigo-400
              transition duration-300 transform group`}
  >
    {item.name}
    <span
      className={`absolute bottom-0 left-0 w-full h-0.5 
                  bg-indigo-600 dark:bg-indigo-400
                  transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left`}
    ></span>
  </Link>
);
export default NavLink;
