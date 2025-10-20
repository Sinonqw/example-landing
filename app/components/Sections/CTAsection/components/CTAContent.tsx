"use client";
import { CTAContentProps } from "@/types/cta";
import { ANIMATION_VARIANTS } from "./CTATitle";
import { motion } from "framer-motion";
import CTATitle from "./CTATitle";
import CTADescription from "./CTADescription";
import CTAButton from "./CTASectionButton";

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
    <CTATitle text={title} />
    <CTADescription text={description} />
    <CTAButton
      text={buttonText}
      textColor={buttonTextColor}
      onClick={onButtonClick}
    />
  </motion.div>
);
export default CTAContent;
