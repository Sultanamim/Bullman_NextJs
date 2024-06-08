"use client";
import BestSellerProducts from "@/components/product_sliders/BestSellerProducts";
import MostViewdProducts from "@/components/product_sliders/MostViewdProducts";
import ImageShowBox from "@/components/products/ImageShowBox";
import NavigationTabs from "@/components/products/NavigationTabs";
import PricingSection from "@/components/products/PricingSection";
import Specifications from "@/components/products/Specification";
import { productsExtraInfo } from "@/config";
import Breadcrumb from "@/utils/Breadcrumb";
import React, { useEffect, useState } from "react";

export default function ProductDetail(product) {
  //console.log(product);
  const Product = JSON.parse(product.searchParams.product);
  const slug = Product.name;

  return (
    <main className="px-20 bg-white">
      <Breadcrumb slug={slug} />
      {/* --------- Main --------- */}
      <div className="flex flex-row w-full mt-10">
        {/* Left Contents */}
        <div className="flex flex-col mr-10 ">
          {/* Image show box */}
          <ImageShowBox images={Product.shortImg} />
          {/* description */}
          <div className="mt-2 mb-20">
            <NavigationTabs
              slug={slug}
              desc={Product.desc}
              garantie={productsExtraInfo.garantie}
              expedition={productsExtraInfo.expedition}
              payment={productsExtraInfo.payment}
              descCard={Product.descCard}
            />
          </div>
        </div>
        {/* ----Right Contents--- */}
        <div className="flex flex-col">
          <h1 className="uppercase text-[33px] font-medium leading-[1.2em]">
            {slug}
          </h1>
          <i className="text-[#0f0f0f] text-[11px] font-medium">
            expédié sous 48h
          </i>
          {/* pricing section */}
          <PricingSection product={Product} />
          {/* extra content  */}
          <div className="flex flex-row items-center text-[#333] text-[14px] my-2 cursor-pointer">
            <i className="fa-solid fa-list mr-2"></i>
            <p>ajoutez à la liste d'envie</p>
          </div>
          {/* banner img */}
          <img src="/products/info-banner.webp" className="my-3" />
          {/* small icons */}
          <div className="flex flex-row items-center text-[#333] text-[11px] font-bold uppercase">
            <div className="flex flex-row items-center mr-5 ">
              <img
                src="/icons/expedition-icon.webp"
                className="w-[30px] h-[26px] object-contain mr-2"
              />
              <p className="">EXPÉDITION</p>
            </div>
            <div className="flex flex-row items-center mr-5 ">
              <img
                src="/icons/satisfait-icon.webp"
                className="w-[30px] h-[26px] object-contain mr-2"
              />
              <p className="">SATISFAIT OU REMBOURSÉ</p>
            </div>
            <div className="flex flex-row items-center mr-5 ">
              <img
                src="/icons/payment-icon.webp"
                className="w-[30px] h-[26px] object-contain mr-2"
              />
              <p className="">PAIEMENT SÉCURISÉ</p>
            </div>
          </div>
          {/* specification */}
          <Specifications specs={Product.specifications} />
        </div>
      </div>
      {/* -------------------------- */}
      {/* PRODUITS LES PLUS CONSULTÉS */}
      <MostViewdProducts />
      {/* MEILLEURES VENTES */}
      <BestSellerProducts />
    </main>
  );
}
