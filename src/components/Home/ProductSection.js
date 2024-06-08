import { products } from "@/config";
import Headings from "@/utils/Headings";
import ProductImageCard from "@/utils/ProductImageCard";
import React from "react";

export default function ProductSection() {
  return (
    <div className="flex flex-col items-start w-full mb-10">
      <div className="flex flex-row justify-between items-center w-full pr-10">
        <Headings title={"NOTRE SÉLECTION"} />
        <div className="flex flex-row items-center">
          <a
            href="#"
            className="bg-[#31559317] border-b-2 border-[#315593] p-[10px] mx-1 text-[16px] hover:border-b-2 hover:border-[#315593]"
          >
            BEST-SELLERS
          </a>
          <a
            href="#"
            className="p-[10px] mx-1 text-[16px] hover:border-b-2 border-[#315593]"
          >
            DISQUES
          </a>
          <a
            href="#"
            className="p-[10px] mx-1 text-[16px] hover:border-b-2 border-[#315593]"
          >
            HALTÈRES & KETTLEBELLS
          </a>
          <a
            href="#"
            className="p-[10px] mx-1 text-[16px] hover:border-b-2 border-[#315593]"
          >
            MACHINES & ERGOS
          </a>
          <a
            href="#"
            className="p-[10px] mx-1 text-[16px] hover:border-b-2 border-[#315593]"
          >
            BARRES
          </a>
          <a
            href="#"
            className="p-[10px] mx-1 text-[16px] hover:border-b-2 border-[#315593]"
          >
            LIVRAISON OFFERTE
          </a>
        </div>
      </div>
      <div className="flex flex-row w-full items-center justify-center">
        <div className="grid grid-cols-4 gap-4 items-center px-8">
          {products.map((item, index) => (
            <ProductImageCard
              key={index}
              primaryImg1={item.primaryImg1}
              primaryImg2={item.primaryImg2}
              name={item.name}
              category={item.category}
              price={item.price}
              product={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
