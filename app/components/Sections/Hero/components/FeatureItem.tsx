import { CheckCircle2 } from "lucide-react";
import { FeatureItemProps } from "@/types/hero";

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <div className="flex items-center gap-3">
    {/* Иконка остается акцентной */}
    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
    {/* Текст: dark:text-gray-300 */}
    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{text}</span>
  </div>
);
export default FeatureItem;
