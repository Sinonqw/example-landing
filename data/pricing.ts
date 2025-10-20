import { PricePlan } from "@/types/pricing";
const PRICING_DATA: PricePlan[] = [
  {
    name: 'Пакет "Старт"',
    price: "999 ₽",
    period: "/мес.",
    isRecommended: false,
    ctaText: 'Выбрать "Старт"',
    ctaLink: "#",
    features: [
      { text: "Базовый функционал А", isIncluded: true },
      { text: "Ограниченная поддержка", isIncluded: true },
      { text: "Без кастомизации", isIncluded: false },
    ],
  },
  {
    name: 'Пакет "Профи"',
    price: "2 999 ₽",
    period: "/мес.",
    isRecommended: true,
    ctaText: 'Выбрать "Профи"',
    ctaLink: "#",
    features: [
      { text: "Полный функционал А, Б, В", isIncluded: true },
      { text: "Приоритетная поддержка", isIncluded: true },
      { text: "Базовая кастомизация", isIncluded: true },
    ],
  },
  {
    name: 'Пакет "Бизнес"',
    price: "Индивидуально",
    period: "",
    isRecommended: false,
    ctaText: "Обсудить решение",
    ctaLink: "#",
    features: [
      { text: "Все возможности Профи", isIncluded: true },
      { text: "Персональный менеджер", isIncluded: true },
      { text: "Полная интеграция и API", isIncluded: true },
    ],
  },
];

export default PRICING_DATA;
