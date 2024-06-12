"use client";
import SearchBar from "@/utils/SearchBar";
import { navbarAccountLinks, secondNavs } from "@/config";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import CartModal from "./CartModal";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredNav, setHoveredNav] = useState(null);
  const [userIconHovered, setUserIconHovered] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    if (showCart) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showCart]);

  const handleMouseEnter = (index) => {
    setHoveredNav(index);
  };

  const handleMouseLeave = () => {
    setHoveredNav(null);
  };
  const handleUserIconMouseEnter = () => {
    setUserIconHovered(true);
  };

  const handleUserIconMouseLeave = () => {
    setUserIconHovered(false);
  };

  return (
    <div className="fixed z-50 left-0 top-0 right-0 font-mada">
    <div className=" bg-white w-full h-9 flex flex-row items-center justify-end text-[15px] ">
      <a href="/content/nos-realisations" className="mx-6 hover:underline">
      Nos réalisations 
      </a>
      <a href="/" className="mx-6 hover:underline">
      Cartes Cadeau  
      </a>
      <a href="/" className="mx-6 hover:underline">
      Contactez-Nous  
      </a>
      <a href="/" className="ml-6 hover:underline mr-16">
      Statut 
      </a>
    </div>
    <div className="flex flex-col justify-center bg-black text-white pl-3 font-mada ">
      {/*---------- Top Navbar ------------- */}
      <div className="grid grid-cols-3 gap-4 px-16 py-5 smd:grid-cols-2">
        {/* Logo */}
        <a href="/" className="">
          <img
            src="/img/logo2.webp"
            alt="logo"
            className="w-[200px] h-[42.24px] "
          />
        </a>
        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* right conetnts */}
        <div className="flex flex-row items-center justify-center ml-10 smd:hidden ">
          <div className="mr-5">
            <div className="bg-navyBlue px-1 py-[3px] flex flex-row justify-center items-center">
              <p className="text-[13px]">LIVRAISON OFFERTE À PARTIR DE 500€ </p>
              <i className="fa-solid fa-chevron-right ml-2 text-[10px]"></i>
            </div>
            <div className="text-navyBlue  flex flex-row justify-center items-center my-1 cursor-pointer">
              <p className="text-[13px]">
                ET SUR UNE SÉLECTION D'ARTICLES : ICI{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <i className="fa-solid fa-unlock-keyhole mx-3 cursor-pointer text-[12px]"></i>
            {/* User account links */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={handleUserIconMouseEnter}
              onMouseLeave={handleUserIconMouseLeave}
            >
              <i className="fa-regular fa-user mx-3 text-[12px]"></i>
              {userIconHovered && (
                <div className="absolute right-0 top-[75%] bg-white text-black mt-1 shadow-lg z-50 w-[220px]">
                  {navbarAccountLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block px-4 py-3 hover:bg-[#404040] hover:text-white text-[13px] uppercase"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* cart icon */}
            <div
              className="relative cursor-pointer"
              onClick={() => setShowCart((prevOpen) => !prevOpen)}
            >
              <i className="fa-solid fa-cart-shopping ml-3 text-[12px]"></i>
              {cartItems.length > 0 ? (
                <div className="absolute top-1 left-7 font-bold  text-navyBlue rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {"("}
                  {cartItems.length}
                  {")"}
                </div>
              ) : (
                <div className="absolute top-1 left-7 font-bold  text-navyBlue rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {"("}0{")"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------- */}
      {/*---------- Bottom Navbar ------------- */}
      <div className="flex flex-row items-center pl-5">
        {secondNavs.map((navs, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`uppercase text-[16px] mx-6 py-3 px-4 ${
              navs.items ? "bg-navyBlue" : "hover:text-navyBlue"
            }`}
          >
            <a href={navs.link}>
              <p>{navs.name}</p>
            </a>
            {navs.items && hoveredNav === index && (
              <div className="absolute left-[55px] top-full bg-white text-black mt-1 shadow-lg">
                {navs.items.map((item, subIndex) => (
                  <a
                    key={subIndex}
                    href={item.link}
                    className="block px-4 py-1 my-3 tracking-[1px] text-[14px] hover:bg-navyBlue hover:text-white"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {showCart && <CartModal showCart={showCart} setShowCart={setShowCart} />}
    </div>
    </div>
  );
}
