import {
  footerAccountLinks,
  footerInfoLinks,
  paymentCardImg,
  topFooterElements,
} from "@/config";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black py-5 flex flex-col text-white font-mada z-20 ">
      {/* Top Footer */}
      <div className="flex flex-row flex-wrap items-center justify-between px-24 py-2 pb-4 border-b border-[#363636] mb-3">
        {topFooterElements.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="flex flex-col items-center cursor-pointer mx-3"
          >
            <img src={item.image} alt="" className="w-[56px] h-[58px] mb-3 " />
            <p className="text-[14px] uppercase mb-2">{item.title}</p>
            <p className="text-[12px] text-[#7a7a7a]">{item.desc}</p>
          </a>
        ))}
      </div>
      {/* -------------------- */}
      {/* Middle content */}
      <div className="flex flex-row flex-wrap items-start px-24">
        {/* Information */}
        <div className="flex flex-col mx-3">
          <p className="text-[17px] font-bold uppercase my-2 tracking-[2px]">
            Information
          </p>
          {footerInfoLinks.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="text-[14px] my-2 font-medium hover:text-[#7a7a7a]"
            >
              {item.title}
            </a>
          ))}
        </div>
        {/* Account */}
        <div className="flex flex-col mx-32">
          <p className="text-[17px] font-bold uppercase my-2 tracking-[2px]">
            MON COMPTE
          </p>
          {footerAccountLinks.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="text-[14px] my-2 font-medium hover:text-fade "
            >
              {item.title}
            </a>
          ))}
        </div>
        {/* Conatact Info */}
        <div className="flex flex-col mx-8">
          <p className="text-[17px] font-bold uppercase my-2 tracking-[2px]">
            Contact
          </p>
          <div className="flex flex-row items-center my-2">
            <i className="fa-regular fa-envelope text-[18px] text-fade mr-2"></i>
            <p className="text-[14px] font-medium">contact@bullman.fr</p>
          </div>
          <div className="flex flex-row items-center my-2">
            <i className="fa-brands fa-whatsapp text-[18px] text-fade mr-2"></i>
            <p className="text-[14px] font-medium">bullman_team</p>
          </div>
          <div className="flex flex-row items-center my-2">
            <i className="fa-solid fa-phone text-[18px] text-fade mr-2"></i>
            <p className="text-[14px] font-medium">+33 1 87 66 45 30</p>
          </div>
        </div>
        {/* Social Media */}
        <div className="flex flex-col  ml-24 ">
          <p className="text-[17px] font-bold uppercase my-2 tracking-[2px]">
            SUIVEZ-NOUS
          </p>
          <div className="border border-white rounded-[25px] px-5 w-[420px] py-2 flex flex-row items-center justify-between">
            <input
              placeholder="E-mail"
              className="text-white w-[320px] bg-black border-0 focus:outline-none placeholder-gray-400"
            />
            <i className="fa-solid fa-arrow-right-long text-fade"></i>
          </div>
          <div className=" flex flex-row items-center mt-10 ">
            <div className="border-[4px] border-white px-[16px] py-3 mx-[2px]  ">
              <i className="fa-brands fa-instagram text-[22px]"></i>
            </div>
            <div className="border-[4px] border-white px-[16px] py-3 mx-[2px] ">
              <i className="fa-brands fa-whatsapp text-[22px]"></i>
            </div>
            <div className="border-[4px] border-white px-[16px] py-3 mx-[2px] ">
              <i className="fa-brands fa-linkedin-in text-[22px]"></i>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------- */}
      {/* Bottom content */}
      <div className="grid grid-cols-3 gap-5 px-24 mt-16">
        <div className="text-[#a7a7a7] text-[14px] ml-10">
          © 2020-2023 Bullman Equipment. All Rights Reserved.
        </div>
        <div className="text-[#d4d4d4] ml-10 text-[13px] font-medium tracking-[2px]">
          PAIEMENT 100% SÉCURISÉ
        </div>
        <div className="flex flex-row items-center">
          {paymentCardImg.map((item, index) => (
            <img
              src={item.image}
              key={index}
              className="w-[30px] h-[24px] mx-2 "
            />
          ))}
          <img
            src="/img/payment-card-8.webp"
            className="w-[70px] h-[16px] mx-2 "
          />
        </div>
      </div>
      {/* -------------------- */}
    </div>
  );
}
