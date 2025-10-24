"use client";
import { motion } from "framer-motion";
import MainCard from "./MainCard";
import FloatingBadge from "./FloatingBadge";
import FloatingStats from "./FloatingStats";

const HeroVisual: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="relative"
  >
    <div className="relative">
      <MainCard />
      <FloatingStats count="500+" label="Проєктів" />
      <FloatingBadge text="⚡ Швидкий старт" />
    </div>
  </motion.div>
);
export default HeroVisual;