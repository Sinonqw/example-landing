import { TestimonialQuoteProps } from "@/types/testimonials";

const TestimonialQuote: React.FC<TestimonialQuoteProps> = ({ text }) => (
  <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 flex-grow relative z-10 transition-colors duration-300">
    &ldquo{text}&ldquo
  </blockquote>
);
export default TestimonialQuote;
