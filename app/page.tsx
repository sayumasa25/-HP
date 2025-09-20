import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ShoppingSection } from "@/components/ShoppingSection";
import { NewsSection } from "@/components/NewsSection";
import { BrandsSection } from "@/components/BrandsSection";
import { getHeroImage, getCollections, getNews } from "@/lib/microcms";
import { SNSIcons } from "@/components/SNSIcons";

export default async function Home() {
  // microCMSからヒーロー画像、コレクション、ニュースを取得
  const heroImageData = await getHeroImage();
  const collectionsData = await getCollections();
  const newsData = await getNews();

  return (
    <main>
      <HeroSection heroImageData={heroImageData} collectionsData={collectionsData} />
      <AboutSection />
      <ShoppingSection />
      <NewsSection newsData={newsData} />
      <BrandsSection />
      <SNSIcons />
    </main>
  );
}
