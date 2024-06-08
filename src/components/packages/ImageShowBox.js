"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ImageShowBox({ images }) {
  return (
    <div className="flex flex-row bg-[#f9f9f9] px-28 ">
      <img
        src={images}
        alt="Selected"
        //layout="fill"
        objectFit="contain"
        className="w-[680px] h-[550px]"
      />
    </div>
  );
}
