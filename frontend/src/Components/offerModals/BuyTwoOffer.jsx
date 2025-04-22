import React from "react";
const BuyTwoOffer = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-[999999] overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4 text-center \">
          <div
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          ></div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500  mt-0 opacity-100 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
              <div className="absolute top-2 z-[999] end-2">
                <button
                  type="button"
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Close"
                  data-hs-overlay="#hs-subscription-with-image"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div className="aspect-w-16 aspect-h-8">
                <img
                  className="w-full object-cover rounded-t-xl"
                  src="https://images.unsplash.com/photo-1648747067020-73f77da74e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Modal Hero"
                />
              </div>
              <div className="p-4 sm:p-10 text-center overflow-y-auto">
                <h3
                  id="hs-subscription-with-image-label"
                  className="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200"
                >
                  Yeahhhh 🎉
                </h3>
                <p className="text-gray-500 dark:text-neutral-500">
                  Thank you for your subscription. You will be sent the next
                  issue of our newsletter shortly.
                </p>
                <div className="mt-6 flex justify-center gap-x-4">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    data-hs-overlay="#hs-subscription-with-image"
                  >
                    Got it
                  </button>
                  <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                    href="#me"
                  >
                    Settings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyTwoOffer;
