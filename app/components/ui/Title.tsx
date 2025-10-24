"use client";
import { motion } from "framer-motion";
import React from "react";

const defaultAnimationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  item: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, duration: 0.7 },
    },
  },
} as const;

interface TitleProps {
  children: React.ReactNode;

  as: "h1" | "h2" | "h3" | "h4";

  context: "hero" | "feature" | "cta" | "default";
  isAnimated?: boolean;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  as,
  context,
  isAnimated = false,
  className = "",
}) => {
  // Базовый класс для цвета текста, который меняется в зависимости от темы
  const baseTextColor = "text-gray-900 dark:text-white transition-colors duration-300";

  let contextClasses = "";

  switch (context) {
    case "hero":
      // Герой: темный текст / белый текст
      contextClasses = `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${baseTextColor} mb-6`;
      break;
    case "feature":
      // Особенность: темный текст / светлый текст + эффект hover
      contextClasses = `text-2xl font-bold ${baseTextColor} mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300`;
      break;
    case "cta":
      // CTA: белый текст (обычно на темном фоне, не требует dark:)
      contextClasses = "text-4xl md:text-5xl font-extrabold text-white mb-6";
      break;
    default:
      // По умолчанию: темный текст / светлый текст
      contextClasses = `text-3xl font-semibold ${baseTextColor} mb-4`;
      break;
  }

  const Component = isAnimated ? motion[as] : as;

  const animationProps =
    context === "hero" && isAnimated
      ? {
          variants: defaultAnimationVariants.fadeInUp,
          initial: "hidden",
          animate: "visible",
        }
      : context === "cta" && isAnimated
      ? {
          variants: defaultAnimationVariants.item,
          initial: "hidden",
          animate: "visible",
        }
      : isAnimated && {
          variants: defaultAnimationVariants.fadeInUp,
          initial: "hidden",
          animate: "visible",
        };

  return (
    <Component {...animationProps} className={`${contextClasses} ${className}`}>
      {children}
    </Component>
  );
};

export default Title;
