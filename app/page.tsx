import Hero from "./components/Sections/Hero/Hero";
import Features from "./components/Sections/Features/Features";
import Services from "./components/Sections/Services/Services";
import Testimonials from "./components/Sections/Testimonials/Testimonials";
import CTASection from "./components/Sections/CTAsection/CTAsection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <CTASection  />
    </>
  );
}
