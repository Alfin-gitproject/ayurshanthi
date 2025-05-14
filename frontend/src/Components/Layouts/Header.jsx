import React, { useEffect, useState } from "react";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLazyLogoutQuery } from "../../redux/api/authApi";
import { useGetMeQuery } from "../../redux/api/userApi";
import toast from "react-hot-toast";
import MobileSearch from "./MobileSearch";
import { calculateOrderCostWithOffer } from "../../helpers/helper";

function Header() {
  const navigate = useNavigate();
  const { isLoading } = useGetMeQuery();
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const [logout, { isSuccess, error }] = useLazyLogoutQuery();
  const [showDropDown, setShowDropDown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const logoutHandler = () => {
    logout();
    navigate(0);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logout successful");
      navigate("/");
    }

    if (error) {
      toast.error(error.message || "Logout failed");
      navigate(0);
    }
  }, [isSuccess, error, navigate]);

  const { totalPrice } = calculateOrderCostWithOffer(cartItems);
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      // Guard against undefined values
      if (!item || !item.price || !item.quantity) return acc;

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
      const fullPriceTotal = item.price || 0;
      const discountedPriceTotal =
        item.quantity > 1
          ? (item.quantity - 1) * item.price * (1 - (item?.offer || 0) / 100)
          : 0;
      const itemTotal = fullPriceTotal + discountedPriceTotal;

      return acc + Number(itemTotal.toFixed(2));
    }, 0);
  };

  const totalProductPrice = calculateSubtotal();
  return (
    <div className="sticky bg-gray-300 bg-blend-multiply bg-opacity-95 top-0 z-50">
      <div className="py-4 pl-8 pr-10 navbar">
        {/* Logo */}
        <div className="flex-none">
          <Link to="/" className="p-0 text-xl text-gray-100">
            <img
              width={120}
              className="rounded-lg"
              src="/assets/images/ayurshanthi.png"  
              alt="Ayurshanthi Logo"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="justify-end flex-1 gap-3 flex items-center">
          {/* Search */}
          <Search
            onMobileSearchClick={() =>
              setShowMobileSearch(!showMobileSearch)
            }
          />

          {/* Cart Icon */}
          <div className="relative cursor-pointer" onClick={() => setShowCart(!showCart)}>
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="p-1 text-sm text-white bg-red-700 rounded-full badge indicator-item">
                {cartItems.length}
              </span>
            </div>

           {/* Cart Dropdown */}
      {showCart && (
        <div className="absolute right-0 mt-2 w-60 card card-compact dropdown-content shadow z-[2] bg-white rounded-lg">
          <div className="card-body">
            <span className="text-lg font-bold text-gray-800">
              {cartItems.length} Item(s)
            </span>
            <span className="text-success">
              Total: ₹{totalPrice ? totalProductPrice.toFixed(2) : "0.00"}
            </span>
            <div className="card-actions">
              <Link
                to="/cart"
                className="btn bg-green-800 border-0 hover:bg-slate-600/70 btn-block text-gray-100"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      )}
          </div>

          {/* User Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={() => setShowDropDown(!showDropDown)}
            >
              <div className="w-8 rounded-full border">
                <i className="fa-regular fa-user text-lg text-white"></i>
              </div>
            </div>

            {showDropDown && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-300 rounded-box w-52"
              >
                {user?.role === "admin" && (
                  <li>
                    <Link to="/admin/products">Dashboard</Link>
                  </li>
                )}
                <li>
                  <Link to={user ? "/me/profile" : "/login"}>
                    {user ? "My Profile" : "Login"}
                  </Link>
                </li>
                {user && (
                  <li>
                    <button onClick={logoutHandler}>Logout</button>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="block sm:hidden">
        {showMobileSearch && <MobileSearch />}
      </div>
    </div>
  );
}

export default Header;
