"use client";
import { motion, Variants } from "framer-motion";
import { TestimonialCardProps } from "@/types/testimonials";
import QuoteIcon from "@/app/components/ui/icons/QuoteIcon";
import TestimonialQuote from "./TestimonialQuote";
import StarRating from "@/app/components/ui/StarRating";
import AuthorInfo from "./AuthorInfo";

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

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <motion.div
    variants={ANIMATION_VARIANTS.card}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group"
  >
    <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-blue-200">
      <QuoteIcon />
      <StarRating rating={testimonial.rating} />
      <TestimonialQuote text={testimonial.quote} />
      <AuthorInfo name={testimonial.name} title={testimonial.title} />
    </div>
  </motion.div>
);
export default TestimonialCard;
