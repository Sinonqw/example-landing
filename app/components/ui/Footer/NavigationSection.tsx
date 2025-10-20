"use client";
import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { ANIMATION_VARIANTS } from "./LogoSection";
import { Navitem } from "./NavItem";
interface NavigationSectionProps {
  items: Navitem[];
  onNavClick: (href: string) => void;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({
  items,
  onNavClick,
}) => (
  <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
    <h4 className="font-bold text-gray-900 mb-5 text-lg">Навигация</h4>
    <ul className="space-y-3">
      {items.map((item) => (
        <NavItem key={item.name} item={item} onClick={onNavClick} />
      ))}
    </ul>
  </motion.div>
);
export default NavigationSection;
