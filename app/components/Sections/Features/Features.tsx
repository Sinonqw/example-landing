import SectionHeader from "./components/SectionHeader";
import FeaturesGrid from "./components/FeaturesGrid";
import { FeatureItem } from "@/types/features";
import { CheckCircle2, Zap, DollarSign } from "lucide-react";

const FEATURES_DATA: FeatureItem[] = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Надежность и Качество",
    description:
      "Краткое описание преимущества 1. Здесь можно указать, что вы соблюдаете сроки или используете проверенные технологии.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Скорость и Эффективность",
    description:
      "Краткое описание преимущества 2. Например, оптимизированный процесс работы, который экономит время клиента.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "Доступная Цена",
    description:
      "Краткое описание преимущества 3. Акцент на соотношении цены и ценности, которое вы предлагаете.",
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Наши ключевые преимущества"
          description="Краткое описание того, почему нас выбирают. Мы гарантируем качество и результат."
        />
        <FeaturesGrid features={FEATURES_DATA} />
      </div>
    </section>
  );
};

export default Features;
