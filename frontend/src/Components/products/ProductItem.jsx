import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./product-item.css";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../redux/features/cartSlice";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GardientButton from "../utilities/GardientButton";
import { motion } from "framer-motion";
function ProductItem({ product }) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  // const fadeInAnimationVariants = {
  //   initial: {
  //     opacity: 0,
  //     y: 100,
  //   },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //     },
  //   },
  // };

  const dispatch = useDispatch();
  const setItemToCart = () => {
    const cartItem = {
      product: product?._id,
      name: product?.name,
      price: product?.price,
      image: product?.images[0]?.url,
      stock: product?.stock,
      quantity: 1,
      offer: product?.offer,
    };

    dispatch(setCartItem(cartItem));
    toast.success("Item added to Cart");
  };
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden font-bcf">
      <div>
        <Link to={`products/${product._id}`}>
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={50}
            slidesPerView={1}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.url}
                  alt={`Productimg ${index + 1}`}
                  className=" w-72 h-80 object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Link>
        <div className="px-4 py-3 w-72">
          <Link>
            <div variants={item} class="flex items-center mb-2">
              <div className="rating rating-half !cursor-default">
                <input
                  type="radio"
                  name="rating-10 "
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
              <p class="text-gray-600 font-bold text-sm ml-1">
                {product?.ratings}
                {/* <span class="text-gray-500 font-normal ms-1">
                  ({product?.numOfReviews} reviews)
                </span> */}
              </p>
            </div>
            <Link
              to={`products/${product._id}`}
              className="text-lg font-bold text-black truncate block capitalize"
            >
              {product.name}
            </Link>
              <p className="text-sm text-gray-700 line-clamp-3">
              {product.description?.text }
            </p>
            {/* <p className="text-sm text-gray-700 line-clamp-3" >
              {product.description?.benefits}
            </p>
            <p className="text-sm text-gray-700 line-clamp-3" >
              {product.description?.usage}
            </p>   */}
          </Link>
          
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ₹ {product.price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                ₹ {product.actualPrice}
              </p>
            </del>
            <div className="ml-auto flex gap-6 items-center">
              <button onClick={setItemToCart}>
                <i className="fa-solid text-green-600 fa-bag-shopping text-xl" />
              </button>
              <Link to={`products/${product._id}`}>
                <i className="fa-solid fa-arrow-right text-xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
