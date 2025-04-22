import React, { useEffect,useState } from "react";
import { toast } from "react-hot-toast";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import MetaData from "../Layouts/Metadata";
import AdminLayout from "../Layouts/AdminLayout";
import {
  useDeleteOrderMutation,
  useGetAdminOrdersQuery,
} from "../../redux/api/orderApi";
import "../orders/my-order.css";
import SkeletonTable from "../utilities/SkeletonTable";
import DeleteOrder from "../utilities/DeleteOrder";
const ListOrders = () => {
  const { data, isLoading, error } = useGetAdminOrdersQuery();
  const [isConfirmModalOpen,setIsConfirmModalOpen]=useState(false);
  const [selectedOrderId,setSelectedOrderId]=useState('');
  const [selectedOrderName,setSelectedOrderName]=useState('');
  const [
    deleteOrder,
    { error: deleteError, isLoading: isDeleteLoading, isSuccess },
  ] = useDeleteOrderMutation();

  const openConfirm = (id, name) => {
    setIsConfirmModalOpen(true);
    setSelectedOrderId(id);
    setSelectedOrderName(name);
  };
  const closeConfirm = () => {
    setIsConfirmModalOpen(false);
    setSelectedOrderId(null);
    setSelectedOrderName(null);
  };

  const handleClose = ()=>{
    closeConfirm()
  }


  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }

    if (deleteError) {
      toast.error(deleteError?.data?.message);
    }

    if (isSuccess) {
      toast.success("Order Deleted");
    }
  }, [error, deleteError, isSuccess]);

  const deleteOrderHandler = (id) => {
    deleteOrder(id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const setOrders = () => {
    const orders = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Date",
          field: "date",
          sort: "desc",
        },
        {
          label: "Payment Status",
          field: "paymentStatus",
          sort: "asc",
        },
        {
          label: "Order Status",
          field: "orderStatus",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    [...(data?.orders || [])]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort orders by date in descending order
      .forEach((order) => {
        orders.rows.push({
          id: order?._id,
          date: formatDate(order?.createdAt), // Format the date as dd-mm-yyyy
          paymentStatus: order?.paymentInfo?.status?.toUpperCase(),
          orderStatus: order?.orderStatus,
          actions: (
            <>
              <Link
                to={`/admin/orders/${order?._id}`}
                className="btn btn-outline-primary"
              >
                <i className="fa fa-pencil"></i>
              </Link>

              <button
              className="btn btn-outline-danger ms-2"
              onClick={() => openConfirm(order?._id)}
              >
              <i className="fa fa-trash"></i>
            </button>
            </>
          ),
        });
      });

    return orders;
  };

  if (isLoading)
    return (
      <AdminLayout>
        <div className="flex justify-center items-center w-full h-screen">
          <SkeletonTable />
        </div>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <MetaData title={"All Orders"} />

      <h1 className="my-5">{data?.orders?.length} Orders</h1>

      <MDBDataTable
        data={setOrders()}
        className="px-3"
        bordered
        striped
        hover
      />
      {isConfirmModalOpen&&(
        <DeleteOrder orderId={selectedOrderId} orderName={selectedOrderName} onClose={handleClose} />
      )}
    </AdminLayout>
  );
};

export default ListOrders;
