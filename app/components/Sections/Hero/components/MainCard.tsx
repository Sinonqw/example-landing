"use client";
import { motion } from "framer-motion";
import ProductMockup from "./ProductMockup";

const MainCard: React.FC = () => (
  <motion.div
    className="bg-white rounded-2xl shadow-2xl shadow-gray-300/50 p-8 border border-gray-100"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <ProductMockup />
  </motion.div>
);

export default MainCard;
