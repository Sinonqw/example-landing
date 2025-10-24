"use client";
import { motion } from "framer-motion";

const SecondaryButton: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => (
  <motion.a
    href={href}
    // Фон: light (белый/серый) -> dark (темно-серый)
    // Текст: light (темный) -> dark (светлый)
    // Граница: light (светлая) -> dark (темная)
    // Hover: light (светло-серый) -> dark (почти черный)
    className="inline-flex items-center justify-center gap-2 px-8 py-4 
               bg-white dark:bg-gray-800 
               text-gray-700 dark:text-gray-300 
               text-lg font-semibold rounded-xl 
               border-2 border-gray-200 dark:border-gray-700 
               hover:border-gray-300 dark:hover:border-gray-600 
               hover:bg-gray-50 dark:hover:bg-gray-700 
               transition-colors duration-300"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {text}
  </motion.a>
);
export default SecondaryButton;
