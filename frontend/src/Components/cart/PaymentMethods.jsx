import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  useApplyCouponMutation,
  useCreateNewOrderMutation,
  useStripeCheckoutSessionMutation,
} from "../../redux/api/orderApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  calculateOrderCostWithOffer,
  caluclateOrderCost,
} from "../../helpers/helper";
import { clearCart } from "../../redux/features/cartSlice";
import { key } from "../utilities/key";
const PaymentMethods = ({ onMethodSelection, couponValue, couponCodeNames }) => {
  const [method, setMethod] = useState("");

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [createNewOrder, { error, isSuccess }] = useCreateNewOrderMutation();
  const [applyCoupon, {  data,error: couponError }] =  useApplyCouponMutation();  
  const dispatch = useDispatch();

  const [
    stripeCheckoutSession,
    { data: checkoutData, error: checkoutError, isLoading },
  ] = useStripeCheckoutSessionMutation();

  useEffect(()=>{
  console.log('coupon');
  },[couponCodeNames])
  
  useEffect(() => {
    if (checkoutData) {
      // const { totalPrice } = caluclateOrderCost(cartItems);
      // window.location.href = checkoutData?.url;
      checkoutHandler(checkoutData);
    }

    if (checkoutError) {
      toast.error(checkoutError?.data?.message);
    }
  }, [checkoutData, checkoutError]);

  useEffect(() => {
    if (error) {
      toast.error(error?.data);
      console.error("error", " ", error);
    }

    if (isSuccess) {
      if (couponCodeNames) {
        couponCodeNames?.forEach((couponCodeName)=>{
          applyCoupon({ code: couponCodeName });
        })
      }
      
      //console.log(data,'applied');
      toast.success("Order placed");
      dispatch(clearCart());
      navigate("/order_placed?order_success=true");
    }
    if (couponError) {
      console.error('couponError',couponError);      
    }
  }, [error, isSuccess, navigate, dispatch, applyCoupon, couponCodeNames, couponError, data]);

  const handleMethod = (selectedMethod) => {
    //console.log("Selected method:", selectedMethod);

    onMethodSelection(selectedMethod);
    setMethod(selectedMethod);

    //by default it is calculateOrderCost() for the purpose of campaign we have changed
    const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
      calculateOrderCostWithOffer(cartItems, couponValue);

    // console.log("Order Costs:", {
    //   itemsPrice,
    //   shippingPrice,
    //   taxPrice,
    //   totalPrice,
    // });

    if (selectedMethod === "cod") {
      const orderData = {
        shippingInfo,
        orderItems: cartItems,
        itemsPrice,
        shippingAmount: shippingPrice,
        taxAmount: taxPrice,
        totalAmount: Math.trunc(totalPrice),
        paymentInfo: {
          status: "Not Paid",
        },
        paymentMethod: "COD",
      };
      //console.log("Order Data for COD:", orderData);
      createNewOrder(orderData);
    }

    if (selectedMethod === "Card") {
      const orderData = {
        orderItems: cartItems,
        currency: "INR",
        itemsPrice: Math.trunc(totalPrice),
      };
      // console.log("Order Data for Card:", orderData);
      stripeCheckoutSession(orderData);
    }
  };

  const checkoutHandler = async (checkoutData) => {
    //setPaymentLoading(true);
    const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
      calculateOrderCostWithOffer(cartItems, couponValue);
      
    const options = {
      key: key,
      amount: checkoutData.amount,
      currency: "INR",
      name: "inHerbz",
      description: "",
      image:
        "https://ik.imagekit.io/c1jhxlxiy/INherbz%20logo.webp?updatedAt=1719861969363",
      order_id: checkoutData.id,
      // callback_url: "http://localhost:3000/api/v1/payment/webhook",
      handler: function (response) {
        // Extract response data
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;
        console.log(response,'res');
        
        // Create payload to send to backend
        const payload = {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          shippingInfo,
          cartItems,
          user,
          itemsPrice,
          shippingPrice,
          totalPrice: Math.trunc(totalPrice),
          taxPrice,
        };

        //console.log(payload, "response-razorpay");
        setPaymentLoading(true);
        // Make POST request to backend endpoint
        fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/payment/webhook`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(payload),
        })
          .then((response) => {
            if (response.ok) {
              setPaymentLoading(false);
              toast.success("Payment Successful");
              if (couponCodeNames) {
                couponCodeNames?.forEach((couponCodeName)=>{
                  applyCoupon({ code: couponCodeName });
                })
              }
              
              navigate("/order_placed?order_success=true");
              console.log("Response sent successfully");
            } else {
              toast.error("Payment Failed");
              console.error("Failed to send response to backend");
              setPaymentLoading(false);
            }
          })
          .catch((error) => {
            setPaymentLoading(false);
            console.error("Error sending response to backend:", error);
          });
      },

      prefill: {
        name: shippingInfo.fullName,
        email: shippingInfo.email,
        contact: shippingInfo.phoneNo,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#38B261",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <div className="row wrapper">
        <div className=" flex flex-col gap-3">
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2"
            onClick={() => handleMethod("Card")}
            disabled={isLoading}
          >
            {isLoading || paymentLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <>
                Pay with{" "}
                <span className=" inline-flex gap-2 ms-2 align-middle items-center justify-center">
                  <i className="fa-brands fa-google-pay text-xl"></i>{" "}
                  <i className="fa-brands fa-cc-visa text-xl"></i>{" "}
                  <i className="fa-brands fa-cc-mastercard text-xl"></i>
                  <i className="fa-brands fa-apple-pay text-xl"></i>
                </span>
              </>
            )}
          </button>

          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2"
            onClick={() => handleMethod("cod")}
          >
            Pay on Delivery{" "}
            <span className="ms-2">
              <i className="fa-solid fa-truck"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
