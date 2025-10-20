import { PricePlan } from "@/types/pricing";
import { motion, Variants } from "framer-motion";
import PlanName from "./PlanName";
import CTAButton from "../../../ui/buttons/PricingButton";
import PriceDisplay from "./PriceDisplay";
import RecommendedBadge from "./RecommendedBadge";
import FeaturesList from "./FeaturesList";

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as Variants,
  card: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as Variants,
};

interface PricingCardProps {
  plan: PricePlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => (
  <motion.div
    variants={ANIMATION_VARIANTS.card}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`relative flex flex-col ${
      plan.isRecommended ? "lg:scale-105" : ""
    }`}
  >
    <div
      className={`h-full flex flex-col rounded-2xl p-8 transition-all duration-300 ${
        plan.isRecommended
          ? "bg-blue-600 text-white shadow-2xl border-2 border-blue-700"
          : "bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-200"
      }`}
    >
      {plan.isRecommended && <RecommendedBadge />}
      <PlanName name={plan.name} isRecommended={plan.isRecommended} />
      <PriceDisplay
        price={plan.price}
        period={plan.period}
        isRecommended={plan.isRecommended}
      />
      <FeaturesList
        features={plan.features}
        isRecommended={plan.isRecommended}
      />
      <CTAButton
        text={plan.ctaText}
        link={plan.ctaLink}
        isRecommended={plan.isRecommended}
      />
    </div>
  </motion.div>
);
export default PricingCard;
