"use client";
import { HeroProps } from "@/types/hero";
import { ANIMATION_VARIANTS } from "../../ui/TopBadge";
import { motion } from "framer-motion";
import HeroContent from "./components/HeroContent";
import HeroVisual from "./components/HeroVisual";

const Hero: React.FC<HeroProps> = ({
  ctaLink = "#cta",
  moreInfoLink = "#services",
}) => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black py-20 md:py-32 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <HeroContent ctaLink={ctaLink} moreInfoLink={moreInfoLink} />
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
