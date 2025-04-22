import React, { useEffect, useState } from "react";
import Metadata from "../Layouts/Metadata";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem, removeCartItem } from "../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CouponsIcon from "../utilities/couponsIcon";
import { useCheckCouponMutation } from "../../redux/api/orderApi";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState(null);
  const [couponValue, setCouponValue] = useState(null);
  const [discountApplied, setDiscountApplied] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const [checkAndApplyCoupon, { isLoading, error, isSuccess, data }] = useCheckCouponMutation();

  const submitHandler = (e) => {
    e.preventDefault();
    setDiscountApplied(false);
    checkAndApplyCoupon({ code: couponCode });
  };

  // Function to calculate the subtotal with discount applied after the first product
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      // Special case for the specific product ID
      if (item.product === "6632450450b3e83d0b476637") {
        const firstItemPrice = item.price;
        const secondItemPrice = item.price * 0.90;
        const thirdItemPrice = item.price * 0.70;
        const quantity = item.quantity;

        let itemTotal;
        if (quantity === 1) {
          itemTotal = firstItemPrice;
        } else if (quantity === 2) {
          itemTotal = firstItemPrice + secondItemPrice;
        } else if (quantity === 3) {
          itemTotal = firstItemPrice + secondItemPrice + thirdItemPrice;
        } else {
          const additionalItemsPrice = (quantity - 3) * item.price * 0.70;
          itemTotal = firstItemPrice + secondItemPrice + thirdItemPrice + additionalItemsPrice;
        }

        return acc + Number(itemTotal.toFixed(2));
      }

      // Default case for other products
      const fullPriceTotal = item.price || 0; // Fallback to 0 if price is undefined
      const discountedPriceTotal =
        item.quantity > 1
          ? (item.quantity - 1) * item.price * (1 - (item?.offer || 0) / 100)
          : 0;
      const itemTotal = fullPriceTotal + discountedPriceTotal;

      return acc + Number(itemTotal.toFixed(2));
    }, 0);
  };

  // Function to calculate the discounted price for a single item
  const calculateDiscountedPrice = (item) => {
    if (!item || !item.price || !item.quantity) return "0.00"; // Guard against undefined values

    if (item.product === "6632450450b3e83d0b476637") {
      const firstItemPrice = item.price;
      const secondItemPrice = item.price * 0.90;
      const thirdItemPrice = item.price * 0.70;
      const quantity = item.quantity;

      let totalPrice;
      if (quantity === 1) {
        totalPrice = firstItemPrice;
      } else if (quantity === 2) {
        totalPrice = firstItemPrice + secondItemPrice;
      } else if (quantity === 3) {
        totalPrice = firstItemPrice + secondItemPrice + thirdItemPrice;
      } else {
        const additionalItemsPrice = (quantity - 3) * item.price * 0.70;
        totalPrice = firstItemPrice + secondItemPrice + thirdItemPrice + additionalItemsPrice;
      }

      return totalPrice.toFixed(2);
    }

    // For other products
    const fullPriceTotal = item.price;
    const discountedPriceTotal =
      item.quantity > 1
        ? (item.quantity - 1) * item.price * (1 - (item?.offer || 0) / 100)
        : 0;
    const totalPrice = fullPriceTotal + discountedPriceTotal;

    return totalPrice.toFixed(2);
  };

  const subtotal = calculateSubtotal();
  const taxes = subtotal * 0.18;
  const shipping = 0;
  const couponDiscount = discountApplied ? couponValue || 0 : 0;
  const total = subtotal + taxes + shipping - couponDiscount;

  const increaseQty = (item, quantity) => {
    const newQty = Number(quantity) + 1;

    if (newQty > item?.stock) {
      toast.error("Selected Quantity is higher than available Quantity");
      return;
    }

    setItemToCart(item, newQty);
    setDiscountApplied(false);
  };

  const decreseQty = (item, quantity) => {
    const newQty = Number(quantity) - 1;
    if (newQty <= 0) return;
    setItemToCart(item, newQty);
    setDiscountApplied(false);
  };

  const setItemToCart = (item, newQty) => {
    const cartItem = {
      product: item?.product,
      name: item?.name,
      price: item?.price,
      image: item?.image,
      stock: item?.stock,
      quantity: newQty,
      offer: item?.offer,
    };
    dispatch(setCartItem(cartItem));
  };

  const removeCartItemHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isSuccess && !discountApplied) {
      toast.success("Coupon Code Added Successfully");
      if (data?.coupon?.discountType === "percentage") {
        const discountFactor = data?.coupon?.discountValue / 100;
        const discountedAmount = total * discountFactor;
        const roundedDiscountedAmount = parseFloat(discountedAmount.toFixed(2));
        setCouponValue(roundedDiscountedAmount);
        setDiscountApplied(true);
      }
    }

    if (error) {
      toast.error("Error Applying Coupon Code");
    }
  }, [data, isSuccess, total, discountApplied, error]);

  return (
    <>
      <Metadata title={"Your Cart"} />
      {cartItems.length === 0 ? (
        <div className="w-full h-96 flex justify-center items-center text-4xl sm:text-6xl font-bcf">
          Your Cart is Empty
        </div>
      ) : (
        <div className="font-bcf">
          <div className="bg-gray-900 lg:h-screen py-8">
            <div className="container max-w-screen-xl mx-auto px-4">
              <h1 className="text-2xl font-semibold mb-4 text-gray-300">
                Your Cart: {cartItems.length}
              </h1>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-3/4">
                  <div className="bg-base-300 dark:bg-gray-200 rounded-lg shadow-md p-6 mb-4 overflow-x-scroll md:overflow-x-auto">
                    <table className="w-full table rounded-md">
                      <thead className="text-gray-800 text-lg">
                        <tr>
                          <th className="text-left font-semibold">Product</th>
                          <th className="text-left font-semibold">Price</th>
                          <th className="text-left font-semibold">Quantity</th>
                          <th className="text-left font-semibold">Total</th>
                          <th className="text-left font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr
                            key={item?.product}
                            className="rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-800 text-sm"
                          >
                            <td className="py-4">
                              <div className="flex flex-col md:flex-row items-start gap-2">
                                <img
                                  className="h-16 w-16 mr-4 rounded-lg"
                                  src={item?.image}
                                  alt={item?.name}
                                />
                                <span className="font-semibold">{item?.name}</span>
                              </div>
                            </td>
                            <td className="py-4">₹{item?.price}</td>
                            <td className="py-4">
                              <div className="flex items-center flex-col justify-center">
                                <button
                                  className="border rounded-md py-1 px-2 text-xl h-fit"
                                  onClick={() => decreseQty(item, item.quantity)}
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  className="text-center bg-transparent w-8"
                                  readOnly
                                />
                                <button
                                  className="border rounded-md py-1 px-2 text-xl"
                                  onClick={() => increaseQty(item, item.quantity)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="py-4">₹{calculateDiscountedPrice(item)}</td>
                            <td className="py-4">
                              <i
                                onClick={() => removeCartItemHandler(item?.product)}
                                className="fa-solid fa-trash text-red-500 cursor-pointer"
                              ></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="lg:w-1/4">
                  <div className="bg-gray-300 text-gray-950 rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Taxes</span>
                      <span>₹{taxes.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Shipping</span>
                      <span>₹{shipping.toFixed(2)}</span>
                    </div>
                    {discountApplied && (
                      <div className="flex justify-between mb-2">
                        <span>Coupon Applied</span>
                        <span>-₹{couponValue?.toFixed(2)}</span>
                      </div>
                    )}
                    <hr className="my-2" />
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">₹{total.toFixed(2)}</span>
                    </div>
                    <div className="flex p-0 mb-2">
                      <form className="w-full p-0 m-0" onSubmit={submitHandler}>
                        <div className="relative">
                          {/* <input
                            type="search"
                            id="search"
                            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="Enter Coupon Code"
                            required
                            onChange={(e) => setCouponCode(e.target.value)}
                          /> */}
                          {/* <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2"
                          >
                            <div className="flex justify-center items-center gap-2 center">
                              <span>Apply</span>
                              <span className="">
                                <CouponsIcon />
                              </span>
                            </div>
                          </button> */}
                        </div>
                      </form>
                    </div>
                    <button
                      onClick={checkoutHandler}
                      className="bg-green-800 hover:bg-slate-700/90 text-white py-2 px-4 rounded-lg mt-4 w-full"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;