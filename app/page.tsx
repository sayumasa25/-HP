import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ShoppingSection } from "@/components/ShoppingSection";
import { NewsSection } from "@/components/NewsSection";
import { BrandsSection } from "@/components/BrandsSection";
import { SNSIcons } from "@/components/SNSIcons";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ShoppingSection />
      <NewsSection />
      <BrandsSection />
      <SNSIcons />
    </main>
  );
}
