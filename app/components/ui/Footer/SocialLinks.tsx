import SocialIcon from "./SocialIcon";
import { SocialLink } from "./SocialIcon";
const SOCIAL_LINKS: SocialLink[] = [
  { name: "facebook", href: "#facebook" },
  { name: "twitter", href: "#twitter" },
  { name: "linkedin", href: "#linkedin" },
  { name: "instagram", href: "#instagram" },
];

const SocialLinks: React.FC = () => (
  <div className="flex gap-3">
    {SOCIAL_LINKS.map((social) => (
      <SocialIcon key={social.name} social={social} />
    ))}
  </div>
);
export default SocialLinks;
