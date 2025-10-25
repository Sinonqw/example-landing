'use client'
import { CTASectionProps } from "@/types/cta";
import CTAContent from "./components/CTAContent";
import { CTA_CONTENT } from "@/data/cta";

// Имитация данных, так как они не предоставлены
const MOCK_CTA_CONTENT = {
  title: "Готові розпочати свій проект?",
  description: "Зв'яжіться з нами, щоб обговорити вашу ідею та отримати безкоштовну консультацію вже сьогодні.",
  buttonText: "Обговорити ідею",
};

const CTASection: React.FC<CTASectionProps> = ({
  // Адаптивний колір: індиго для світлого режиму, темний синій для темного
  accentColor = "bg-indigo-600 dark:bg-indigo-800",
  // Адаптивний колір тексту кнопки: індиго для світлого, яскравий синій для темного
  buttonTextColor = "text-indigo-600 dark:text-blue-500",
  onButtonClick = () => console.log("CTA Button Clicked"),
}) => {
  return (
    <section id="cta" className={`py-20 md:py-28 ${accentColor} shadow-2xl transition-colors duration-500`}>
      <CTAContent
        title={MOCK_CTA_CONTENT.title}
        description={MOCK_CTA_CONTENT.description}
        buttonText={MOCK_CTA_CONTENT.buttonText}
        buttonTextColor={buttonTextColor}
        onButtonClick={onButtonClick}
      />
    </section>
  );
};

export default CTASection;
