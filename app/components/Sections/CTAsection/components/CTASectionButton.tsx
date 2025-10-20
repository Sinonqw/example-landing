"use client";
import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "./CTATitle";

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
    className={`inline-block px-12 py-4 bg-white ${textColor} font-bold text-lg rounded-xl shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-105`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {text}
  </motion.button>
);

export default CTASectionButton;
