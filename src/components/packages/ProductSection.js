import Link from "next/link";
import React from "react";

export default function ProductSection({ products }) {
  return (
    <div className="flex flex-col items-start">
      {products.map((item, index) => (
        <Link
          href={{
            pathname: `/shop/${item.name}`,
            query: { product: JSON.stringify(item) },
          }}
          key={item.id || index}
          className="flex flex-row items-center"
        >
          <div className="flex flex-row items-center border-r-2 border-[#ebebeb] py-3 px-2">
            <img
              src={item.primaryImg1}
              className="w-[55px] h-[55px] border border-[#ebebeb] mr-2"
            />
            <p className="text-[14px] px-5 text-left font-medium w-[250px]">
              {item.name}
            </p>
            <p className="text-[16px] px-5 text-left font-bold w-[100px]">
              {item.price} €
            </p>
          </div>
          <p className="text-[16px] font-medium px-2">x {item.quantity}</p>
        </Link>
      ))}
    </div>
  );
}
