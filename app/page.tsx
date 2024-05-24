import { PromotionCard } from "@/components/Card";
import {
  BrowseByCategory,
  FlashSales,
  Hero,
  MouthBestSelling,
  NewArrival,
  Product,
  Service,
} from "@/components/Section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <MouthBestSelling />
      <PromotionCard />
      <Product />
      <NewArrival />
      <Service />
    </div>
  );
}
