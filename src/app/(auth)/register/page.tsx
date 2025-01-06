"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';

const RegistrationComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 relative">
        <h1 className="text-white font-serif text-3xl pl-6 pt-4 z-10 relative">
          Belvoir.
        </h1>
        <div className="absolute left-0 top-0 h-screen w-1/2 overflow-hidden">
          <Image
            src="/login/bg.jpg"
            alt="Elegant jacket display"
            className="object-cover object-center w-full h-full transform scale-110"
            width={400}
            height={400}
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="w-96 p-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl mb-1">Belvoir.</h1>
            <p className="text-gray-600 text-sm">Create Account</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-white border-b border-gray-200 focus:border-gray-800 transition-colors outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white border-b border-gray-200 focus:border-gray-800 transition-colors outline-none"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 bg-white border-b border-gray-200 focus:border-gray-800 transition-colors outline-none"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-white border-b border-gray-200 focus:border-gray-800 transition-colors outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button className="w-full bg-gray-900 text-white py-3 rounded-sm hover:bg-gray-800 transition-colors text-sm">
              Register
            </button>

            <div className="text-center text-xs text-gray-500">
              Already have an account?{" "}
              <a href="#" className="text-gray-800">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;