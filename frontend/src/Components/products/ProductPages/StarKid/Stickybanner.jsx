import React from "react";

const Stickybanner = ({ productImg }) => {
  return (
    <div
      id="bottom-banner"
      tabIndex={-1}
      className=" sticky bottom-0 start-0 z-50 flex justify-between w-full p-4  bg-gray-50 border-t-8 border-green-600"
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-3xl justify-around font-normal text-gray-700">
          <img src={productImg} alt="" />
          <span>
            STAR KID Vitamin Gummies
            <a
              href="https://flowbite.com"
              className="flex items-center ms-0 text-sm font-medium text-blue-600 md:ms-1 md:inline-flex dark:text-blue-500 hover:underline"
            >
              Become a partner{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          data-dismiss-target="#bottom-banner"
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default Stickybanner;
