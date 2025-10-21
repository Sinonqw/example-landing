"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "../../ui/TopBadge";
import LogoSection from "./components/LogoSection";
import NavigationSection from "./components/NavigationSection";
import ContactSection from "./components/ContactSection";
import NewsletterSection from "./components/NewsletterSection";
import BottomBar from "./components/BottomBar";
import { NavItem, ContactItem } from "@/types/footer";
import { Mail, Phone, MapPin } from "lucide-react";

const FOOTER_NAV: NavItem[] = [
  { name: "Главная", href: "#hero" },
  { name: "Преимущества", href: "#features" },
  { name: "Услуги", href: "#services" },
  { name: "Отзывы", href: "#reviews" },
];

const CONTACT_INFO: ContactItem[] = [
  {
    icon: (
      <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
    ),
    text: "placeholder@email.com",
    href: "mailto:placeholder@email.com",
  },
  {
    icon: (
      <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
    ),
    text: "+7 (999) 123-45-67",
    href: "tel:+79991234567",
  },
  {
    icon: <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />,
    text: "Город, Улица, 1",
  },
];

const handleScrollToAnchor = (href: string) => {
  const targetId = href.substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      handleScrollToAnchor("#hero");
    }
  };

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      console.log("Подписка оформлена на:", email);
      alert(`Спасибо за подписку, ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <LogoSection onLogoClick={handleLogoClick} />
          <NavigationSection
            items={FOOTER_NAV}
            onNavClick={handleScrollToAnchor}
          />
          <ContactSection contacts={CONTACT_INFO} />
          <NewsletterSection
            email={email}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
          />
        </motion.div>
        <BottomBar />
      </div>
    </footer>
  );
};

export default Footer;
