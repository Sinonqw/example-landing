import FeatureItem from "./FeatureItem";
import { Feature } from "@/types/feature";

interface FeaturesListProps {
  features: Feature[];
  isRecommended: boolean;
}

const FeaturesList: React.FC<FeaturesListProps> = ({
  features,
  isRecommended,
}) => (
  <ul className="space-y-4 flex-grow mb-8">
    {features.map((feature, index) => (
      <FeatureItem
        key={index}
        feature={feature}
        isRecommended={isRecommended}
      />
    ))}
  </ul>
);
export default FeaturesList;
