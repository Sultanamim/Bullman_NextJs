import CategorySection from "@/components/Home/CategorySection";
import HeroSection from "@/components/Home/HeroSection";
import PackageSection from "@/components/Home/PackageSection";
import ProductSection from "@/components/Home/ProductSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start font-mada">
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <PackageSection />
    </main>
  );
}
