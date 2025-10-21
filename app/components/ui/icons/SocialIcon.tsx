import Link from "next/link";
export interface SocialLink {
  name: string;
  href: string;
}
const SocialIcon: React.FC<{ social: SocialLink }> = ({ social }) => (
  <Link
    href={social.href}
    className="w-10 h-10 bg-gray-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
  >
    <div className="w-5 h-5 bg-gray-600 group-hover:bg-white rounded-sm transition-colors" />
  </Link>
);
export default SocialIcon;
