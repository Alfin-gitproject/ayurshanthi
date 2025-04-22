import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import MetaData from "../Layouts/Metadata";

import AdminLayout from "../Layouts/AdminLayout";
import { useGetCouponsQuery } from "../../redux/api/orderApi";
import "../orders/my-order.css";
import SkeletonTable from "../utilities/SkeletonTable";
import Modals from "../utilities/Modals";
import AddCoupon from "./addCoupon";
import UpdateCoupon from "./UpdateCoupon";
import DangerConfirm from "../utilities/DangerConfirm";
import CouponDelete from "../utilities/CouponDelete";

const CouponCode = () => {
  const { data, isLoading, error } = useGetCouponsQuery(); // Add parentheses here
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [couponData,setCouponData] = useState(null)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedCouponId, setSelectedCouponId] = useState(null);
  const [selectedCouponName, setSelectedCouponName]=useState(null)
 const openUpdateModal = (couponData) =>{
  
  setCouponData(couponData)
  setIsUpdateOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsConfirmModalOpen(false)
  };
  const closeUpdateModal = () =>{
    setIsUpdateOpen(false)
  }

  const handleCouponDelete = (couponId,couponName) =>{
    setSelectedCouponId(couponId)
    setSelectedCouponName(couponName)
    setIsConfirmModalOpen(true)
  }
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data) {
      //console.log("Coupon Data:", data); 
    }
  }, [error, data]);

  const setOrders = () => {
    const coupons = {
      columns: [
        {
          label: "Code",
          field: "Code",
          sort: "asc",
        },
        {
          label: "Coupon Validity",
          field: "CouponValidity",
          sort: "asc",
        },
        {
          label: "Used Count",
          field: "usedCount",
          sort: "asc",
        },
        {
          label: "Used Limit",
          field: "usedLimit",
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

    data?.coupons?.forEach((coupon) => {
      coupons.rows.push({
        Code: coupon?.code,
        usedCount:coupon?.usedCount,
        usedLimit:coupon?.usageLimit,
        CouponValidity: coupon?.expirationDate
          ? new Date(coupon.expirationDate).toLocaleDateString()
          : "No expiration date available",
        actions: (
          <>
            <button onClick={() => openUpdateModal(coupon)} className="btn btn-outline-primary">
              <i className="fa fa-pencil"></i>
            </button>

            <button onClick={()=>handleCouponDelete(coupon._id,coupon.code)} className="btn btn-outline-danger ms-2">
              <i className="fa fa-trash"></i>
            </button>
          </>
        ),
      });
    });

    return coupons;
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center w-full h-screen">
          <SkeletonTable />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <MetaData title={"Coupons"} />
      <div className="flex justify-end">
        <button onClick={()=>setIsModalOpen(true)} className="btn btn-accent">
          Add Coupon
        </button>
      </div>

      {data?.coupons?.length>0&&<h1 className="my-5">{data?.coupons?.length} Coupons</h1>}

      <MDBDataTable
        data={setOrders()}
        className="px-3"
        bordered
        striped
        hover
      />
       <Modals isOpen={isModalOpen} onRequestClose={closeModal}>
        <AddCoupon closeModal={closeModal} />
      </Modals>
      <Modals isOpen={isUpdateOpen} onRequestClose={closeUpdateModal}>
        <UpdateCoupon couponData={couponData} closeUpdateModal={closeUpdateModal} />
      </Modals>
      {isConfirmModalOpen && (
        <CouponDelete
          isOpen={isConfirmModalOpen}
          onRequestClose={closeModal}
          couponId={selectedCouponId}
          selectedCouponName={selectedCouponName}
          onClose={handleClose}
        />
      )}
    </AdminLayout>
  );
};

export default CouponCode;
