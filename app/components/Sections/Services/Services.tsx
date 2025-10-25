import SectionHeader from "./components/SectionHeader";
import PRICING_DATA from "@/data/pricing";
import PricingGrid from "./components/PricingGrid";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white dark:bg-gray-900 py-20 md:py-32 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Наші Послуги / Продукти"
          description="Оберіть рішення, яке підходить саме вам. Ми пропонуємо гнучкі варіанти для будь-якого масштабу завдань."
        />
        <PricingGrid plans={PRICING_DATA} />
      </div>
    </section>
  );
};

export default Services;
