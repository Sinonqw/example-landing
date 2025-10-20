'use client'
import { PricePlan } from "@/types/pricing";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { ANIMATION_VARIANTS } from "./PricingCard";

interface PricingGridProps {
  plans: PricePlan[];
}

const PricingGrid: React.FC<PricingGridProps> = ({ plans }) => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
    variants={ANIMATION_VARIANTS.container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    {plans.map((plan) => (
      <PricingCard key={plan.name} plan={plan} />
    ))}
  </motion.div>
);
export default PricingGrid;
