"use client";

import React, { useState, useEffect } from "react";
import {
  UseBlockOrUnblockUser,
  UsefetchAllUsers,
} from "../../../../../hooks/usersHooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const { data, refetch, isFetching } = UsefetchAllUsers(
    limit,
    page,
    searchQuery,
    ""
  );
  const { mutate: userBlockOrUnblock } = UseBlockOrUnblockUser();

  const totalUsers = data?.data?.count.usercount;
  const totalPages = Math.ceil(totalUsers / limit);
  const activeUsers = data?.data?.count.activeusercount;
  const blockedUsers = data?.data?.count.blockedusercount;

  const toggleStatus = (id) => {
    userBlockOrUnblock(id, {
      onSuccess: (data) => {
        refetch();
        toast.success(
          `User ${data?.isBlocked ? "activated" : "blocked"} successfully!`
        );
      },
      onError: (error) => {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
      },
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(e.target.value);
      setPage(1);
      refetch();
    }
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  useEffect(() => {
    if (isFirstLoad) {
      setIsLoading(true);
    }
    refetch().finally(() => {
      setIsLoading(false);
      if (isFirstLoad) {
        setIsFirstLoad(false);
      }
    });
  }, [page, searchQuery]);

  return (
    <>
      <ToastContainer />
      {(isLoading || isFetching) && isFirstLoad ? (
        <div className="flex justify-center items-center h-[70%]">
          <div className="load-row flex space-x-2">
            <span className="w-4 h-4 bg-blue-700 rounded-full animate-bounce"></span>
            <span className="w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-150"></span>
            <span className="w-4 h-4 bg-blue-300 rounded-full animate-bounce delay-300"></span>
            <span className="w-4 h-4 bg-blue-200 rounded-full animate-bounce delay-450"></span>
          </div>
        </div>
      ) : (
        <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-100 h-full">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-700">User List</h1>
              <input
                type="text"
                onChange={handleSearch}
                onKeyDown={handleSearchEnter}
                value={searchQuery}
                placeholder="Search users..."
                className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">Total Users</h3>
                <p className="text-3xl font-semibold text-gray-900">
                  {totalUsers}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">Active Users</h3>
                <p className="text-3xl font-semibold text-green-500">
                  {activeUsers}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">
                  Blocked Users
                </h3>
                <p className="text-3xl font-semibold text-red-500">
                  {blockedUsers}
                </p>
              </div>
            </div>

            {data?.data?.data?.length === 0 ? (
              <div className="text-center text-lg font-semibold text-gray-700">
                User not found
              </div>
            ) : (
              <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-sm border border-gray-300">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                  <thead className="bg-gray-900 text-white rounded-t-lg">
                    <tr>
                      <th className="py-3 px-6 border border-gray-300 text-left font-semibold">
                        Username
                      </th>
                      <th className="py-3 px-6 border border-gray-300 text-left font-semibold">
                        Email
                      </th>
                      <th className="py-3 px-6 border border-gray-300 text-left font-semibold">
                        Phone Number
                      </th>
                      <th className="py-3 px-6 border border-gray-300 text-center font-semibold">
                        Block
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.data?.map((user) => (
                      <tr
                        key={user.id}
                        className="cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          handleRowClick(user);
                        }}
                      >
                        <td className="py-3 px-6 border border-gray-300">
                          {user.name}
                        </td>
                        <td className="py-3 px-6 border border-gray-300">
                          {user.email}
                        </td>
                        <td className="py-3 px-6 border border-gray-300">
                          {user.phone}
                        </td>
                        <td className="py-3 px-6 border border-gray-300 text-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleStatus(user.id);
                            }}
                            className="px-6 py-2 rounded-lg text-white bg-yellow-600 hover:bg-opacity-80 transition-all duration-300 shadow-lg"
                          >
                            {user.isBlocked ? "Activate" : "Block"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {data?.data?.data?.length > 0 && (
              <div className="flex justify-between items-center mt-4 space-x-4 md:space-x-8">
                <button
                  onClick={handlePrevPage}
                  disabled={page === 1}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300"
                >
                  Previous
                </button>
                <span>
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {selectedUser && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-xl shadow-sm w-1/3 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  User Details
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>ID:</strong> {selectedUser.id}
                  </p>
                  <p>
                    <strong>Name:</strong> {selectedUser.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedUser.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedUser.phone}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserListPage;
