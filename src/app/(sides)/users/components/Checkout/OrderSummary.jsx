"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import im from "../../../../../../public/Rentals/freepik__upload__70594.png";
import axiosInstance from "../../../../../../axios/axiosinstance/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import loadRazorpay from "../../../../../../utils/LoadRazorpay";
import { useRouter } from "next/navigation";
const OrderSummary = ({ selectedAddress, setloading }) => {
  const [data, setdata] = useState();
  const  rounter =useRouter();

  const handlePayment = async (totalAmount) => {
    try {
      const response = await axiosInstance.post(
        `/payment/create-order`, 
        {}, 
        { 
          params: { amount: totalAmount },
          headers: { Authorization: `Bearer ${localStorage.getItem("userData")}` }
        }
      );
      
      
      if(response){
      const res = await loadRazorpay();
      if (!res) {
        toast.error("Failed to load Razorpay. Please try again.");
        return;
      }
  
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Use the correct environment variable
        amount: response.data.amount * 100, // Convert INR to paise
        currency: "INR",
        name: "Belvoir",
        description: "Order Payment",
        order_id: response.data.orderId, // Use orderId from the backend response
        handler: async (response) => {
          console.log("Payment Success:", response);
          toast.success("Payment Successful!");
          try {
           const verify= await axiosInstance.post("/payment/verify-payment", response, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("userData")}`,
              },
              params: {
                paymentId: response.razorpay_payment_id, 
                orderId: response.razorpay_order_id,     
                signature: response.razorpay_signature,  
              },
            });
            if(verify.status==200){
              rounter.push("/users/paymentcompleted")
            }
          } catch (error) {
            toast.error("Payment verification failed.");
            console.error("Error verifying payment:", error);
          }
        },
        theme: { color: "#3399cc" },
      };
  
      const razor = new window.Razorpay(options);
      razor.open();
    }
    } catch (error) {
      console.error("Error in creating the order or loading Razorpay", error);
      toast.error("Failed to create order. Please try again.");
    }
  };
  

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error("Please select an address");
      return;
    }
    try {
      const response = await axiosInstance.post(
        `Order/checkout/rental`,
        {
          paymentMethod: "CashOnDelivery",
          shippingAddress: selectedAddress.id,
          fastShipping: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userData")}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Order Created. Redirecting to Payment...");
        handlePayment(1);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axiosInstance.get("/RentalCart/my-cart", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userData")}`,
          },
        });
        setdata(response.data.data);
      } catch (error) {
        console.log("Error in fetching the cart in summary", error);
      } finally {
        setloading(false);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="p-4 w-full mx-auto border rounded-md shadow-lg bg-white mt-0">
      <h2 className="text-xl font-bold mb-4 ">Order Summary</h2>

      {/* Address Section */}
      {selectedAddress ? (
        <div className="p-3 border rounded-md bg-stone-200 mb-4">
          <h3 className="text-lg font-semibold">Deliver To:</h3>
          <p className="text-gray-700">{selectedAddress.contactName}</p>
          <p className="text-gray-600">{selectedAddress.street}</p>
          <p className="text-gray-600">📞 {selectedAddress.contactNumber}</p>
        </div>
      ) : (
        <p className="text-red-500 mb-4">No address selected!</p>
      )}

      {/* Order Items Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Items Ordered</h3>
        {data ? (
          data?.items.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b py-2 w-full"
            >
              <div className=" flex">
                <Image
                  alt="image"
                  width={50}
                  height={50}
                  src={item.primaryImageUrl}
                  className="rounded-lg"
                ></Image>
                <div className="ml-4">
                  <p className="font-medium">{item.productName}</p>
                  <p className="text-gray-500">Qty:{item.quantity}</p>
                </div>
              </div>
              <p className="font-semibold block float-right">
                ₹{item.itemPrice}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items in cart</p>
        )}
      </div>

      {/* Price Summary */}
      <div className="border-t pt-3">
        <div className="flex justify-between">
          <p className="text-gray-600">Total count:</p>
          <p>{data?.itemCount}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Delivery Fee:</p>
          <p>₹{"40"}</p>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <p>Total Amount</p>
          <p>₹{data?.totalAmount}</p>
        </div>
      </div>
      <div className="flex">
        <button
          className="w-full ml-2 p-2 mt-4 bg-[#0E0E25] text-white rounded-md"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
