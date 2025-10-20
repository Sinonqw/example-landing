"use client";
import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "../../../ui/TopBadge";

const HeroDescription: React.FC = () => (
  <motion.p
    variants={ANIMATION_VARIANTS.fadeInUp}
    className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
  >
    Краткое описание того, почему нас выбирают. Мы гарантируем качество и
    результат, используя современные технологии.
  </motion.p>
);
export default HeroDescription;
