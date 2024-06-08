import BestSellerProducts from "@/components/product_sliders/BestSellerProducts";
import MostViewdProducts from "@/components/product_sliders/MostViewdProducts";
import { products } from "@/config";

export default function contentLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col font-mada">
      {children}
      <div className="px-[70px]">
        {/* PRODUITS LES PLUS CONSULTÉS */}
        <MostViewdProducts />
        {/* MEILLEURES VENTES */}
        <BestSellerProducts />
      </div>
    </div>
  );
}
