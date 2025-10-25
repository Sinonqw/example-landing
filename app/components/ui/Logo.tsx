import Link from "next/link";
import React from "react";

type LogoVariant = "header" | "footer";

interface LogoProps {
  variant?: LogoVariant;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Logo: React.FC<LogoProps> = ({ variant = "header", onClick }) => {
  const headerClasses = `
    text-2xl font-black tracking-tight transition duration-200
    

    text-indigo-700 
    
    
    dark:text-indigo-400
    
  
    hover:opacity-90 active:scale-[0.98]
  `;

  const footerClasses = `
    text-3xl font-bold mb-4 block transition-colors duration-300
    
    // Светлая тема: Темно-серый (Gray-900)
    text-gray-900
    
    // Темная тема: Светлый (Gray-100)
    dark:text-gray-100
    
    // Стиль при наведении (например, акцентный синий)
    hover:text-blue-600 dark:hover:text-blue-400
  `;

  const variantStyles = {
    header: headerClasses,
    footer: footerClasses,
  };

  return (
    <Link href="/" className={variantStyles[variant]} onClick={onClick}>
      [Лого] **Проект**
    </Link>
  );
};

export default Logo;
