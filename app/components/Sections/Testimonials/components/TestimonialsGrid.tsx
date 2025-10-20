"use client";
import { TestimonialData } from "@/types/testimonials";
import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "./TestimonialCard";
import TestimonialCard from "./TestimonialCard";

interface TestimonialsGridProps {
  testimonials: TestimonialData[];
}

const TestimonialsGrid: React.FC<TestimonialsGridProps> = ({
  testimonials,
}) => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    variants={ANIMATION_VARIANTS.container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    {testimonials.map((testimonial) => (
      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
    ))}
  </motion.div>
);
export default TestimonialsGrid;
