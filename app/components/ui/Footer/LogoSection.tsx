"use client";
import { motion, Variants } from "framer-motion";
import Logo from "./Logo";
import Description from "./Description";
import SocialLinks from "./SocialLinks";

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  } as Variants,
  staggerContainer: {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as Variants,
};
interface LogoSectionProps {
  onLogoClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
const LogoSection: React.FC<LogoSectionProps> = ({ onLogoClick }) => (
  <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="lg:col-span-1">
    <Logo   onClick={onLogoClick} />
    <Description />
    <SocialLinks />
  </motion.div>
);
export default LogoSection;
