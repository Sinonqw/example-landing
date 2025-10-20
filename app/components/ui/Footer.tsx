'use client'
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';

const footerNav = [
  { name: 'Главная', href: '#hero' },
  { name: 'Преимущества', href: '#features' },
  { name: 'Услуги', href: '#services' },
  { name: 'Отзывы', href: '#reviews' },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleScrollToAnchor = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      console.log('Подписка оформлена на:', email);
      alert(`Спасибо за подписку, ${email}!`);
      setEmail('');
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Column 1: Logo and Description */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <a
              href="/"
              onClick={(e) => {
                if (typeof window !== 'undefined' && window.location.pathname === '/') {
                  e.preventDefault();
                  handleScrollToAnchor('#hero');
                }
              }}
              className="text-3xl font-bold text-gray-900 mb-4 block hover:text-blue-600 transition-colors duration-300"
            >
              [Лого] **Проект**
            </a>
            <p className="text-gray-600 leading-relaxed mb-6">
              Универсальное агентство для любых ваших цифровых нужд. Мы строим будущее вместе.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <div className="w-5 h-5 bg-gray-600 group-hover:bg-white rounded-sm transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">Навигация</h4>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToAnchor(item.href);
                    }}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">Связь</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:placeholder@email.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-start gap-3 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>placeholder@email.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+79991234567"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-start gap-3 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+7 (999) 123-45-67</span>
                </a>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Город, Улица, 1</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">Подписка</h4>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Получайте наши последние новости, инсайты и обновления прямо на почту.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Ваш Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit();
                    }
                  }}
                  className="w-full px-4 py-3 pr-12 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                />
                <button
                  onClick={handleSubmit}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>
              © {new Date().getFullYear()} <span className="font-semibold text-gray-900">Название Проекта</span>. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Политика Конфиденциальности
              </a>
              <a
                href="/terms"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Условия Использования
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;