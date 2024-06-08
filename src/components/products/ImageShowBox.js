"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ImageShowBox({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 5 < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex flex-row  bg-[#f9f9f9] px-6 py-5">
      <div className="flex flex-col items-center justify-center pr-10">
        <button onClick={handlePrev} className="mb-2">
          <i className="fa-solid fa-arrow-up-long text-gray-800 text-[12px] "></i>
        </button>
        {images.slice(startIndex, startIndex + 5).map((item, index) => (
          <img
            src={item}
            key={index}
            className="w-[80px] h-[80px] object-contain my-1 cursor-pointer hover:opacity-60"
            onClick={() => setSelectedImage(item)}
          />
        ))}
        <button onClick={handleNext} className="mt-2">
          <i className="fa-solid fa-arrow-down-long text-gray-800 text-[12px] "></i>
        </button>
      </div>
      <div className="relative w-[753px] h-[560px] mb-5 px-10">
        <Image
          src={selectedImage}
          alt="Selected"
          layout="fill"
          objectFit="contain"
          className="w-[743px] h-[550px]"
        />
      </div>
    </div>
  );
}
