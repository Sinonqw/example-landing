"use client";
import { useState } from "react";
import Logo from "../../ui/Logo";
import DesktopNav from "./components/DesktopNav";
import MobileMenu from "./components/MobileMenu";
import MobileMenuButton from "./components/MobileMenuButton";
import { NavItem } from "@/types/header";

const NAV_ITEMS: NavItem[] = [
  { name: "Главная", href: "#hero" },
  { name: "Преимущества", href: "#features" },
  { name: "Услуги", href: "#services" },
  { name: "Отзывы", href: "#reviews" },
];

const ACCENT_COLOR = "indigo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Logo variant="header" accentColor="indigo" onClick={handleMenuClose} />
        <DesktopNav items={NAV_ITEMS} accentColor={ACCENT_COLOR} />
        <MobileMenuButton
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          accentColor={ACCENT_COLOR}
        />
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        items={NAV_ITEMS}
        accentColor={ACCENT_COLOR}
        onItemClick={handleMenuClose}
      />
    </header>
  );
};

export default Header;
