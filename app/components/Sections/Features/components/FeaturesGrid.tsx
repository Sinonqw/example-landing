"use client";
import { FeatureItem } from "@/types/features";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { ANIMATION_VARIANTS } from "./FeatureCard";

interface FeaturesGridProps {
  features: FeatureItem[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-8"
    variants={ANIMATION_VARIANTS.container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    {features.map((feature, index) => (
      <FeatureCard key={index} feature={feature} />
    ))}
  </motion.div>
);
export default FeaturesGrid;
