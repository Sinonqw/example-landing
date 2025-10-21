"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

const defaultVariants: Variants = {
  fadeInUp: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

interface TextBlockProps {
  children: React.ReactNode;
  isAnimated?: boolean;

  size?: "small" | "medium" | "large";
  className?: string;

  animationVariants?: Variants;
}

const TextBlock: React.FC<TextBlockProps> = ({
  children,
  isAnimated = false,
  size = "medium",
  className = "",

  animationVariants = defaultVariants,
}) => {
  const baseClasses = "text-gray-600 leading-relaxed";

  let sizeClasses = "";
  switch (size) {
    case "large":
      sizeClasses = "text-xl mb-8 max-w-xl";
      break;
    case "medium":
      sizeClasses = "mb-6";
      break;
    case "small":
      sizeClasses = "text-lg";
      break;
  }

  const fullClassName = `${baseClasses} ${sizeClasses} ${className}`.trim();

  if (isAnimated) {
    return (
      <motion.p
        variants={animationVariants}
        initial="fadeInUp"
        animate="visible"
        className={fullClassName}
      >
        {children}
      </motion.p>
    );
  }

  return <p className={fullClassName}>{children}</p>;
};

export default TextBlock;
