"use client"
import React,{useState} from 'react';
import Link from "next/link";
import Sidebar from "../../components/Design/SidebarFilter";
import { useFetchAllDesigns } from "../../../../../hooks/designHook";
import { useState } from "react";


const DesignContainer = () => {
    

    const { data } = useFetchAllDesigns(query,designType,"",IsDescending,pageNo,pageSize);
    
  return (
    <div>
             <div className="flex min-h-screen p-6">
        <Sidebar />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ml-10 sm:ml-0">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-gray-100 h-[350px] flex flex-col rounded-sm shadow-sm"
            >
              <div className="overflow-hidden flex justify-center">
                <img
                  className="object-cover duration-150 transition-all hover:scale-110 h-[250px] w-[250px] rounded-lg"
                  src={item.images[0].imageUrl}
                  alt={item.name}
                />
              </div>

              <div className="flex flex-col gap-2 mt-5 px-4">
                <div className="font-bold text-gray-600 text-lg">{item.name}</div>

                <div className="flex items-center justify-between">
                  <div className="text-gray-900 font-bold">Price: ₹{item.price}</div>
                  <Link href={`/users/Design/${item.id}`}>
                    <button className="bg-black text-white rounded-2xl px-4 py-1 hover:bg-white hover:text-black border transition">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
      
    </div>
  )
}

export default DesignContainer
