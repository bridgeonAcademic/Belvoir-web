"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  const banners = [
    {
      image: "/home/1.jpg",
      title: "Tailoring",
      description:
        "Our expert tailors craft custom-fit garments that match your unique style and needs. From alterations to bespoke tailoring, we ensure every stitch reflects perfection.",
    },
    {
      image: "/home/2/2.jpg",
      title: "Laundry Service",
      description:
        "We provide premium laundry services, ensuring your clothes are cleaned and treated with care, so they look fresh and new every time.",
    },
    {
      image: "/home/3.jpg",
      title: "Rentals",
      description:
        "Find quality rental options for all your needs. Whether it's furniture or equipment, we offer a wide variety of items for rent.",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000); // Switch banner every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-orange-50 w-full max-w-6xl rounded-lg shadow-md overflow-hidden">
        <div className="relative flex flex-col md:flex-row items-center p-6 gap-8">
          {/* Image container */}
          <div className="w-full md:w-1/2 lg:w-2/5 order-1">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden">
              <div
                className={`absolute w-full h-full bg-cover bg-center rounded-lg transition-all duration-1500 ease-in-out ${
                  currentBanner === 0
                    ? "opacity-100 translate-x-0"
                    : currentBanner === 1
                    ? "opacity-0 translate-x-full"
                    : "opacity-0 translate-x-[-100%]"
                }`}
                style={{
                  backgroundImage: `url(${banners[currentBanner].image})`,
                }}
              />
            </div>
          </div>

          {/* Content container */}
          <div className="w-full md:w-1/2 lg:w-3/5 space-y-4 text-center md:text-left order-2">
            <h1 className="text-3xl md:text-4xl font-sans tracking-wide text-gray-900 font-semibold opacity-100 transition-opacity duration-1500 ease-in-out">
              {banners[currentBanner].title}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl opacity-100 transition-opacity duration-1500 ease-in-out">
              {banners[currentBanner].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
