"use client";
import { SectionHeaderProps } from "@/types/features";
import { motion } from "framer-motion";

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
      {title}
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
  </motion.div>
);
export default SectionHeader;
