import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <EventsSection />
      <ContactForm />
      {/* 今後追加予定のコンポーネント:
          - BrandsGrid
          - ProductCarousel  
      */}
    </main>
  );
}
