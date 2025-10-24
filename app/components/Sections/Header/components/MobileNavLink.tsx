import Link from "next/link";
import { NavLinkProps } from "@/types/header";

const MobileNavLink: React.FC<NavLinkProps & { onClick: () => void }> = ({
  item,
  accentColor,
  onClick,
}) => (
  // Классы заменены на БЕЗОПАСНЫЕ СТРОКИ: indigo-600, gray-800
  <Link
    href={item.href}
    onClick={onClick}
    className={`text-lg font-medium 
              text-gray-800 dark:text-gray-200 
              hover:text-indigo-600 dark:hover:text-indigo-400
              hover:bg-white dark:hover:bg-gray-800
              transition duration-150 py-3 px-2 rounded-lg 
              border-b border-gray-100 dark:border-gray-700 
              last:border-b-0`}
  >
    {item.name}
  </Link>
);
export default MobileNavLink;
