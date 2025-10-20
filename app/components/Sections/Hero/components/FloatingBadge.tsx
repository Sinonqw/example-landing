"use client";
import { motion } from "framer-motion";
import { FloatingBadgeProps } from "@/types/hero";

const FloatingBadge: React.FC<FloatingBadgeProps> = ({ text }) => (
  <motion.div
    className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold"
    initial={{ opacity: 0, rotate: -10 }}
    animate={{ opacity: 1, rotate: 0 }}
    transition={{ delay: 0.7, duration: 0.5 }}
    whileHover={{ rotate: 5, scale: 1.05 }}
  >
    {text}
  </motion.div>
);
export default FloatingBadge;
