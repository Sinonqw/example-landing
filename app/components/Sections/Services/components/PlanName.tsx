interface PlanNameProps {
  name: string;
  isRecommended: boolean;
}

const PlanName: React.FC<PlanNameProps> = ({ name, isRecommended }) => (
  <h3
    className={`text-2xl font-bold mb-4 ${
      isRecommended ? "text-white" : "text-gray-900"
    }`}
  >
    {name}
  </h3>
);

export default PlanName