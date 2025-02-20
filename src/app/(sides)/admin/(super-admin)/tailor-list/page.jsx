
"use client";

import React, { useState, useEffect } from "react";
import { useBlockOrUnblockTailor, useFetchAllTailors, useAddTailor, useDeleteTailor } from "../../../../../hooks/tailorsHook";
import { toast ,ToastContainer} from "react-toastify";
import LoadingUi from "../../../users/components/ui/loading/loadingui";
import { useFormik } from "formik";
import * as Yup from "yup";

const TailorListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTailor, setSelectedTailor] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [newTailor, setNewTailor] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    experience: "",
  });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [initialLoading, setInitialLoading] = useState(true);

  const { data: tailors = [], refetch } = useFetchAllTailors(limit, page, searchQuery, "");
  const { mutate: tailorBlockOrUnblock } = useBlockOrUnblockTailor();
  const { mutate: addTailor } = useAddTailor();
  const { mutate: deleteTailor } = useDeleteTailor();

  const totalTailors = tailors.data?.count.usercount;
  const totalPages = Math.ceil(totalTailors / limit);
  const activeTailors = tailors.data?.count.activeusercount;
  const blockedTailors = tailors.data?.count.blockedusercount;

  useEffect(() => {
    setInitialLoading(true);
    refetch().finally(() => setInitialLoading(false));
  }, []);

  const toggleStatus = (id) => {
    tailorBlockOrUnblock(id, {
      onSuccess: (data) => {
        refetch();
        toast.success("Tailor status updated successfully!");
      },
      onError: (error) => {
        console.log("Error:", error);
        toast.error("Failed to update tailor status.");
      },
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      setPage(1);
      refetch();
    }
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewTailor((prev) => ({ ...prev, [name]: value }));
  };

  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    phone: Yup.string().matches(/\d{10}/, "Phone number must be 10 digits").required("Phone number is required"),
    experience: Yup.number().min(0, "Experience cannot be negative").required("Experience is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      experience: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      addTailor(values, {
        onSuccess: () => {
          setAddModalOpen(false);
          resetForm();
          refetch();
          toast.success("Tailor added successfully!");
        },
        onError: () => toast.error("Failed to add tailor."),
      });
    },
  });

  const handleDeleteTailor = (id) => {
    deleteTailor(id, {
      onSuccess: () => {
        refetch();
        toast.success("Tailor deleted successfully!");
      },
      onError: (error) => {
        console.log("Error:", error);
        toast.error("Failed to delete tailor.");
      },
    });
  };

  return (
    <>
    <ToastContainer/>
    
    <div className="p-8  min-h-screen">
      <div className="max-w-7xl mx-auto">
        {initialLoading ? (
        <LoadingUi/>
        ) : (
          <div className="p-8  min-h-screen">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <h1 className="text-3xl font-bold text-gray-700">Tailor List</h1>
                <div className="flex flex-wrap items-center gap-4">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    onKeyDown={handleSearchEnter}
                    placeholder="Search tailors..."
                    className="flex-grow px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={() => setAddModalOpen(true)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-sm hover:bg-indigo-700 transition duration-300"
                  >
                    + Add Tailor
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-xl text-center">
                  <h3 className="text-xl font-bold text-gray-800">Total Tailors</h3>
                  <p className="text-3xl font-semibold text-gray-900">{totalTailors}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-xl text-center">
                  <h3 className="text-xl font-bold text-gray-800">Active Tailors</h3>
                  <p className="text-3xl font-semibold text-green-500">{activeTailors}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-xl text-center">
                  <h3 className="text-xl font-bold text-gray-800">Blocked Tailors</h3>
                  <p className="text-3xl font-semibold text-red-500">{blockedTailors}</p>
                </div>
              </div>

              {tailors.data?.data?.length === 0 && !initialLoading && (
                <div className="text-center text-xl text-gray-600">
                  <p>No tailors found.</p>
                </div>
              )}

{tailors.data?.data?.length > 0 && !initialLoading && (
  <div className="overflow-x-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
    <table className="w-full border-collapse text-gray-700">
      <thead className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <tr className="text-left">
          <th className="py-4 px-6 font-medium text-lg">Tailor Name</th>
          <th className="py-4 px-6 font-medium text-lg">Email</th>
          <th className="py-4 px-6 font-medium text-lg">Phone Number</th>
          <th className="py-4 px-6 font-medium text-lg text-center">Block</th>
          <th className="py-4 px-6 font-medium text-lg text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        {tailors.data?.data?.map((tailor, index) => (
          <tr
            key={tailor.id}
            className={`border-b border-gray-300 hover:bg-gray-100 transition-all ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            } cursor-pointer`}
            onClick={() => setSelectedTailor(tailor)}
          >
            <td className="py-4 px-6 font-medium text-gray-800">{tailor.name}</td>
            <td className="py-4 px-6 text-gray-600">{tailor.email}</td>
            <td className="py-4 px-6 text-gray-600">{tailor.phone}</td>
            <td className="py-4 px-6 text-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleStatus(tailor.id);
                }}
                className="px-6 py-2 rounded-full text-white font-semibold shadow-md transition-all duration-300 bg-yellow-600 hover:bg-opacity-80"
              >
                {tailor.isBlocked ? "Activate" : "Block"}
              </button>
            </td>
            <td className="py-4 px-6 text-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteTailor(tailor.id);
                }}
                className="px-6 py-2 rounded-full text-white font-semibold shadow-md transition-all duration-300 bg-yellow-600 hover:bg-opacity-80"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


              {tailors.data?.data?.length > 0 && !initialLoading && (
                <div className="flex justify-between items-center mt-4">
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

              {isAddModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-xl shadow-sm w-full max-w-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Tailor</h2>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="space-y-4">
                        {["name", "email", "password", "phone", "experience"].map((field) => (
                          <div key={field}>
                            <label className="block text-gray-700 font-medium capitalize">{field}</label>
                            <input
                              type={field === "password" ? "password" : "text"}
                              name={field}
                              value={formik.values[field]}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className="w-full px-4 py-2 rounded-lg border border-gray-300"
                            />
                            {formik.touched[field] && formik.errors[field] && (
                              <div className="text-red-500 text-sm">{formik.errors[field]}</div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex justify-end space-x-4">
                        <button type="button" onClick={() => setAddModalOpen(false)} className="px-6 py-2 bg-gray-300 rounded-lg">
                          Cancel
                        </button>
                        <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg">
                          Add Tailor
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {selectedTailor && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-xl shadow-sm w-full max-w-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Tailor Details</h2>
                    <div className="space-y-2">
                      <p>
                        <strong>ID:</strong> {selectedTailor.id}
                      </p>
                      <p>
                        <strong>Name:</strong> {selectedTailor.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {selectedTailor.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {selectedTailor.phone}
                      </p>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => setSelectedTailor(null)}
                        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default TailorListPage;
