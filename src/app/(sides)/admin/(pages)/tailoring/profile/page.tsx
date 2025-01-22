"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axiosInstance from "../../../../../../../api/axiosinstance/axiosInstance";

const ProfilePage = () => {
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [tailordata, setTailorData] = useState(null);

  const fetchTailorProfile = async () => {
    try {

     


      const response = await axiosInstance.get("/Tailor/tailorprofile", 
      );

      setTailorData(response.data);

      console.log(response.data);
    } catch (error: any) {
      console.error("Failed to fetch profile:", error.message || error);
      throw error; // Re-throw the error for further handling
    }
  };

  useEffect(() => {
    fetchTailorProfile();
  }, []);

  return (
    // Full-width container with responsive padding
    <div className="w-full p-4 sm:p-6 lg:p-8 bg-gray-50">
      {/* Content wrapper with max-width for larger screens */}
      <div className="max-w-5xl mx-auto space-y-4">
        {/* Profile card */}
        <div className="relative p-4 sm:p-6 bg-white rounded-lg shadow-sm">
          {/* Badge - responsive positioning */}
          <div className="absolute right-4 top-4 px-3 py-1 text-sm bg-green-100 text-green-800 rounded">
            Tailor
          </div>

          {/* Profile content with responsive layout */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8 sm:pt-0">
            {/* Image container - maintains aspect ratio */}
            <div className="flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 mx-auto sm:mx-0">
              {/* <img
                alt="Profile"
                src="/placeholder-image.jpg"
                className="w-full h-full object-cover rounded-lg border border-gray-200"
              /> */}
            </div>

            {/* Profile information with responsive spacing */}
            <div className="flex flex-col space-y-4 text-center sm:text-left">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-semibold">John Doe</h1>
                <p className="text-gray-600">username</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">johndoe@gmail.com</p>
                <p className="text-gray-700">+91 9816546463</p>
              </div>
            </div>
          </div>
        </div>

        {/* Password section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Toggle button with hover effect */}
          <button
            onClick={() => setShowModal(!showModal)}
            className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-medium">Change Password</span>
            {/* <span>{showModal ? '↑' : '↓'}</span> */}
          </button>
        </div>

        {/* Orders card with hover effect */}
        <Link
          href="/admin/tailoring/orders"
          className="block bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Orders</h2>
                <p className="text-gray-600 mt-1">View all orders</p>
              </div>
              <span className="text-2xl">📦</span>
            </div>
          </div>
        </Link>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              {/* Modal content */}

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Change Password</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Password form */}
              <div className="space-y-4 z-auto">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

// <Image
//               alt="user-image"
//               src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=740"
//               width={200}
//               height={200}
//               className="p-2 border-2 rounded-md border-dark/30"
//             />
