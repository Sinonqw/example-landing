'use client'

import React from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { ANIMATION_VARIANTS } from "../../../ui/TopBadge";
import { NavigationSectionProps } from "@/types/footer";

const NavigationSection: React.FC<NavigationSectionProps> = ({ items, onNavClick }) => (
  <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
    <h4 className="font-bold text-gray-900 dark:text-white mb-5 text-lg transition-colors duration-300">Навігація</h4>
    <ul className="space-y-3">
      {items.map((item) => (
        <NavItem key={item.name} item={item} onClick={onNavClick} />
      ))}
    </ul>
  </motion.div>
);
export default NavigationSection;
