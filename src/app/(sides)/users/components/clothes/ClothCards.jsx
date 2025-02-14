"use client";
import React from "react";
import Link from "next/link";

const ClothCards = ({isLoading,filteredData}) => {
 
  
  if (isLoading) {
    return (
      <div className="flex justify-center mx-auto  h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-gray-100 shadow-sm flex flex-col"
          >
            {/* Image and Title */}
            <div className="overflow-hidden flex justify-center">
              <img
                className="object-cover duration-150 transition-all hover:scale-110 h-[250px] w-[250px] rounded-lg"
                src={item.imageUrl}
                alt={item.title}
              />
            </div>

            <div className="flex flex-col gap-2 mt-5 px-4">
              <div className="font-bold text-gray-600 text-lg">{item.title}</div>

              {/* Price and View Button */}
              <div className="flex items-center justify-between">
                <div className="text-gray-900 font-bold">Price: ₹{item.price}</div>
                <Link href={`/users/clothes/${item.id}`}>
                  <button className="bg-black text-white font-sans rounded-2xl px-4 py-1 hover:bg-white hover:text-black border transition">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center col-span-full text-gray-500 text-xl">
          No items found.
        </div>
      )}
    </div>
  );
};

export default ClothCards;
