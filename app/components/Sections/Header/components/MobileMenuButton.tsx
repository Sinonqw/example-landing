import { Menu, X } from "lucide-react"; 
import { MobileMenuButtonProps } from "@/types/header";

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
  accentColor,
}) => (
  <button
    onClick={onClick}
    className={`md:hidden p-2 rounded-xl 
                text-gray-800 dark:text-gray-200 
                hover:bg-indigo-50 dark:hover:bg-gray-700 
                transition duration-200 
                focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500`}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    {isOpen ? (
      <X
        className="w-7 h-7 text-indigo-600 dark:text-indigo-400"
        aria-label="Закрити меню"
      />
    ) : (
      <Menu className="w-7 h-7 text-gray-800 dark:text-gray-200" aria-label="Відкрити меню" />
    )}
  </button>
);

export default MobileMenuButton;