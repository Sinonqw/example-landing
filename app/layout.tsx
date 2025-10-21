import type { Metadata } from "next";
// Важно: если Geist не установлен, могут быть проблемы.
// Предполагаем, что установка шрифтов через next/font корректна.
import { Geist_Mono } from "next/font/google"; // Используем Geist_Mono из Google Fonts как пример
import "./globals.css";
import Header from "./components/Sections/Header/Header";
import Footer from "./components/Sections/Footer/Footer";

// Инициализируем Geist (предполагая, что это локальный шрифт, как часто бывает)

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Обновленные метаданные
export const metadata: Metadata = {
  title: "Название Проекта - Ваш Идеальный Заголовок",
  description:
    "Краткое и привлекательное описание проекта для поисковых систем.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Применяем переменные шрифтов к тегу html
    <html lang="ru" className={` ${geistMono.variable}`}>
      {/* Применяем класс 'font-sans' к тегу body.
        Это гарантирует, что основной шрифт (который мы настроим в Tailwind) будет Geist Sans.
        Добавляем min-h-screen и flex-col для правильного прилипания Footer к низу.
      */}
      <body className="font-sans min-h-screen flex flex-col antialiased text-foreground bg-background">
        <Header />
        {/* Main content area that grows to push the footer down */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
