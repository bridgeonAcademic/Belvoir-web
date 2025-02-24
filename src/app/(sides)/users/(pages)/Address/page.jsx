"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const OrderDetails = () => {
  const router = useRouter();

  const initialValues = {
    fullName: "",
    phoneNumber: "",
    address: "",
    state: "",
    pincode: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
      .required("Pincode is required"),
  });

  const handleSave = (values) => {
    localStorage.setItem("orderDetails", JSON.stringify(values));
    router.push("/users/Summary");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/clothes/clothess.png')", // ✅ Change to your image path
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* ✅ Dark overlay */}
      </div>

      {/* Form Container */}
      <div className="relative max-w-lg mx-auto p-6 h-[600px] font-sans overflow-auto scrollbar-hide w-[700px] bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-lg">
        {/* Back Button */}
      

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Add Delivery Address
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSave}
        >
          <Form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Field
                type="text"
                name="fullName"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800"
              />
              <ErrorMessage name="fullName" component="div" className="text-sm text-red-500 mt-1" />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Field
                type="tel"
                name="phoneNumber"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800"
              />
              <ErrorMessage name="phoneNumber" component="div" className="text-sm text-red-500 mt-1" />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <Field
                as="textarea"
                name="address"
                rows="3"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800"
              />
              <ErrorMessage name="address" component="div" className="text-sm text-red-500 mt-1" />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <Field
                type="text"
                name="state"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800"
              />
              <ErrorMessage name="state" component="div" className="text-sm text-red-500 mt-1" />
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pincode
              </label>
              <Field
                type="text"
                name="pincode"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800"
              />
              <ErrorMessage name="pincode" component="div" className="text-sm text-red-500 mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              Save Address
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default OrderDetails;
