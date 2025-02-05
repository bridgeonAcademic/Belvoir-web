import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [priceFilter, setPriceFilter] = useState("");
  const categories = ["T-Shirts", "Hoodies", "Jeans", "Jackets", "Dresses", "Shoes"];
  
  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 bg-white p-2 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMoreVertical className="text-2xl text-gray-700" />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white p-6 shadow-xl border-r border-gray-200 rounded-r-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filter by:</h2>

        {/* Price Filter */}
        <div className="mb-6">
          <div className="relative">
            <button
              className="w-full flex justify-between items-center bg-gray-100 text-gray-700 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition"
              onClick={() => setPriceFilter(priceFilter ? "" : "open")}
            >
              Price <ChevronDown className={`ml-2 transform ${priceFilter ? "rotate-180" : ""}`} />
            </button>
            {priceFilter && (
              <div className="mt-2 bg-white rounded-lg shadow-lg p-2">
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                  Price Ascending
                </button>
                <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                  Price Descending
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Category</h3>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                />
                <label className="text-gray-700">{category}</label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
