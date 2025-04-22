import React, { useEffect } from "react";
import Metadata from "../Layouts/Metadata";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../Layouts/Loader";
import { useOrderDetailsQuery } from "../../redux/api/orderApi";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
const Invoice = () => {
  const params = useParams();
  const { data, isLoading, error } = useOrderDetailsQuery(params?.id);
  const order = data?.order || {};

  const { shippingInfo, orderItems, paymentInfo, user } = order;

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
    window.scrollTo(0, 0);
  }, [error]);

  const handleDownload = () => {
    //console.log(order, "order");
    const input = document.getElementById("order_invoice");
    html2canvas(input, {
      scale: 2,
      scrollY: 0,
      scrollX: 0,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4", true);

      const pdfWidth = pdf.internal.pageSize.getWidth();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, 297);
      pdf.save(`invoice_${order?._id}.pdf`);
    });
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <Metadata title={"Order Invoice"} />
      <div className=" w-full flex justify-center items-center">
        <button onClick={handleDownload} className="btn btn-success my-3">
          Download
        </button>
      </div>
      <div
        id="order_invoice"
        style={{ backgroundColor: "white" }}
        className="border rounded-lg shadow-lg px-6 py-8 max-w-xl mx-auto mt-8"
      >
        <div className=" flex flex-col justify-center items-center">
          <img
            className="rounded-md"
            src="https://ik.imagekit.io/c1jhxlxiy/INherbz%20logo.jpg?updatedAt=1719861995006"
            alt="logo"
            width={100}
          />
          <div className="flex flex-col justify-center items-center">
            <p className=" px-8  text-center text-sm">
              inherbz Health Care LLP PWD Road, Near SN Jn, Nettoor(P.0), Marad,
              Ernakulam-Cochin, Kerala-682040
            </p>
            <a
              href="mailto:hello@inherbz.com"
              className="underline text-center"
            >
              hello@inherbz.com
            </a>
          </div>
        </div>
        <hr className="mb-2" />
        <div className="flex justify-between mb-6">
          <h1 className="text-lg font-bold">Invoice</h1>
          <div style={{ color: "#374151" }} className="flex-wrap w-40">
            <div>
              <span className=" font-semibold">Date:</span>{" "}
              {new Date(order?.createdAt).toLocaleString("en-US")}
            </div>
            <div>
              <span className=" font-semibold">Invoice #</span>
              {order?._id && order._id.substring(order._id.length - 6)}
            </div>
            <div>
              <span className=" font-semibold">Status</span>{" "}
              {paymentInfo?.status}
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">Bill To:</h2>
          <div style={{ color: "#374151" }} className="mb-2">
            {shippingInfo?.fullName}
          </div>
          <div style={{ color: "#374151" }} className="mb-2">
            {shippingInfo?.address}
          </div>
          <div style={{ color: "#374151" }} className="mb-2">
            {shippingInfo?.city}, {shippingInfo?.zipCode}
          </div>
          <div style={{ color: "#374151" }} className="">
            {shippingInfo?.phoneNo}
          </div>
        </div>
        <table className="w-full mb-8 table-bordered">
          <thead style={{ color: "#374151" }}>
            <tr>
              <th className="text-left font-bold text-sm">ID</th>
              <th className="text-left font-bold  text-sm">NAME</th>
              <th className="text-left font-bold  text-sm">PRICE</th>
              <th className="text-left font-bold  text-sm">QTY</th>
              <th className="text-left font-bold  text-sm">TOTAL</th>
            </tr>
          </thead>

          <tbody style={{ color: "#374151" }}>
            {orderItems?.map((item) => (
              <tr>
                <td className="text-left  text-sm">
                  {item?.product &&
                    item.product.substring(item.product.length - 6)}
                </td>
                <td className="text-left  text-sm ">{item?.name}</td>
                <td className="text-left  text-sm">₹{item?.price}</td>
                <td className="text-left  text-sm">{item?.quantity}</td>
                <td className="text-left  text-sm">
                  ₹{item?.price * item?.quantity}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot style={{ color: "#374151" }} className="w-full table-auto">
            <tr>
              <td className="text-left font-bold  text-sm">Sub-total</td>
              <td colSpan={4} className="text-right font-bold ">
                ₹{order?.itemsPrice}
              </td>
            </tr>

            <tr>
              <td className="text-left font-bold  text-sm">TAX 18%</td>
              <td colSpan={4} className="text-right font-bold ">
                ₹{order?.taxAmount}
              </td>
            </tr>
            <tr>
              <td className="text-left font-bold  text-sm">Shipping</td>
              <td colSpan={4} className="text-right font-bold ">
                ₹{order?.shippingAmount}
              </td>
            </tr>
            <tr>
              <td className="text-left font-bold  text-sm">GRAND TOTAL</td>
              <td colSpan={4} className="text-right font-bold ">
                ₹{order?.totalAmount}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className=" mb-2">Thank you for your business!</div>
        <div className=" text-sm"></div>
      </div>
    </div>
  );
};

export default Invoice;
