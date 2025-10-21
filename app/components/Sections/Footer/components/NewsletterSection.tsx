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
    <h4 className="font-bold text-gray-900 mb-5 text-lg">Подписка</h4>
    <p className="text-gray-600 mb-4 leading-relaxed">
      Получайте наши последние новости, инсайты и обновления прямо на почту.
    </p>
    <div className="space-y-3">
      <NewsletterInput email={email} onChange={onEmailChange} onSubmit={onSubmit} />
    </div>
  </motion.div>
);
export default NewsletterSection;