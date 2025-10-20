interface FeatureTitleProps {
  text: string;
}

const FeatureTitle: React.FC<FeatureTitleProps> = ({ text }) => (
  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
    {text}
  </h3>
);
export default FeatureTitle;
