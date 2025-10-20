import { Quote } from "lucide-react";

const QuoteIcon: React.FC = () => (
  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
    <Quote className="w-12 h-12 text-blue-600" />
  </div>
);
export default QuoteIcon;
