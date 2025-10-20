"use client";
import { motion } from "framer-motion";
import { FloatingStatsProps } from "@/types/hero";
import { Zap } from "lucide-react";

const FloatingStats: React.FC<FloatingStatsProps> = ({ count, label }) => (
  <motion.div
    className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
        <Zap className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">{count}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  </motion.div>
);
export default FloatingStats;
