"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PrimaryButton: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => (
  <motion.a
    href={href}
    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {text}
    <ArrowRight className="w-5 h-5" />
  </motion.a>
);
export default PrimaryButton;
