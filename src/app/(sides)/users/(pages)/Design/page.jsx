"use client";

import React, { useState } from "react";

import Footer from "../../components/ui/footer/Footer";

import Navbar from "../../components/ui/navbar/Navbar";
import DesignContainer from "../../components/Design/DesignContainer"

function Page() {


  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-wrap items-center justify-center w-[280px] sm:justify-start  bg-white p-4 rounded-lg gap-4">
  <div className="relative w-full max-w-[280px] sm:max-w-md">
    <div className="flex flex-grow sm:flex-none rounded-full border-2 focus:border-4 border-black overflow-hidden w-full">
      <input
        type="text"
        placeholder="Search clothes..."
        className="w-full outline-none bg-white font-sans placeholder-gray-600 text-sm px-3 py-2"
      />
      <button className="flex items-center justify-center px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="16px"
          className="fill-black"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
        </svg>
      </button>
    </div>
  </div>
</div>
<DesignContainer/>




      <Footer />
    </main>
  );
}

export default Page;
