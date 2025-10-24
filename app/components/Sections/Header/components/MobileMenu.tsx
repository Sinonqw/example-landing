import { MobileMenuProps } from "@/types/header";
import MobileNavLink from "./MobileNavLink";
import CTAButton from "./HeaderCTAButton";

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  items,
  accentColor,
  onItemClick,
}) => (
  // Добавляем dark: классы для фона и границы
  <nav
    id="mobile-menu"
    className={`md:hidden transition-all duration-300 ease-in-out ${
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    } overflow-hidden 
    bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm
    border-t border-gray-200 dark:border-gray-700`}
  >
    <div className="flex flex-col space-y-1 px-4 sm:px-6 py-4">
      {items.map((item) => (
        <MobileNavLink
          key={item.name}
          item={item}
          accentColor={accentColor}
          onClick={onItemClick}
        />
      ))}
      {/* Кнопка CTA также должна закрывать меню */}
      <CTAButton accentColor={accentColor} onClick={onItemClick} />
    </div>
  </nav>
);

export default MobileMenu;
