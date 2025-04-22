import React, { useEffect, useState } from 'react'
import { useUpdateCouponMutation } from '../../redux/api/orderApi';
import toast from 'react-hot-toast';


const UpdateCoupon = ({couponData,closeUpdateModal}) => {
    
    const [coupon, setCoupon] = useState({
        code: "",
        discountType: "percentage",
        discountValue: 0,
        expirationDate: "",
        usageLimit: 10,
        usedCount: 0,
        usedBy: [],
      });

      const [updateCoupon, { isLoading, error, isSuccess }] = useUpdateCouponMutation();

      const submitHandler = (e) => {
        e.preventDefault();
        // Destructure the coupon object to exclude _id, usedBy, and usedCount properties
        const { _id, usedBy, usedCount , ...couponWithoutIdAndExtras} = coupon;
        
        //console.log(_id, 'id'); // Logging the id if needed for debugging
        
        // Pass the coupon object without _id, usedBy, and usedCount to the updateCoupon function
        updateCoupon({ id: _id, body: couponWithoutIdAndExtras });
      };
      
      

      const onChange = (e) => {
        const { name, value } = e.target;
        setCoupon((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const today = new Date().toISOString().split('T')[0];

      useEffect(() => {
        if (couponData) {
          setCoupon({
            ...couponData,
            expirationDate: couponData.expirationDate ? new Date(couponData.expirationDate).toISOString().split('T')[0] : "", // Ensure the date format is compatible with input[type=date]
          });
       // console.log(couponData,'data');
        
        }
      }, [couponData]);

      useEffect(() => {
        if (isSuccess) {
            closeUpdateModal()
            toast.success("Successfully Updated the Coupon")
        }
        if (error) {
            closeUpdateModal()
            toast.error("Error Updating Coupon")
        }
      }, [closeUpdateModal, error, isSuccess]);

      
  return (
    <div>
        <div className="relative p-4 bg-gray-200 rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Update Coupon
            </h3>
            </div>
        <form onSubmit={submitHandler}>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
            <label
                htmlFor="code"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Code
            </label>
            <input
                type="text"
                name="code"
                id="code"
                value={coupon.code}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Coupon code"
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
                id="discountType"
                name="discountType"
                value={coupon.discountType}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed Amount</option>
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
                placeholder="Discount value"
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
            />
            </div>
        </div>
        <button
            type="submit"
            className="text-white inline-flex items-center bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-primary-800"
        >
            Submit
        </button>
        </form>
        </div>
    </div>
  )
}

export default UpdateCoupon