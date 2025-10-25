"use client";

import React from "react";
import { motion } from "framer-motion";
import Copyright from "../../../ui/Copyright";
import LegalLinks from "./LegalLinks";

const BottomBar: React.FC = () => (
  <motion.div
    className="pt-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
      <Copyright />
      <LegalLinks />
    </div>
  </motion.div>
);
export default BottomBar;
