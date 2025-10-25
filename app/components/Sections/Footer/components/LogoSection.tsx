"use client";
import React from "react";
import { motion } from "framer-motion";
import Logo from "@/app/components/ui/Logo";
import TextBlock from "@/app/components/ui/TextBlock";
import SocialLinks from "./SocialLinks";
import { ANIMATION_VARIANTS } from "@/app/components/ui/TopBadge";
import { LogoSectionProps } from "@/types/footer";

const LogoSection: React.FC<LogoSectionProps> = ({ onLogoClick }) => (
  <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="lg:col-span-1">
    <Logo onClick={onLogoClick} />
    <TextBlock size="medium" isAnimated={true} className="text-gray-600 dark:text-gray-400 mt-4 mb-6 transition-colors duration-300">
      Ваш надійний партнер у цифровій трансформації та інноваціях.
    </TextBlock>
    <SocialLinks />
  </motion.div>
);
export default LogoSection;
