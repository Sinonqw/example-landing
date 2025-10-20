'use client'
import { CTASectionProps } from "@/types/cta";
import CTAContent from "./components/CTAContent";
import { CTA_CONTENT } from "@/data/cta";

const CTASection: React.FC<CTASectionProps> = ({
  accentColor = "bg-indigo-600",
  buttonTextColor = "text-indigo-600",
  onButtonClick = () => console.log("CTA Button Clicked"),
}) => {
  return (
    <section id="cta" className={`py-20 md:py-28 ${accentColor} shadow-2xl`}>
      <CTAContent
        title={CTA_CONTENT.title}
        description={CTA_CONTENT.description}
        buttonText={CTA_CONTENT.buttonText}
        buttonTextColor={buttonTextColor}
        onButtonClick={onButtonClick}
      />
    </section>
  );
};

export default CTASection;
