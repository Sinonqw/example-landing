"use client";
import { motion, Variants } from "framer-motion";
import { FeatureCardProps } from "@/types/features";
import FeatureIcon from "./FeatureIcon";
import Title from "@/app/components/ui/Title";
import TextBlock from "@/app/components/ui/TextBlock";
import React from "react";

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as Variants,
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as Variants,
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
  <motion.div
    variants={ANIMATION_VARIANTS.item}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group"
  >
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg dark:shadow-black/30 border border-gray-100 dark:border-gray-700 h-full transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500">
      <FeatureIcon icon={feature.icon} />

      <Title as="h3" context="feature">
        {feature.title}
      </Title>

      <TextBlock size="small">{feature.description}</TextBlock>
    </div>
  </motion.div>
);

export default FeatureCard;
