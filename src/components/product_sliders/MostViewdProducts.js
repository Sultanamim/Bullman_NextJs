"use client";
import { products } from "@/config";
import Headings from "@/utils/Headings";
import ProductImageCard from "@/utils/ProductImageCard";
import React, { useEffect, useRef, useState } from "react";

export default function MostViewdProducts() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsToShow = 4;
  const timeoutRef = useRef(null);

  const extendedProducts = [...products, ...products.slice(0, itemsToShow)];

  const prevSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? products.length - 1 : prevCurrent - 1
    );
  };

  const nextSlide = () => {
    if (current === products.length) {
      setCurrent(0);
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 20);
    } else {
      setCurrent((prevCurrent) => prevCurrent + 1);
    }
  };
  return (
    <div className="flex flex-col items-start w-full mb-10">
      <div className="flex flex-row items-center justify-between w-full">
        <Headings title={"PRODUITS LES PLUS CONSULTÉS"} />
        {/* Arrow Buttons */}
        <div className="flex flex-row items-center mr-5">
          <button
            className="px-2 py-[6px] mr-2 bg-white shadow-md "
            onClick={prevSlide}
          >
            <i className="fa-solid fa-arrow-left-long text-gray-500 text-[20px] "></i>
          </button>
          <button
            className="px-2 py-[6px] bg-white shadow-md"
            onClick={nextSlide}
          >
            <i className="fa-solid fa-arrow-right-long text-gray-500 text-[20px]"></i>
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden mt-[-3rem]">
        <div
          className={`flex transition-transform duration-500 ${
            isTransitioning ? "transition-none" : ""
          }`}
          style={{
            transform: `translateX(-${current * (100 / itemsToShow)}%)`,
          }} // Adjust to move one card at a time
        >
          {extendedProducts.map((item, index) => (
            <div key={index} className="w-1/4 flex-shrink-0 p-4">
              {" "}
              <ProductImageCard
                primaryImg1={item.primaryImg1}
                primaryImg2={item.primaryImg2}
                name={item.name}
                category={item.category}
                price={item.price}
                product={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
