"use client";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
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

interface CTASectionButtonProps {
  text: string;
  textColor: string;
  onClick: () => void;
}

const CTASectionButton: React.FC<CTASectionButtonProps> = ({
  text,
  textColor,
  onClick,
}) => (
  <motion.button
    variants={ANIMATION_VARIANTS.item}
    className={`inline-block px-12 py-4 bg-white ${textColor} font-bold text-lg rounded-xl shadow-2xl dark:shadow-black/70 hover:bg-gray-100 transition duration-300 transform hover:scale-105 mt-8`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {text}
  </motion.button>
);

export default CTASectionButton;
