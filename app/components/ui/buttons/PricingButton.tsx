import { motion } from "framer-motion";

interface PricingButtonProps {
  text: string;
  link: string;
  isRecommended: boolean;
}

const PricingButton: React.FC<PricingButtonProps> = ({
  text,
  link,
  isRecommended,
}) => (
  <motion.a
    href={link}
    className={`w-full py-4 text-center font-semibold text-lg rounded-xl transition-all duration-300 ${
      isRecommended
        ? "bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
        : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {text}
  </motion.a>
);

export default PricingButton;
