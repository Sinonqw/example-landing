import SectionHeader from "./components/SectionHeader";
import TestimonialsGrid from "./components/TestimonialsGrid";
import { TestimonialData } from "@/types/testimonials";

const TESTIMONIALS_DATA: TestimonialData[] = [
  {
    id: 1,
    rating: 5,
    quote:
      "Это лучший сервис, который мы когда-либо использовали! Чистая работа, профессиональный подход и невероятная скорость выполнения задач. Очень рекомендую.",
    name: "Алексей Петров",
    title: 'Директор по развитию, ООО "Инновация"',
    avatarUrl: "/avatars/client1.jpg",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "Мы смогли масштабировать наш бизнес благодаря их консультациям. Очень глубокая экспертиза и четкое следование плану. Обязательно обратимся снова!",
    name: "Мария Сидорова",
    title: 'Владелец, Стартап "Техно-Буст"',
    avatarUrl: "/avatars/client2.jpg",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Их подход к дизайну просто великолепен. Они уловили нашу идею с полуслова и превзошли все ожидания. Идеальное сотрудничество.",
    name: "Дмитрий Козлов",
    title: "Ведущий маркетолог, Creative Agency",
    avatarUrl: "/avatars/client3.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Что говорят наши клиенты"
          description="Отзывы реальных людей, которые доверились нам"
        />
        <TestimonialsGrid testimonials={TESTIMONIALS_DATA} />
      </div>
    </section>
  );
};

export default Testimonials;
