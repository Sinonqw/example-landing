import SectionHeader from "./components/SectionHeader";
import PRICING_DATA from "@/data/pricing";
import PricingGrid from "./components/PricingGrid";

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Наши Услуги / Продукты"
          description="Выберите решение, которое подходит именно вам. Мы предлагаем гибкие варианты для любого масштаба задач."
        />
        <PricingGrid plans={PRICING_DATA} />
      </div>
    </section>
  );
};

export default Services;
