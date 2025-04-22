import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDeleteOrderMutation } from "../../redux/api/orderApi";
const DeleteOrder = ({ orderId, orderName, onClose }) => {

    const [
        deleteOrder,
        { error: deleteError, isLoading: isDeleteLoading, isSuccess },
      ] = useDeleteOrderMutation();
      const handleDelete = (id) => {
        deleteOrder(id);
      };

      useEffect(() => {
        if (deleteError) {
          toast.error(deleteError?.data?.message);
          onClose();
        }
        if (isSuccess) {
          toast.success("Order Deleted");
          onClose(); // Close the confirmation popup on successful deletion
        }
      }, [deleteError, isSuccess, onClose]);
  return (
    <div className="fixed inset-0  w-screen h-full flex justify-center items-center bg-black/70">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg">
      <h3 className="text-lg font-semibold mb-4">Confirmation</h3>
      <p className="text-gray-700">
        Are you sure you want to delete this order with id "{orderId}"?
      </p>
      <div className="flex justify-end mt-6">
        <button
          onClick={() => handleDelete(orderId)}
          className="px-4 py-2 mr-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          disabled={isDeleteLoading} // Disable the button while loading
        >
          {isDeleteLoading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Yes"
          )}
        </button>

        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          No
        </button>
      </div>
    </div>
  </div>
  )
}

export default DeleteOrder