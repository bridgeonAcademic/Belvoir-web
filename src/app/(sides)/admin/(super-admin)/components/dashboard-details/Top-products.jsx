"use client";

import React from "react";

const TopProductsTable = () => {
  const products = [
    { id: 1, name: "Product A", popularity: 85, sales: 72 },
    { id: 2, name: "Product B", popularity: 78, sales: 60 },
    { id: 3, name: "Product C", popularity: 92, sales: 95 },
    { id: 4, name: "Product D", popularity: 68, sales: 50 },
  ];

  return (
    <div className="flex justify-center ml-10 items-center mt-40 font-sans">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-4">
          <h2 className="text-2xl font-bold">Top Products</h2>
          <p className="text-sm">Performance and popularity at a glance</p>
        </div>
        <table className="table-auto w-full text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-2 font-medium">SI No.</th>
              <th className="px-6 py-2 font-medium">Product Name</th>
              <th className="px-6 py-2 font-medium">Popularity</th>
              <th className="px-6 py-2 font-medium">Sales (%)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition duration-200`}
              >
                <td className="px-6 py-2 text-gray-700 font-medium">
                  {product.id}
                </td>
                <td className="px-6 py-2 text-gray-700">{product.name}</td>
                <td className="px-6 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${product.popularity}%`,
                          backgroundColor: "#a9d171",
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${product.sales}%`,
                          background:
                            "linear-gradient(to right, #2196F3, #00E5FF)",
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{product.sales}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 text-center text-sm text-gray-500">
          Data updated as of {new Date().toLocaleDateString()}.
        </div>
      </div>
    </div>
  );
};

export default TopProductsTable;
