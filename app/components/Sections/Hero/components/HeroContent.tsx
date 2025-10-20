import { CTAButtonsProps } from "@/types/hero";
import TopBadge from "../../../ui/TopBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import CTAButtons from "./CTAButtons";
import FeaturesList from "./FeaturesList";

const HeroContent: React.FC<CTAButtonsProps> = ({ ctaLink, moreInfoLink }) => (
  <div>
    <TopBadge />
    <HeroTitle />
    <HeroDescription />
    <CTAButtons ctaLink={ctaLink} moreInfoLink={moreInfoLink} />
    <FeaturesList />
  </div>
);

export default HeroContent;
