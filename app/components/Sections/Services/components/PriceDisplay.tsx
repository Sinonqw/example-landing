interface PriceDisplayProps {
  price: string;
  period: string;
  isRecommended: boolean;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  period,
  isRecommended,
}) => {
  const isLongPrice = price.length > 10;
  
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-baseline gap-1">
        <span
          className={`${
            isLongPrice 
              ? 'text-2xl sm:text-3xl lg:text-4xl' 
              : 'text-4xl sm:text-5xl'
          } font-bold leading-tight ${
            isRecommended ? "text-white" : "text-gray-900"
          }`}
          style={{ 
            hyphens: 'auto',
            wordBreak: 'break-word'
          }}
        >
          {price}
        </span>
        {period && (
          <span
            className={`text-lg ${
              isRecommended ? "text-blue-100" : "text-gray-600"
            }`}
          >
            {period}
          </span>
        )}
      </div>
    </div>
  );
};

export default PriceDisplay;