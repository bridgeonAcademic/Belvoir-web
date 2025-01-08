"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/ui/tailor-navbar/Navbar";
import Sidebar from "../components/ui/tailor-sidebar/Sidebar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className="flex">
        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden z-50">
          {isOpen ? (
            <MenuIcon className="fixed left-2 top-2  z-50 bg-light text-dark h-8 w-8 p-1 rounded-md border border-dark/30" />
          ) : (
            <XIcon className="fixed left-2 top-2  z-50 bg-light text-dark h-8 w-8 p-1 rounded-md border-dark/30" />
          )}
        </button>
        <Sidebar isOpen={isOpen} />
        <div className="xl:ml-[300px] flex-1 flex flex-col">
          <Navbar />
          <div className="mt-[40px] flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
