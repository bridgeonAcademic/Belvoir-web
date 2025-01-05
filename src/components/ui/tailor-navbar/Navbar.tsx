"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NotificationDropdown from "../tailor-notification/notificationDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed z-10 top-0 right-0 w-full bg-white border-b border-[#0E0E25]/40 gap-4 h-[50px] flex items-center justify-end p-4">
      <p className="text-black font-Cormorant text-xl">name</p>
      <div className="relative h-10 w-10 rounded-full overflow-hidden border border-gray-300">
        <Link href="/tailoring/profile">
          <Image
            src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=740"
            alt="User Avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        </Link>
      </div>

      <div onClick={() => setIsOpen(!isOpen)} className="relative">
        <Bell size={24} className="text-black" />
        <div className="absolute h-3 w-3 rounded-full bg-green-500 -top-1 right-0"></div>
      </div>
      <div className={`absolute right-0 top-14 ${isOpen ? "block" : "hidden"}`}>
        <NotificationDropdown />
      </div>
    </div>
  );
}
