import React from "react";

export default function DescCard({ image, title, desc }) {
  return (
    <div className="flex flex-col h-[580px]">
      <img className="w-[403px] h-[403px]" src={image} />
      <p className="font-semibold text-[16px] underline uppercase text-inherit leading-[28px] my-3">
        {title}
      </p>
      <p className="font-semibold text-[16px] text-inherit leading-[28px]">
        {desc}
      </p>
    </div>
  );
}
