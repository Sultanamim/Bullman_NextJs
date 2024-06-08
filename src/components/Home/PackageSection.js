"use client";
import React, { useEffect, useState, useRef } from "react";
import Headings from "@/utils/Headings";
import { packages } from "@/config";
import Link from "next/link";

export default function PackageSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsToShow = 4;
  const timeoutRef = useRef(null);

  // Duplicate the first 4 items and append them to the end
  const extendedPackages = [...packages, ...packages.slice(0, itemsToShow)];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const prevSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? packages.length - 1 : prevCurrent - 1
    );
  };

  const nextSlide = () => {
    if (current === packages.length) {
      // If we are at the duplicate slide, instantly jump back to the start
      setCurrent(0);
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 20); // This small delay allows the jump to happen seamlessly
    } else {
      setCurrent((prevCurrent) => prevCurrent + 1);
    }
  };

  return (
    <div className="flex flex-col items-start w-full mb-10">
      <Headings title={"NOS PACKS"} />
      <div className="relative w-full overflow-hidden mt-[-3rem]">
        <div
          className={`flex transition-transform duration-500 ${
            isTransitioning ? "transition-none" : ""
          }`}
          style={{
            transform: `translateX(-${current * (100 / itemsToShow)}%)`,
          }} // Adjust to move one card at a time
        >
          {extendedPackages.map((pkg, index) => (
            <Link
              href={{
                pathname: `/package-shop/${pkg.title}`,
                query: { product: JSON.stringify(pkg) },
              }}
              key={pkg.id || index}
              className="w-1/4 flex-shrink-0 p-4"
            >
              {" "}
              {/* Show 4 cards at a time */}
              <div className="flex flex-col">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="transition-transform duration-300 transform hover:scale-105"
                />
                <div className="text-left mt-[-15px]">
                  <h3 className="text-[14px] font-medium">{pkg.title}</h3>
                  <p className="text-[15px] font-bold text-gray-700">
                    {pkg.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full"
          onClick={prevSlide}
        >
          <i className="fa-solid fa-arrow-left-long text-gray-300 text-[28px]"></i>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full"
          onClick={nextSlide}
        >
          <i className="fa-solid fa-arrow-right-long text-gray-300 text-[28px]"></i>
        </button>
      </div>
    </div>
  );
}
