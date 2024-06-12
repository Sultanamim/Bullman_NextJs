"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ProductImageCard({
  product,
  primaryImg1,
  primaryImg2,
  name,
  price,
}) {
  const [hoverPosition, setHoverPosition] = useState(null);

  const handleMouseMove = (e) => {
    if (primaryImg2) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;

      setHoverPosition(x < width / 2 ? "left" : "right");
    }
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
    <Link
      href={{
        pathname: `/shop/${name}`,
        query: { product: JSON.stringify(product) },
      }}
      className="mb-10"
    >
      {/* image card */}
      <div
        className={`relative group overflow-hidden ${
          primaryImg2 ? "" : "hover:scale-105 transition-transform duration-300"
        }`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={
            hoverPosition === "right" && primaryImg2 ? primaryImg2 : primaryImg1
          }
          alt="Product"
          layout="responsive"
          width={500} // You can adjust the width and height according to your needs
          height={500}
          className={`w-full h-auto transition-transform duration-300 mb-3 ${
            primaryImg2 ? "" : "group-hover:scale-110"
          }`}
        />
        {/* <img
          src={
            hoverPosition === "right" && primaryImg2 ? primaryImg2 : primaryImg1
          }
          alt="Product"
          className={`w-full h-auto transition-transform duration-300 ${
            primaryImg2 ? "" : "group-hover:scale-110"
          }`}
        /> */}
        {primaryImg2 && (
          <div
            className={`absolute bottom-0 left-0 w-full flex ${
              hoverPosition === "left" || hoverPosition === "right"
                ? "w-full h-1 bg-gray-300"
                : ""
            }`}
          >
            <div
              className={`transition-all duration-300 ${
                hoverPosition === "left"
                  ? "w-1/2 h-1 bg-gray-400"
                  : "w-1/2 h-1 "
              }`}
            ></div>
            <div
              className={`transition-all duration-300 ${
                hoverPosition === "right"
                  ? "w-1/2 h-1 bg-gray-400"
                  : "w-1/2 h-1 "
              }`}
            ></div>
          </div>
        )}
      </div>
      {/* ----- */}
      <h3 className="text-[14px] font-medium mt-5">{name}</h3>
      <p className="text-[15px] font-bold">{price} €</p>
    </Link>
  );
}
