'use client'
import { NewsletterSectionProps } from "@/types/footer";
import NewsletterInput from "../../../ui/NewsletterInput";
import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "../../../ui/TopBadge";

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  email,
  onEmailChange,
  onSubmit,
}) => (
  <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
    <h4 className="font-bold text-gray-900 dark:text-white mb-5 text-lg transition-colors duration-300">Підписка</h4>
    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-300">
      Отримуйте наші останні новини, інсайти та оновлення прямо на пошту.
    </p>
    <div className="space-y-3">
      <NewsletterInput email={email} onChange={onEmailChange} onSubmit={onSubmit} />
    </div>
  </motion.div>
);
export default NewsletterSection;
