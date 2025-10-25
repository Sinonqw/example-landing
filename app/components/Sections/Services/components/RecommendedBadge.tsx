import { Star } from "lucide-react";

const RecommendedBadge: React.FC = () => (
  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
    <div className="flex items-center gap-1 bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg dark:shadow-black/50">
      <Star className="w-4 h-4" />
      <span>Рекомендуємо</span>
    </div>
  </div>
);
export default RecommendedBadge;
