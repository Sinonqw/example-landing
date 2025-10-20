"use client";
import { motion } from "framer-motion";

const SecondaryButton: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => (
  <motion.a
    href={href}
    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {text}
  </motion.a>
);
export default SecondaryButton;
