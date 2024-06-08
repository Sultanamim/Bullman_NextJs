import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CartProductSlider from "./CartProductSlider";

export default function CartModal({ showCart, setShowCart }) {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [totalWithoutVAT, setTotalWithoutVAT] = useState(0);
  const [totalVAT, setTotalVAT] = useState(0);
  const [totalWithVAT, setTotalWithVAT] = useState(0);

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.id] = 1; // Assuming initial quantity is 1 for all items
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  const increaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]:
        (prevQuantities[itemId] || 1) > 1 ? prevQuantities[itemId] - 1 : 1,
    }));
  };

  useEffect(() => {
    calculateTotals();
  }, [quantities, cartItems]);

  const calculateTotals = () => {
    let totalWithoutVAT = 0;
    let totalVAT = 0;
    let totalWithVAT = 0;

    cartItems.forEach((item) => {
      const itemTotal = parseInt(item.price) * quantities[item.id];
      totalWithoutVAT += itemTotal;
    });

    totalVAT = totalWithoutVAT * 0.2; // Assuming 20% VAT
    totalWithVAT = totalWithoutVAT + totalVAT;

    setTotalWithoutVAT(totalWithoutVAT.toFixed(2));
    setTotalVAT(totalVAT.toFixed(2));
    setTotalWithVAT(totalWithVAT.toFixed(2));
  };

  return (
    <div
      className={`fixed bg-white w-[440px] h-full top-0 right-0 text-black z-50 p-[10px] flex flex-col`}
    >
      {/* Top content */}
      <div className="flex-shrink-0 flex flex-row items-center justify-between bg-navyBlue text-white p-[10px] z-50">
        <p className="uppercase font-bold text-[20px]">PANIER</p>
        <img
          src="/icons/close.png"
          className="w-[26px] h-[26px] hover-spin cursor-pointer"
          onClick={() => setShowCart((prevOpen) => !prevOpen)}
        />
      </div>
      {/* Cart Items */}
      <div className="flex-grow overflow-y-auto mt-2">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-row items-center bg-white shadow-lg border border-[#315593] p-[10px] mt-2"
            >
              <i
                className="fa-solid fa-xmark absolute top-2 right-2 text-[#333] text-[14px] cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              ></i>
              <Link
                href={
                  item.product.products
                    ? {
                        pathname: `/package-shop/${item.name}`,
                        query: { product: JSON.stringify(item.product) },
                      }
                    : {
                        pathname: `/shop/${item.name}`,
                        query: { product: JSON.stringify(item.product) },
                      }
                }
              >
                <img
                  src={item.image}
                  className="w-[77px] h-[100px] object-contain hover:scale-110"
                />
              </Link>
              <div className="flex flex-col mx-5">
                <Link
                  href={
                    item.product.products
                      ? {
                          pathname: `/package-shop/${item.name}`,
                          query: { product: JSON.stringify(item.product) },
                        }
                      : {
                          pathname: `/shop/${item.name}`,
                          query: { product: JSON.stringify(item.product) },
                        }
                  }
                >
                  <p className="text-[#333] text-[14px] mb-3">{item.name}</p>
                </Link>
                <div className="flex flex-row h-[35px] items-center">
                  <div className="border px-5 py-[5px] flex items-center justify-center">
                    {quantities[item.id]}
                  </div>
                  {console.log(quantities[item.id])}
                  <div className="flex flex-col">
                    <i
                      className="fa-solid fa-chevron-up text-[10px] leading-[8px] border py-1 px-3 cursor-pointer"
                      onClick={() => increaseQuantity(item.id)}
                    ></i>
                    <i
                      className="fa-solid fa-chevron-down text-[10px] leading-[8px] border py-1 px-3 cursor-pointer"
                      onClick={() => decreaseQuantity(item.id)}
                    ></i>
                  </div>
                  <p className="text-[20px] font-bold ml-3">
                    {(parseInt(item.price) * quantities[item.id]).toFixed(2)} €
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-[10px] flex flex-row items-center w-full bg-[#D7E9FF] mt-4 border-l-[6px] border-[#b9d8fe] ">
            <p className="text-[#606a7b] px-2 py-[6px] font-[500] text-[16px] ">
              Votre panier est vide
            </p>
          </div>
        )}
        {cartItems.length > 0 ? (
          <>
            {/* Prices */}
            <div className="flex flex-col text-[16px] text-[#444] mt-14 font-medium mx-5 leading-[28px] ">
              <div className="flex flex-row items-center justify-between border-b border-[#d2d2d2] py-[3px] mb-[10px]">
                <p>Livraison :</p>
                <p className="font-[800]">Gratuit</p>
              </div>
              <div className="flex flex-row items-center justify-between border-b border-[#d2d2d2] py-[3px] mb-[10px]">
                <p>TVA :</p>
                <p className="font-[800]">{totalVAT} €</p>
              </div>
              <div className="flex flex-row items-center justify-between border-b border-[#d2d2d2] py-[3px] mb-[10px]">
                <p>Total HT :</p>
                <p className="font-[800]">{totalWithoutVAT} €</p>
              </div>
              <div className="flex flex-row items-center justify-between border-b border-[#d2d2d2] py-[3px] mb-[10px]">
                <p>Total TTC :</p>
                <p className="font-[800]">{totalWithVAT} €</p>
              </div>
            </div>
            {/* product slider */}
            <CartProductSlider />
          </>
        ) : null}
      </div>
      {cartItems.length > 0 ? (
        <>
          {/* Bottom content */}
          <div className="flex-shrink-0 bg-[#f0efef] flex flex-row items-center justify-between -mb-[4px]">
            <button className="w-[65%] text-[1rem] font-medium tracking-[.1em] py-[13px] px-[15px] bg-navyBlue hover:bg-darkSlate text-white border-2 border-[#000] m-1">
              Commander
            </button>
            <div className="px-[7px] text-center">
              <p className="text-[15px] text-[#444] font-medium leading-[16px]">
                Total de la commande
              </p>
              <p className="text-[15px] text-[#444] font-[900]">
                {totalWithVAT} €
              </p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
