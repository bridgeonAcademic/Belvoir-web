"use client";
import Metricscard from "@/components/ui/tailor-merics-card/metricscard";
import { ChevronDown, ChevronUp, Package2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{ backgroundImage: "url('/tailor/tailor-bg.jpg')" }}
      className="min-h-[95vh] w-full bg-contain bg-center px-8 py-10"
    >
      <div className="flex flex-col gap-4 p-4 bg-dark/45 rounded-md">
        <div className="relative flex flex-col xl:flex-row gap-4 p-4 rounded-md bg-white">
          <div className="absolute top-60 xl:top-4 right-4 px-2 py-1 bg-green-100 text-green-800 rounded-md text-sm">
            Tailor
          </div>
          <div className="flex items-center justify-center ">
            <Image
              alt="user-image"
              src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=740"
              width={200}
              height={200}
              className="p-2 border-2 rounded-md border-dark/30"
            />
          </div>
          <div className="flex justify-between items-start  ">
            <div className="h-full flex flex-col  items-start">
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-Cormorant font-semibold text-dark">
                  Jhon Doe
                </h1>
                <p className="text-[15px] text-gray-900 font-Cormorant">
                  username
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[18px] text-gray-900 font-Cormorant">
                  jhonedoe@gmail.com
                </p>
                <p className="text-[18px] text-gray-900 font-Cormorant">
                  +91 9816546463
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` flex flex-col flex-1 transition-all duration-300 ${
            isOpen ? "gap-4" : "gap-2"
          } `}
        >
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="cursor-pointer flex items-center justify-between h-[50px] p-4 bg-white rounded-md"
          >
            <h1 className="text-xl font-Libre text-dark text-center">
              change password?
            </h1>
            {isOpen ? (
              <ChevronUp className="h-8 text-dark" />
            ) : (
              <ChevronDown className="h-8 text-dark" />
            )}
          </div>
          <div
            className={`flex flex-col gap-2 items-center justify-between bg-white rounded-md overflow-hidden transition-all duration-700 ease-in-out  ${
              isOpen ? "max-h-[230px] p-4" : "max-h-0 p-0"
            }`}
          >
            <input
              className="w-full p-2 outline-none placeholder:text-dark/70 text-dark bg-light rounded-md"
              type="text"
              name="currentpassword"
              id=""
              placeholder="enter current password"
            />
            <input
              className="w-full p-2 outline-none placeholder:text-dark/70 text-dark bg-light rounded-md"
              type="text"
              name="newpassword"
              id=""
              placeholder="enter new password"
            />
            <input
              className="w-full p-2 outline-none placeholder:text-dark/70 text-dark bg-light rounded-md"
              type="text"
              name="confirmpassword"
              id=""
              placeholder="confirm new password"
            />
            <button className="w-full rounded-md bg-dark text-light font-Cormorant p-2">
              set new password
            </button>
          </div>
          <div className="font-Cormorant">
            <Link href="/tailoring/orders">
              <Metricscard
                title=""
                value="Orders"
                subtitile="see all orders you get"
                icon="📦"
                color="green"
                iconforcard={<Package2 size={200} />}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
