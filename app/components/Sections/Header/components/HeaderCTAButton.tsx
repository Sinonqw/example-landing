import Link from "next/link";
import { CTAButtonProps } from "@/types/header";

const HeaderCTAButton: React.FC<CTAButtonProps> = ({
  accentColor,
  onClick,
}) => (
  <Link
    href="#cta"
    onClick={onClick}
    className={`px-6 py-2 bg-${accentColor}-600 text-white text-base font-semibold rounded-full 
              shadow-xl hover:bg-${accentColor}-700 transition duration-300 
              transform hover:scale-[1.03] ring-2 ring-transparent hover:ring-${accentColor}-300`}
  >
    Начать Проект
  </Link>
);

export default HeaderCTAButton;
