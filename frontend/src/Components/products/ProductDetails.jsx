import React, { useEffect, useState } from "react";
import {
  useCanUserReviewQuery,
  useGetProductDetailsQuery,
} from "../../redux/api/productsApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../Layouts/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem } from "../../redux/features/cartSlice";
import NoResultPage from "../utilities/NoResultPage";
import Reviews from "../reviews/Reviews";
import NewReview from "../reviews/NewReview";
import Modals from "../utilities/Modals";
import ListReviews from "../reviews/ListReviews";
import StarRatings from "react-star-ratings";
import Testimonials from "../extras/Testimonials";
import Description from "./ProductPages/StarKid/Description";
import Stickybanner from "./ProductPages/StarKid/Stickybanner";
import Benefits from "./ProductPages/StarKid/Benefits";
import DescriptionHairOil from "./ProductPages/StarKid/HairOil/DescriptionHairOil";
import DescriptionShampoo from "./ProductPages/StarKid/HairShampoo/DescriptionShampoo";
import HairCareCompo from "./ProductPages/StarKid/HairCareCompo/HairCareCompo";
import QuantitySelector from "./QuantitySelector";
import { checkDiscount } from "../../helpers/helper";

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [activeImg, setActiveImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [actualPrice, setActualPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeTab, setActiveTab] = useState("benefits");
  const { data, error, isLoading, isError } = useGetProductDetailsQuery(
    params?.id
  );
  const { isAuthenticated } = useSelector((state) => state.auth);
  const product = data?.productById;
  const { data: canUserReview } = useCanUserReviewQuery(params?.id);
  const canReview = canUserReview?.canReview;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setActiveImage(
      product?.images[0]
        ? product?.images[0]?.url
        : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cureuppharma.in%2Fdummy%2F&psig=AOvVaw29IYEOkobIC4aMEjkiKBoN&ust=1702307845706000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJj4sIqVhYMDFQAAAAAdAAAAABAE"
    );
  }, [product]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [data, error?.data?.message, isError]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  // const calculateDiscountedPrice = () => {
  //   if (product._id === "6632450450b3e83d0b476637") {
  //     let firstItemPrice = product.price;
  //     let secondItemPrice = product.price * 0.9;
  //     let thirdItemPrice = product.price * 0.7;

  //     if (quantity === 1) {
  //       return Math.trunc(firstItemPrice);
  //     } else if (quantity === 2) {
  //       return Math.trunc(firstItemPrice + secondItemPrice);
  //     } else if (quantity === 3) {
  //       return Math.trunc(firstItemPrice + secondItemPrice + thirdItemPrice);
  //     } else {
  //       let additionalItemsPrice = (quantity - 3) * product.price * 0.7;
  //       return Math.trunc(
  //         firstItemPrice +
  //           secondItemPrice +
  //           thirdItemPrice +
  //           additionalItemsPrice
  //       );
  //     }
  //   }

  //   const fullPriceTotal = product.price;
  //   const discountedPriceTotal =
  //     (quantity - 1) * product.price * (1 - product?.offer / 100);
  //   const totalPrice = fullPriceTotal + discountedPriceTotal;

  //   return Math.trunc(totalPrice);
  // };

  const hiddenProductId = "6632450450b3e83d0b476637";

  const setItemToCart = () => {
    const cartItem = {
      product: product?._id,
      name: product?.name,
      price: product?.price,
      image: product?.images[0]?.url,
      stock: product?.stock,
      offer: product?.offer,
      quantity,
    };

    dispatch(setCartItem(cartItem));
    toast.success("Item added to Cart");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buttonClasses =
    "inline-block flex-1 rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 sm:flex-none md:text-base";
  const gradientClasses = "bg-gradient-to-r from-custom-brown to-custom-tan";
  const defaultClasses =
    "bg-green-800 hover:bg-slate-800 focus-visible:ring ring-indigo-300 active:bg-teal-700";

  if (isLoading) return <Loader />;

  if (error && error?.status === 404) {
    return <NoResultPage />;
  }

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-100 text-gray-950 dark:text-gray-900 py-6 sm:py-8 lg:py-12 font-bcf">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 h-full relative">
            {/* images - start */}
            <div className="grid gap-4 lg:grid-cols-5 w-full">
              <div className="lg:col-span-1">
                <div className="order-last flex sticky top-20 left-0 gap-4 lg:order-none lg:flex-col">
                  {product?.images?.map((img) => (
                    <div
                      key={img?.url}
                      className={`overflow-hidden rounded-lg bg-gray-100 shadow-md border-2 ${
                        img?.url === activeImg ? " border-emerald-500" : ""
                      }`}
                    >
                      <img
                        src={img?.url}
                        loading="lazy"
                        alt={product?.name}
                        className="h-auto w-20 sm:w-full object-cover object-center aspect-square cursor-pointer"
                        onClick={() => setActiveImage(img?.url)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="sticky top-20 left-0 rounded-lg bg-gray-100 lg:col-span-4">
                <img
                  src={activeImg}
                  loading="lazy"
                  alt={product?.name}
                  className="h-auto w-full sticky top-20 left-0 object-cover object-center aspect-square border-2 rounded-lg"
                />
              </div>
            </div>
            {/* images - end */}
            {/* content - start */}
            <div className="md:py-8">
              {/* name - start */}
              <div className="mb-2 md:mb-3">
                <h2 className="text-2xl font-bold lg:text-3xl">
                  {product?.name}
                </h2>
              </div>
              {/* name - end */}
              {/* rating - start */}
              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <div className="flex h-7 items-center gap-1 rounded-full bg-orange-50 text-white">
                  <div className="rating rating-half">
                    <input
                      type="radio"
                      name="rating-10"
                      className="rating-hidden"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-1 bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-2 bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-1 bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-2 bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-1 bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-2 bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-1 bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-2 bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-1 bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-2 bg-orange-500/40"
                    />
                  </div>
                  <span className="text-sm text-gray-700">
                    {product?.ratings}
                  </span>
                </div>
              </div>
              {/* description */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Description
              </h3>
              <p className="text-sm text-gray-700 line-clamp-3">
                {product.description?.text}
              </p>
              <p className="text-sm text-gray-700 line-clamp-3">
                {product.description?.benefits}
              </p>
              <p className="text-sm text-gray-700 line-clamp-3">
                {product.description?.usage}
              </p>

              {/* Add margin to create a line of space */}
              <div className="mt-4">
                {/* stock status */}
                <div className="text-xl transition duration-100 pb-2">
                  <h3
                    className={
                      product?.stock > 0
                        ? "text-green-600 font-semibold"
                        : "text-red-700 font-semibold"
                    }
                  >
                    {product?.stock > 0 ? "In Stock" : "Out of Stock"}
                  </h3>
                </div>
              </div>
              {/* quantity - start */}
              <QuantitySelector
                product={product}
                onQuantityChange={handleQuantityChange}
                actualPrice={actualPrice}
                discountPrice={discountPrice}
              />
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold md:text-2xl">
                    ₹{product.price * quantity}
                  </span>
                  <span className="mb-0.5 text-red-400 line-through">
                    ₹{Math.ceil(product?.actualPrice * quantity)}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  incl. VAT plus shipping
                </span>
                {product?.description && (
                  <div className="mt-3 text-gray-600">
                    <h2 className="text-md font-semibold mb-1">Description</h2>
                    <p className="text-sm leading-relaxed">
                      {product.description.text}
                    </p>
                    <div className="mt-4">
                      <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">
                          Select tab
                        </label>
                        <select
                          id="tabs"
                          className="bg-gray-0 border border-gray-100 text-gray-700 text-sm rounded-lg focus:ring-4 focus:ring-emerald-300 focus:border-emerald-300 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                          value={activeTab}
                          onChange={(e) => setActiveTab(e.target.value)}
                        >
                          <option value="benefits">Benefits</option>
                          <option value="usage">Usage</option>
                        </select>
                      </div>
                      <ul className="hidden text-sm font-medium text-center text-gray-400 rounded-lg shadow-sm sm:flex dark:divide-slate-600 dark:text-gray-300">
                        <li className="w-full focus-within:z-10">
                          <button
                            className={`inline-block w-full p-4 border-r border-gray-100 dark:border-slate-600 rounded-s-lg focus:ring-4 focus:ring-emerald-300 focus:outline-none ${
                              activeTab === "benefits"
                                ? "bg-green-800 text-white"
                                : "bg-white text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600"
                            }`}
                            onClick={() => setActiveTab("benefits")}
                          >
                            Benefits
                          </button>
                        </li>
                        <li className="w-full focus-within:z-10">
                          <button
                            className={`inline-block w-full p-4 border-s-0 border-gray-200 dark:border-slate-600 rounded-e-lg focus:ring-4 focus:ring-emerald-300 focus:outline-none ${
                              activeTab === "usage"
                                ? "bg-green-800 text-white"
                                : "bg-white text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600"
                            }`}
                            onClick={() => setActiveTab("usage")}
                          >
                            Usage
                          </button>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <div
                          className={
                            activeTab === "benefits"
                              ? "block p-4 rounded-lg"
                              : "hidden"
                          }
                        >
                          <p className="text-sm text-black">
                            {product.description.benefits ||
                              "No benefits information available."}
                          </p>
                        </div>
                        <div
                          className={
                            activeTab === "usage"
                              ? "block p-4 rounded-lg"
                              : "hidden"
                          }
                        >
                          <p className="text-sm text-black">
                            {product.description.usage ||
                              "No usage instructions available."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* price - end */}
              {/* shipping notice - start */}
              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                <span className="text-sm">2-4 day shipping</span>
              </div>
              {/* shipping notice - end */}
              {/* buttons - start */}
              <div className="flex gap-2.5">
                <button
                  onClick={setItemToCart}
                  className={`${buttonClasses} ${product._id === "663245e150b3e83d0b476640" ? gradientClasses : defaultClasses}`}
                >
                  Add to cart
                </button>
              </div>
              {/* buttons - end */}
              {/* product description */}
              {product._id === "663245e150b3e83d0b476640" && (
                <DescriptionHairOil />
              )}
              {product._id === hiddenProductId && <Description />}
              {product._id === "6642247f2caa481cc3839db8" && (
                <DescriptionShampoo />
              )}
              {product._id === "66af175e5d352a1092138910" && <HairCareCompo />}
              {product._id === "663f38b9f35f7a395cc76342" && (
                <div className="flex flex-col my-5">
                  <p className={`${readMore ? "" : "line-clamp-4"}`}>
                    {product?.description}
                  </p>
                  <span
                    onClick={() => setReadMore(!readMore)}
                    className="text-info cursor-pointer"
                  >
                    {readMore ? "Read less" : "Read more"}
                  </span>
                </div>
              )}
            </div>
            {/* content - end */}
          </div>
          {product._id === hiddenProductId && <Benefits />}
          <div className="my-2">
            {isAuthenticated && canReview ? (
              <div className="w-full flex justify-center">
                <button
                  onClick={openModal}
                  className="btn bg-emerald-500 border-none text-white mx-auto my-2"
                >
                  Submit your Review
                </button>
              </div>
            ) : (
              <div role="alert" className="alert alert-warning w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>
                  You need to login and purchase this product to write a review
                </span>
              </div>
            )}
            {product?.reviews?.length > 0 && (
              <ListReviews reviews={product?.reviews} />
            )}
            <Modals isOpen={isModalOpen} onRequestClose={closeModal}>
              <NewReview productId={product?._id} closeModal={closeModal} />
            </Modals>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
