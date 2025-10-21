import { CTAButtonsProps } from "@/types/hero";
import TopBadge from "../../../ui/TopBadge";
import Title from "@/app/components/ui/Title";
import TextBlock from "@/app/components/ui/TextBlock";
import CTAButtons from "./CTAButtons";
import FeaturesList from "./FeaturesList";

const HeroContent: React.FC<CTAButtonsProps> = ({ ctaLink, moreInfoLink }) => (
  <div>
    <TopBadge />
    <Title as="h1" context="hero" isAnimated={true}>
      Создаём решения, <span className="text-blue-600">которые работают</span>
    </Title>

    <TextBlock size="large" isAnimated={true} className="text-gray-700 mb-8">
      Универсальное агентство для любых ваших цифровых нужд. Мы строим будущее
      вместе.
    </TextBlock>
    <CTAButtons ctaLink={ctaLink} moreInfoLink={moreInfoLink} />
    <FeaturesList />
  </div>
);

export default HeroContent;
