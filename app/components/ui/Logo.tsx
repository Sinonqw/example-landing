import { LogoProps } from "@/types/header";
import Link from "next/link";

const Logo: React.FC<LogoProps> = ({ accentColor, onClick }) => (
  <Link
    href="/"
    className={`text-2xl font-black text-${accentColor}-700 tracking-tight transition duration-200`}
    onClick={onClick}
  >
    [Лого] **Проект**
  </Link>
);
export default Logo;
