interface FeatureDescriptionProps {
  text: string;
}

const FeatureDescription: React.FC<FeatureDescriptionProps> = ({ text }) => (
  <p className="text-lg text-gray-600 leading-relaxed">{text}</p>
);

export default FeatureDescription