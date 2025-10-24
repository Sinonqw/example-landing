import { motion } from "framer-motion";
import React from "react";

interface PricingButtonProps {
  text: string;
  link: string;
  isRecommended: boolean;
}

const PricingButton: React.FC<PricingButtonProps> = ({
  text,
  link,
  isRecommended,
}) => (
  <motion.a
    href={link}
    // Адаптация стилей в зависимости от isRecommended
    className={`w-full py-4 text-center font-semibold text-lg rounded-xl transition-all duration-300 ${
      isRecommended
        ? // СОСТОЯНИЕ 1: РЕКОМЕНДУЕМОЕ (Синий текст, Светлый фон)
          `bg-white dark:bg-gray-700 
           text-blue-600 dark:text-blue-400 
           hover:bg-blue-50 dark:hover:bg-gray-600 
           shadow-lg dark:shadow-black/30`
        : // СОСТОЯНИЕ 2: ОБЫЧНОЕ (Белый текст, Синий фон)
          `bg-blue-600 text-white 
           hover:bg-blue-700 dark:hover:bg-blue-500 
           shadow-md dark:shadow-blue-900/50`
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {text}
  </motion.a>
);

export default PricingButton;
