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
      Створюємо рішення, <span className="text-blue-600">які працюють</span>
    </Title>

    <TextBlock size="large" isAnimated={true} className="text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-300">
      Універсальне агентство для будь-яких ваших цифрових потреб. Ми будуємо майбутнє
      разом.
    </TextBlock>
    <CTAButtons ctaLink={ctaLink} moreInfoLink={moreInfoLink} />
    <FeaturesList />
  </div>
);

export default HeroContent;