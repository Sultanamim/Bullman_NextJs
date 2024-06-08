import { categoryImage } from "@/config";
import Headings from "@/utils/Headings";
import React from "react";

export default function CategorySection() {
  return (
    <div className="flex flex-col items-start w-full mb-10">
      <Headings title={"ACHETEZ PAR CATÉGORIES"} />
      <div className="flex flex-row w-full items-center justify-center">
        <div className="grid grid-cols-4 gap-0 items-center px-8">
          {categoryImage.map((item, index) => (
            <a href={item.link} key={index}>
              <img src={item.image} className="w-[364px] h-[318px]" />
              <p className="text-[16px] font-mada font-bold uppercase text-center">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
