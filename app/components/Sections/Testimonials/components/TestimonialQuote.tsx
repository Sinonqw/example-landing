import { TestimonialQuoteProps } from "@/types/testimonials";

const TestimonialQuote: React.FC<TestimonialQuoteProps> = ({ text }) => (
  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow relative z-10">
    "{text}"
  </blockquote>
);
export default TestimonialQuote;
