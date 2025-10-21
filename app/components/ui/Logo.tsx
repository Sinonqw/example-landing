import Link from "next/link";

// ============ TYPES ============
type LogoVariant = "header" | "footer";

interface LogoProps {
  variant?: LogoVariant;
  accentColor?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// ============ COMPONENT ============
const Logo: React.FC<LogoProps> = ({
  variant = "header",
  accentColor = "indigo",
  onClick,
}) => {
  const variantStyles = {
    header: `text-2xl font-black text-${accentColor}-700 tracking-tight transition duration-200`,
    footer: `text-3xl font-bold text-gray-900 mb-4 block hover:text-blue-600 transition-colors duration-300`,
  };

  return (
    <Link
      href="/"
      className={variantStyles[variant]}
      onClick={onClick}
    >
      [Лого] **Проект**
    </Link>
  );
};

export default Logo;