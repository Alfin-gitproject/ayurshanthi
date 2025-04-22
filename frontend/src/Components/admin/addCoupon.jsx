import React, { useEffect, useState } from "react";
import { useCreateCouponMutation } from "../../redux/api/orderApi";
import toast from "react-hot-toast";

const AddCoupon = ({closeModal}) => {

  const [coupon, setCoupon] = useState({
    code: "",
    discountType: "percentage",
    discountValue: 0,
    expirationDate: "",
    usageLimit: 10,
    usedCount: 0,
    usedBy: [],
  })

  const [createCoupon, { isLoading, error, isSuccess }] =

    useCreateCouponMutation();


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (error) {
        closeModal()
        toast.error(error?.data?.message);
      }
  
      if (isSuccess) {
        closeModal()
        toast.success("Coupon created");
      }
    }, [error, isSuccess, closeModal]);
  const submitHandler = (e) => {
    if (coupon.discountType==="percentage") {
      if (coupon.discountValue>100) {
        closeModal()
        toast.error("Discount Value Cannot be greater than 100")
        return
      }
      if (coupon.discountValue===0) {
        closeModal()
        toast.error("Discount Value Cannot be Zero")
        return
      }
    }
    e.preventDefault();
    createCoupon(coupon)
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setCoupon((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const today = new Date().toISOString().split('T')[0];
  return (
    <div>
      <div className="relative p-4 bg-gray-200 rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Add Coupon
          </h3>
        </div>
        <form onSubmit={submitHandler}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="code"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Coupon Code
              </label>
              <input
                type="text"
                name="code"
                id="code"
                value={coupon.code}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter coupon code"
                required
              />
            </div>
            <div>
              <label
                htmlFor="discountType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Discount Type
              </label>
              <select
                name="discountType"
                id="discountType"
                value={coupon.discountType}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="discountValue"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Discount Value
              </label>
              <input
                type="number"
                name="discountValue"
                id="discountValue"
                value={coupon.discountValue}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="expirationDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Expiration Date
              </label>
              <input
                type="date"
                name="expirationDate"
                id="expirationDate"
                min={today}
                value={coupon.expirationDate}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="usageLimit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Usage Limit
              </label>
              <input
                type="number"
                name="usageLimit"
                id="usageLimit"
                value={coupon.usageLimit}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`text-white inline-flex items-center bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-primary-800 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Submit"
            )}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
