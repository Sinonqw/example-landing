import FeatureIcon from "../../../ui/icons/FeatureIcon";
import { Feature } from "@/types/feature";

interface FeatureItemProps {
  feature: Feature;
  isRecommended: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  feature,
  isRecommended,
}) => (
  <li className="flex items-start gap-3">
    <FeatureIcon
      isIncluded={feature.isIncluded}
      isRecommended={isRecommended}
    />
    <span
      className={`text-base transition-colors duration-300 ${
        isRecommended
          ? feature.isIncluded
            ? "text-white"
            : "text-blue-200 line-through"
          : feature.isIncluded
          ? "text-gray-700 dark:text-gray-300"
          : "text-gray-400 dark:text-gray-500 line-through"
      }`}
    >
      {feature.text}
    </span>
  </li>
);
export default FeatureItem;
