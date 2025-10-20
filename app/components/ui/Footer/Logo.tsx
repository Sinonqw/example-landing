import Link from "next/link";

const Logo: React.FC<{
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}> = ({ onClick }) => (
  <Link
    href="/"
    onClick={onClick}
    className="text-3xl font-bold text-gray-900 mb-4 block hover:text-blue-600 transition-colors duration-300"
  >
    [Лого] **Проект**
  </Link>
);
export default Logo;
