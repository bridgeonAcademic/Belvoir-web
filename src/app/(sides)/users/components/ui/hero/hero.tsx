"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../../../../axios/axiosinstance/axiosInstance";

// Main landing page component
export default function Hero() {
  const [data, setdata] = useState<any|[]>([]);
  useEffect(() => {
    try {
      const fetchdata = async () => {
        const response = await axiosInstance.get("/Rental/products", {
          params: {
            pageNo: 1,
            pageSize: 8,
          },
        });
        setdata(response.data.data);
      };
      fetchdata();
    } catch (error) {
      console.log("error in fetching the rental data in home ", error);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white  sm:px-2">
      {/* <section className="relative h-[70vh] bg-black"> */}
      {/* <video 
        className="w-screen h-screen object-contain"
        autoPlay
        loop
        muted
        >
        <source src="/home/tailoring.mp4" type="video/mp4" />
        </video>
      </section> */}
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black ">
        <Image
          src="/home/banner.jpg"
          alt="Sewing machine detail"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Redefining Style and Convenience
          </h1>
          <p className="max-w-2xl text-gray-200 leading-relaxed">
            At Execlusive, we blend fashion impeccably with convenience to cater
            to all your garment needs. From expert tailoring and premium laundry
            services to stylish clothing rentals, we aim to deliver excellence
            at every step.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto lg:px-[50px] sm:px-4 py-16 space-y-16">
        {/* Tailoring Service */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-light">
              Tailoring with a Touch of Perfection
            </h2>
            <p className="text-gray-600">
              Custom Tailoring - Perfectly crafted outfits to meet your unique
              style and specifications. Expert craftsmanship to create a
              flawless fit. Each stitch tells a passion for excellence.
            </p>
            <Link href={"/users/clothes"}>
              <button className="bg-[#1a1b3f] hover:bg-[#2a2b4f] text-white text-sm p-2 rounded-sm">
                BOOK NOW
              </button>
            </Link>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/home/1.jpg"
              alt="Tailoring service"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Premium Laundry */}
        {/* <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:order-2">
            <h2 className="text-2xl font-light">Premium Laundry Services</h2>
            <p className="text-gray-600">
              Laundry Services: Pampered and reliable care for your garments.
              Our thorough attention to detail and specialized treatment ensures
              your clothes receive the finest care.
            </p>
            <button className="bg-[#1a1b3f] hover:bg-[#2a2b4f] text-white text-sm p-2 rounded-sm">
              BOOK NOW
            </button>
          </div>
          <div className="relative h-[300px] md:order-1">
            <Image
              src="/home/2.jpg"
              alt="Laundry service"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div> */}

        {/* Clothing Rentals */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px]">
            <Image
              src="/home/3.jpg"
              alt="Clothing rental"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-light">
              Clothing Rentals for Every Occasion
            </h2>
            <p className="text-gray-600">
              Special Dress Collections are ideal for a unique occasion. Smart
              Wear: Elegant options for meetings, parties, and formal occasions.
              Affordable Styling: Get the style you want at a fraction of the
              cost.
            </p>
            <Link href={"/users/rental"}>
              <button className="bg-[#1a1b3f] hover:bg-[#2a2b4f] text-white text-sm p-2 rounded-sm">
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-bold block mx-auto w-max text-[26px] text-[[#2a2b4f]" >Our Rentals </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
            {/* Render 6 product cards using Array.map */}
            {data &&
              data.map((items: any, i: number) => (
                <div
                  key={i.toString()}
                  className="space-y-3 bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  {/* Image container */}
                  <div className="relative w-full h-72">
                    <Image
                      src={`${
                        items.images.find((x: any) => x.isPrimary)?.imagePath
                      }`}
                      alt={`Product ${i + 1}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <Link href={`/users/rental/${items.id}`}>
                    <div className="text-center">
                      <button className="w-full bg-[#1a1b3f] hover:bg-[#2a2b4f] text-white text-sm py-2 rounded-sm">
                        Book now
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
