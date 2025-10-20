import { StarRatingProps } from "@/types/testimonials";
import { Star } from "lucide-react";

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div
      className="flex gap-1 mb-4"
      aria-label={`Рейтинг: ${rating} из 5 звезд`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};
export default StarRating;
