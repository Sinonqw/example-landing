import Link from "next/link";
import { CTAButtonProps } from "@/types/header";

const HeaderCTAButton: React.FC<CTAButtonProps> = ({ onClick }) => (
  <Link
    href="#cta"
    onClick={onClick}
    className={`px-6 py-2 
              bg-indigo-600 text-white text-base font-semibold rounded-full 
              shadow-xl hover:bg-indigo-700 transition duration-300 
              transform hover:scale-[1.03] ring-2 ring-transparent hover:ring-indigo-300
              dark:shadow-indigo-900/50`}
  >
    Розпочати Проєкт
  </Link>
);

export default HeaderCTAButton;
