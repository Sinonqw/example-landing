// TextBlock.tsx

"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

// 💡 Настройки анимации (могут быть импортированы из отдельного файла)
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
      delay: 0.1, // Добавим небольшой delay для наглядности
    },
  },
};

// 💡 Унифицированный интерфейс пропсов
interface TextBlockProps {
  children: React.ReactNode;
  isAnimated?: boolean; // Включает анимацию framer-motion
  // Добавим 'small' (FeatureDescription), 'medium' (Description) и 'large' (HeroDescription)
  size?: "small" | "medium" | "large"; 
  className?: string; // Для передачи любых дополнительных классов Tailwind
  // Если нужна кастомная анимация, можно передать другой объект Variants
  animationVariants?: Variants; 
}

/**
 * Универсальный компонент для вывода текстового описания.
 * Может опционально включать анимацию framer-motion и настраивать размер.
 */
const TextBlock: React.FC<TextBlockProps> = ({
  children,
  isAnimated = false,
  size = "medium", // Изменим дефолт на "medium" для лучшей читаемости
  className = "",
  // Используйте переданные варианты или дефолтные
  animationVariants = defaultVariants,
}) => {
  
  // Базовые классы, общие для всех размеров
  const baseClasses = "text-gray-600 leading-relaxed";

  // Классы в зависимости от размера
  let sizeClasses = "";
  switch (size) {
    case "large": // Соответствует HeroDescription
      sizeClasses = "text-xl mb-8 max-w-xl";
      break;
    case "medium": // Соответствует Description (бывший standard)
      sizeClasses = "mb-6";
      break;
    case "small": // Соответствует FeatureDescription
      sizeClasses = "text-lg";
      break;
  }
  
  // Объединяем все классы
  const fullClassName = `${baseClasses} ${sizeClasses} ${className}`.trim();

  if (isAnimated) {
    // 💡 Лучшая практика framer-motion: передавать весь объект variants, 
    // а не только его часть, чтобы motion-компонент мог управлять переходами.
    return (
      <motion.p
        variants={animationVariants} // Передаем весь объект
        initial="fadeInUp"
        animate="visible"
        className={fullClassName}
      >
        {children}
      </motion.p>
    );
  }

  // Если анимация не нужна, рендерим обычный тег <p>
  return (
    <p className={fullClassName}>
      {children}
    </p>
  );
};

export default TextBlock;