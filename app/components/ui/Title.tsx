// Title.tsx

"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

// ⚠️ Предполагаем, что ANIMATION_VARIANTS определены в другом месте 
// или используем ваше определение для примера.
// В реальном проекте, импортируйте их, если они лежат в другом файле.
const defaultAnimationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
  // Динамический выбор тега: h1, h2, h3, h4
  as: 'h1' | 'h2' | 'h3' | 'h4'; 
  // Контекст для определения стилей (большие, средние, маленькие)
  context: 'hero' | 'feature' | 'cta' | 'default'; 
  isAnimated?: boolean; // Включает анимацию
  className?: string; // Дополнительные классы
}

/**
 * Универсальный компонент для всех заголовков.
 * Управляет семантическим тегом, стилизацией и анимацией.
 */
const Title: React.FC<TitleProps> = ({
  children,
  as,
  context,
  isAnimated = false,
  className = "",
}) => {
  
  // 1. Определение базовых классов в зависимости от контекста
  let contextClasses = "";
  
  switch (context) {
    case 'hero': // Стиль HeroTitle
      contextClasses = "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 mb-6";
      break;
    case 'feature': // Стиль FeatureTitle (меньше)
      contextClasses = "text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300";
      break;
    case 'cta': // Стиль CTATitle (белый, жирный)
      contextClasses = "text-4xl md:text-5xl font-extrabold text-white mb-6";
      break;
    default:
      contextClasses = "text-3xl font-semibold text-gray-900 mb-4";
      break;
  }
  
  // 2. Выбор компонента и вариантов анимации
  const Component = isAnimated ? motion[as] : as;
  
  // Выбираем варианты анимации в зависимости от контекста
  const animationProps = (context === 'hero' && isAnimated) 
    ? { 
        variants: defaultAnimationVariants.fadeInUp, 
        initial: "hidden", 
        animate: "visible" 
      }
    : (context === 'cta' && isAnimated)
    ? { 
        variants: defaultAnimationVariants.item, 
        initial: "hidden", 
        animate: "visible" 
      }
    : (isAnimated && { 
        variants: defaultAnimationVariants.fadeInUp, 
        initial: "hidden", 
        animate: "visible" 
      });


  return (
    <Component
      // Распространяем пропсы анимации (если isAnimated)
      {...animationProps}
      // Объединяем все классы
      className={`${contextClasses} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Title;