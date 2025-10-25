"use client";
import { CTAContentProps } from "@/types/cta";
import { ANIMATION_VARIANTS } from "./CTASectionButton";
import { motion } from "framer-motion";
import Title from "@/app/components/ui/Title";
import TextBlock from "@/app/components/ui/TextBlock"; 
import CTAButton from "./CTASectionButton";
import React from "react";

const CTAContent: React.FC<CTAContentProps> = ({
  title,
  description,
  buttonText,
  buttonTextColor,
  onButtonClick,
}) => (
  <motion.div
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    variants={ANIMATION_VARIANTS.container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <Title as="h2" context="cta" isAnimated={true}>
      {title}
    </Title>
    {/* Адаптуємо колір тексту для TextBlock, оскільки Title (h2) вже адаптовано */}
    <TextBlock size="medium" isAnimated={true} className="text-white/80 dark:text-white/90">
      {description}
    </TextBlock>

    <CTAButton
      text={buttonText}
      textColor={buttonTextColor}
      onClick={onButtonClick}
    />
  </motion.div>
);

export default CTAContent;
