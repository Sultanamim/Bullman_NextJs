import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className=" flex flex-row items-center justify-between px-5 h-[45px] border border-white rounded-[25px] mx-3">
      <input
        placeholder="Search..."
        value={value}
        onChange={onChange}
        className="text-white bg-black border-0 focus:outline-none placeholder-gray-400"
      />
      {value !== "" ? (
        <>
          {/* rotate icon */}
          <i class="fa-solid fa-rotate text-[20px] text-gray-400 animate-spin"></i>
        </>
      ) : (
        <>
          {/* search icon */}
          <i className="fa-solid fa-magnifying-glass text-[20px]"></i>
        </>
      )}
    </div>
  );
}
