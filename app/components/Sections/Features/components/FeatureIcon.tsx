"use client";
import { motion } from "framer-motion";

interface FeatureIconProps {
  icon: React.ReactNode;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon }) => (
  <motion.div
    className="mb-6 w-16 h-16 bg-blue-50 dark:bg-blue-900/50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-800/50 transition-colors duration-300"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ duration: 0.3 }}
  >
    {icon}
  </motion.div>
);
export default FeatureIcon;
