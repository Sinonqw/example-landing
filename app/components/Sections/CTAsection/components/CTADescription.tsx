"use client";
import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "./CTASectionButton";

interface CTADescriptionProps {
  text: string;
}

const CTADescription: React.FC<CTADescriptionProps> = ({ text }) => (
  <motion.p
    variants={ANIMATION_VARIANTS.item}
    className="text-xl text-white/90 dark:text-white/95 max-w-3xl mx-auto mb-10 transition-colors duration-300"
  >
    {text}
  </motion.p>
);

export default CTADescription;
