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
  let contextClasses = "";

  switch (context) {
    case "hero":
      contextClasses =
        "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 mb-6";
      break;
    case "feature":
      contextClasses =
        "text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300";
      break;
    case "cta":
      contextClasses = "text-4xl md:text-5xl font-extrabold text-white mb-6";
      break;
    default:
      contextClasses = "text-3xl font-semibold text-gray-900 mb-4";
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
