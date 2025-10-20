"use client";
import { motion, Variants } from "framer-motion";

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as Variants,
  item: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.7,
      },
    },
  } as Variants,
};

interface CTATitleProps {
  text: string;
}

const CTATitle: React.FC<CTATitleProps> = ({ text }) => (
  <motion.h2
    variants={ANIMATION_VARIANTS.item}
    className="text-4xl md:text-5xl font-extrabold text-white mb-6"
  >
    {text}
  </motion.h2>
);
export default CTATitle;
