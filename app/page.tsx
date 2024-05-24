import { PromotionCard } from "@/components/Card";
import {
  BrowseByCategory,
  FlashSales,
  Hero,
  MouthBestSelling,
  NewArrival,
  Products,
} from "@/components/Section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <MouthBestSelling />
      <PromotionCard />
      <Products />
      <NewArrival />
    </div>
  );
}
