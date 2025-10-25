import SectionHeader from "./components/SectionHeader";
import TestimonialsGrid from "./components/TestimonialsGrid";
import { TestimonialData } from "@/types/testimonials";

const TESTIMONIALS_DATA: TestimonialData[] = [
  {
    id: 1,
    rating: 5,
    quote:
      "Це найкращий сервіс, який ми коли-небудь використовували! Чиста робота, професійний підхід та неймовірна швидкість виконання завдань. Дуже рекомендую.",
    name: "Олексій Петров",
    title: 'Директор з розвитку, ТОВ "Інновація"',
    avatarUrl: "/avatars/client1.jpg",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "Ми змогли масштабувати наш бізнес завдяки їхнім консультаціям. Дуже глибока експертиза та чітке дотримання плану. Обов'язково звернемося знову!",
    name: "Марія Сидорова",
    title: 'Власниця, Стартап "Техно-Буст"',
    avatarUrl: "/avatars/client2.jpg",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Їхній підхід до дизайну просто чудовий. Вони вловили нашу ідею з півслова та перевершили всі очікування. Ідеальна співпраця.",
    name: "Дмитро Козлов",
    title: "Провідний маркетолог, Creative Agency",
    avatarUrl: "/avatars/client3.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Що говорять наші клієнти"
          description="Відгуки реальних людей, які довірилися нам"
        />
        <TestimonialsGrid testimonials={TESTIMONIALS_DATA} />
      </div>
    </section>
  );
};

export default Testimonials;
