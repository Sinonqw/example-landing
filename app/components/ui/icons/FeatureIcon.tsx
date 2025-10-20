import { X, Check } from "lucide-react";
interface FeatureIconProps {
  isIncluded: boolean;
  isRecommended: boolean;
}
const FeatureIcon: React.FC<FeatureIconProps> = ({
  isIncluded,
  isRecommended,
}) => {
  if (isIncluded) {
    return (
      <div
        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
          isRecommended ? "bg-white/20" : "bg-green-100"
        }`}
      >
        <Check
          className={`w-3.5 h-3.5 ${
            isRecommended ? "text-white" : "text-green-600"
          }`}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
        isRecommended ? "bg-white/10" : "bg-gray-100"
      }`}
    >
      <X
        className={`w-3.5 h-3.5 ${
          isRecommended ? "text-white/50" : "text-gray-400"
        }`}
      />
    </div>
  );
};

export default FeatureIcon;
