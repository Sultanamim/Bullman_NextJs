import React, { useState } from "react";
import DescCard from "./DescCard";

export default function NavigationTabs({
  desc,
  garantie,
  expedition,
  payment,
  slug,
  descCard,
}) {
  const [activeTab, setActiveTab] = useState("description");

  const Description = (
    <div className="">
      {desc.map((item, index) => (
        <div className="my-6" key={index}>
          <p className="text-[16px] text-black leading-[28px] font-medium">
            <span className="underline">{item.title}</span> {item.desc}
          </p>
        </div>
      ))}
      <div className="grid grid-cols-2 gap-3 justify-between items-center">
        {descCard?.map((item, index) => (
          <DescCard image={item.image} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
  const Garantie = (
    <div className="my-4">
      {garantie.map((item, index) => (
        <div className="" key={index}>
          <p className="text-[16px] text-black leading-[28px] font-medium">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
  const Expedition = (
    <div className="">
      {expedition.map((item, index) => (
        <div className="my-6" key={index}>
          <p className="font-semibold text-[16px] mb-3">{item.title1}</p>{" "}
          {item.desc}
          {item.desc1.map((des, index) => (
            <p
              className="text-[16px] text-black leading-[28px] font-medium"
              key={index}
            >
              {des}
            </p>
          ))}
          <p className="font-medium text-[16px] mt-4">{item.title2}</p>{" "}
          {item.desc2.map((des, index) => (
            <p
              className="text-[16px] text-black leading-[28px] font-medium"
              key={index}
            >
              {des}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
  const Payment = (
    <div className="">
      {payment.map((item, index) => (
        <div className="my-6" key={index}>
          <p className="text-[16px] text-black leading-[28px] font-medium">
            {item.title}
          </p>
          {item.desc.map((des, index) => (
            <p
              className="text-[16px] text-black leading-[28px] font-medium"
              key={index}
            >
              {des}
            </p>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-[850px]">
      <div className="flex">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-[15px] font-semibold border-b-[3.5px] hover:border-[#315593] py-2 text-center ${
            activeTab === "description"
              ? "border-b-[3.5px] border-[#315593] text-[#333]"
              : "text-[#333] border-transparent"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("garantie")}
          className={`px-[15px] font-semibold border-b-[3.5px] hover:border-[#315593] py-2 text-center ${
            activeTab === "garantie"
              ? "border-b-[3.5px] border-[#315593] text-[#333]"
              : "text-[#333] border-transparent"
          }`}
        >
          Garantie BULLMAN
        </button>
        <button
          onClick={() => setActiveTab("expedition")}
          className={`px-[15px] font-semibold border-b-[3.5px] hover:border-[#315593] py-2 text-center ${
            activeTab === "expedition"
              ? "border-b-[3.5px] border-[#315593] text-[#333]"
              : "text-[#333] border-transparent"
          }`}
        >
          Expédition
        </button>
        <button
          onClick={() => setActiveTab("payment")}
          className={`px-[15px] font-semibold border-b-[3.5px] hover:border-[#315593] py-2 text-center ${
            activeTab === "payment"
              ? "border-b-[3.5px] border-[#315593] text-[#333]"
              : "text-[#333] border-transparent"
          }`}
        >
          Paiement sécurisé
        </button>
      </div>
      {/* tab-contents */}
      <div className="py-4">
        {activeTab === "description" && (
          <div>
            <h2 className="text-[16px] font-semibold mb-2 uppercase">{slug}</h2>
            {Description}
          </div>
        )}
        {activeTab === "garantie" && (
          <div>
            <h2 className="text-[16px] font-semibold mb-2 uppercase">
              GARANTIE À VIE
            </h2>
            {Garantie}
          </div>
        )}
        {activeTab === "expedition" && (
          <div>
            <h2 className="text-[16px] font-semibold mb-2 uppercase">
              Expédition
            </h2>
            {Expedition}
          </div>
        )}
        {activeTab === "payment" && (
          <div>
            <h2 className="text-[16px] font-semibold mb-2 uppercase">
              Paiement sécurisé
            </h2>
            {Payment}
          </div>
        )}
      </div>
    </div>
  );
}
