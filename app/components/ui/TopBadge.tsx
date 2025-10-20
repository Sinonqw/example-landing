'use client'
import { motion, Variants } from "framer-motion";
import { Zap } from "lucide-react";
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  } as Variants,
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as Variants,
};
const TopBadge: React.FC = () => (
  <motion.div
    variants={ANIMATION_VARIANTS.fadeInUp}
    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6"
  >
    <Zap className="w-4 h-4 text-blue-600" />
    <span className="text-sm font-semibold text-blue-600">
      Профессиональные решения
    </span>
  </motion.div>
);
export default TopBadge;
