"use client";
import { motion } from "framer-motion";
import ProductMockup from "./ProductMockup";

const MainCard: React.FC = () => (
  <motion.div
    // Фон: меняется на темно-серый
    // Тень: меняется с light-mode shadow на dark-mode shadow
    // Граница: меняется на gray-800
    className="bg-white dark:bg-gray-800 
               rounded-2xl shadow-2xl shadow-gray-300/50 dark:shadow-black/50 
               p-8 border border-gray-100 dark:border-gray-700 
               transition-colors duration-300"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <ProductMockup />
  </motion.div>
);

export default MainCard;
