import React from "react";
import { DesktopNavProps } from "@/types/header";
import NavLink from "./NavLink";
import CTAButton from "./HeaderCTAButton";
import { toggleTheme } from "@/app/store/features/uiSlice";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { RootState } from "@/app/store/store";
import { Sun, Moon } from "lucide-react";

const DesktopNav: React.FC<DesktopNavProps> = ({ items, accentColor }) => {
  const currentTheme = useAppSelector((state: RootState) => state.ui.theme);
  const dispatch = useAppDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());

    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  const ThemeIcon = currentTheme === "dark" ? Sun : Moon;

  return (
    <nav className="hidden md:flex space-x-6 lg:space-x-10 items-center">
      <button
        onClick={handleThemeToggle}
        className={`
          p-2 
          rounded-lg 
          text-gray-500 dark:text-gray-300
          
          transition-all 
          duration-200
      
    
          hover:bg-gray-100 dark:hover:bg-gray-700 
          
      
          focus:outline-none 
          focus:ring-2 
          focus:ring-offset-2 
          focus:ring-offset-white dark:focus:ring-offset-gray-900 
         
          focus:ring-indigo-500 dark:focus:ring-indigo-400 
          
          active:scale-95
          cursor-pointer
        `}
        aria-label={`Переключить на ${
          currentTheme === "dark" ? "светлую" : "тёмную"
        } тему`}
      >
        <ThemeIcon className="h-5 w-5" strokeWidth={1.5} />
      </button>

      {items.map((item) => (
        <NavLink key={item.name} item={item} accentColor={accentColor} />
      ))}

      <CTAButton accentColor={accentColor} />
    </nav>
  );
};

export default DesktopNav;
