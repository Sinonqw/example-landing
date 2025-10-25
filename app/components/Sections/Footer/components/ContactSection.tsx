"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactSectionProps } from "@/types/footer";
import { ANIMATION_VARIANTS } from "../../../ui/TopBadge";
import ContactItem from "../../../ui/ContactItem";

const ContactSection: React.FC<ContactSectionProps> = ({ contacts }) => (
  <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
    <h4 className="font-bold text-gray-900 dark:text-white mb-5 text-lg transition-colors duration-300">Зв&aposязок</h4>
    <ul className="space-y-4">
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </ul>
  </motion.div>
);
export default ContactSection;
