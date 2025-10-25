import SectionHeader from "./components/SectionHeader";
import FeaturesGrid from "./components/FeaturesGrid";
import { FeatureItem } from "@/types/features";
import { CheckCircle2, Zap, DollarSign } from "lucide-react";

const FEATURES_DATA: FeatureItem[] = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Надійність та Якість",
    description:
      "Короткий опис переваги 1. Тут можна вказати, що ви дотримуєтеся термінів або використовуєте перевірені технології.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Швидкість та Ефективність",
    description:
      "Короткий опис переваги 2. Наприклад, оптимізований процес роботи, який заощаджує час клієнта.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "Доступна Ціна",
    description:
      "Короткий опис переваги 3. Акцент на співвідношенні ціни та цінності, яку ви пропонуєте.",
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Наші ключові переваги"
          description="Короткий опис того, чому нас обирають. Ми гарантуємо якість та результат."
        />
        <FeaturesGrid features={FEATURES_DATA} />
      </div>
    </section>
  );
};

export default Features;
