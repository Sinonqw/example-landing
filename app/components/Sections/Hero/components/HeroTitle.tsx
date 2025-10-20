'use client'
import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "../../../ui/TopBadge";

const HeroTitle: React.FC = () => (
  <motion.h1
    variants={ANIMATION_VARIANTS.fadeInUp}
    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 mb-6"
  >
    Создаём решения, <span className="text-blue-600">которые работают</span>
  </motion.h1>
);
export default HeroTitle;
