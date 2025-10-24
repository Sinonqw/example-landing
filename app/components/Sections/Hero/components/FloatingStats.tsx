"use client";
import { motion } from "framer-motion";
import { FloatingStatsProps } from "@/types/hero";
import { Zap } from "lucide-react";

const FloatingStats: React.FC<FloatingStatsProps> = ({ count, label }) => (
  <motion.div
    // Фон, тень, граница меняются
    className="absolute -bottom-6 -left-6 
               bg-white dark:bg-gray-800 
               rounded-xl shadow-xl shadow-gray-300/50 dark:shadow-black/50 
               p-6 border border-gray-100 dark:border-gray-700 
               transition-colors duration-300"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center gap-4">
      {/* Акцентный синий остается без изменений */}
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
        <Zap className="w-6 h-6 text-white" />
      </div>
      <div>
        {/* Основной текст: dark:text-white */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{count}</div>
        {/* Описание: dark:text-gray-300 */}
        <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">{label}</div>
      </div>
    </div>
  </motion.div>
);
export default FloatingStats;
