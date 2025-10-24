import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Sections/Header/Header";
import Footer from "./components/Sections/Footer/Footer";
import { ReduxProvider } from "./store/Provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    <html lang="ru" className={` ${geistMono.variable}`}>
      <body className="font-sans min-h-screen flex flex-col antialiased text-foreground bg-background">
        <ReduxProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
