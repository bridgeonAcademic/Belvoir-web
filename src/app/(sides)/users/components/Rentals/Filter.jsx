"use client";
import React, { useState } from "react";
import { MoreVertical, X } from "lucide-react"; // Three-dot menu & close icon

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex flex-col p-6 bg-white w-[250px] rounded-[30px] shadow-custom font-sans pt-7 border-y-8 border-[#0E0E25]">
        <FilterContent />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-3/4 sm:w-1/2 bg-white h-full p-4 shadow-lg transform translate-x-0 transition-transform">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
              <X size={24} />
            </button>

            <FilterContent />
          </div>
        </div>
      )}
    </>
  );
};

const FilterContent = () => {
  return (
    <>
      <div className="mb-6">
        <label className="block text-m font-semibold text-gray-800">Gender</label>
        <div className="flex flex-col mt-2 space-y-3">
        {["Male", "Female"].map((item) => (
          <label key={item} className="inline-flex items-center text-gray-700 ">
            <input
              type="radio"
              name="gender"
              className="h-5 w-5 appearance-none rounded-full border-2 border-black focus:ring-0 checked:bg-black checked:border-black checked:before:content-['✔'] checked:before:text-white checked:before:text-sm checked:before:font-bold checked:before:flex checked:before:justify-center"
            />
            <span className="ml-3 text-[15px]">{item}</span>
          </label>
        ))}
      </div>
      </div>

      <div className="mb-6">
        <label className="block text-m font-semibold text-gray-800">Price</label>
        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          className="mt-2 w-full h-3 bg-gray-200 rounded-lg cursor-pointer accent-black"
        />
      </div>

      <div className="mb-6">
        <label className="block text-m font-semibold text-gray-800">Garment Type</label>
        <div className="flex flex-col mt-2 space-y-3">
          {["Tops","Bottoms"].map((color) => (
            <label key={color} className="inline-flex items-center text-gray-700">
              <input
                type="radio"
                name="garmentype"
                className="h-5 w-5 appearance-none rounded-full border-2 border-black focus:ring-0 checked:bg-black checked:border-black checked:before:content-['✔'] checked:before:text-white checked:before:text-sm checked:before:font-bold checked:before:flex checked:before:justify-center"
                />
              <span className="ml-3 text-[15px]">{color}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-m font-semibold text-gray-800">Fabric Type</label>
        <div className="flex flex-col mt-2 space-y-3">
          {["Cotton", "Silk", "Synthetic", "Wool"].map((material) => (
            <label key={material} className="inline-flex items-center text-gray-700">
              <input
                type="radio"
                name="fabrictype"
                className="h-5 w-5 appearance-none rounded-full border-2 border-black focus:ring-0 checked:bg-black checked:border-black checked:before:content-['✔'] checked:before:text-white checked:before:text-sm checked:before:font-bold checked:before:flex checked:before:justify-center"
                />
              <span className="ml-3 text-[15px]">{material}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
