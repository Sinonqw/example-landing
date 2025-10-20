"use client";
import { motion } from "framer-motion";
import { CTAButtonsProps } from "@/types/hero";
import { ANIMATION_VARIANTS } from "../../../ui/TopBadge";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import SecondaryButton from "../../../ui/buttons/SecondaryButton";

const CTAButtons: React.FC<CTAButtonsProps> = ({ ctaLink, moreInfoLink }) => (
  <motion.div
    variants={ANIMATION_VARIANTS.fadeInUp}
    className="flex flex-col sm:flex-row gap-4 mb-10"
  >
    <PrimaryButton href={ctaLink} text="Начать Проект" />
    <SecondaryButton href={moreInfoLink} text="Подробнее" />
  </motion.div>
);

export default CTAButtons;
