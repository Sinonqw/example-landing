import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";
import { MobileMenuButtonProps } from "@/types/header";

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
  accentColor,
}) => (
  <button
    onClick={onClick}
    className={`md:hidden p-2 rounded-xl text-gray-800 hover:bg-${accentColor}-50 transition duration-200 focus:outline-none focus:ring-2 focus:ring-${accentColor}-400`}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    {isOpen ? (
      <CloseIcon
        className="w-7 h-7 text-indigo-600"
        aria-label="Закрыть меню"
      />
    ) : (
      <MenuIcon className="w-7 h-7" aria-label="Открыть меню" />
    )}
  </button>
);

export default MobileMenuButton;
