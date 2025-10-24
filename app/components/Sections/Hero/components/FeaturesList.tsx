"use client";
import { motion } from "framer-motion";
import FeatureItem from "./FeatureItem";
import { ANIMATION_VARIANTS } from "../../../ui/TopBadge";
import { FEATURES_LIST } from "@/data/hero";

const FeaturesList: React.FC = () => (
  // Класс space-y-3 не содержит цветов, адаптация не требуется
  <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="space-y-3">
    {FEATURES_LIST.map((feature, index) => (
      <FeatureItem key={index} text={feature} />
    ))}
  </motion.div>
);
export default FeaturesList;
