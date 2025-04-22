import React from "react";

const GardientButton = ({ text }) => {
  return (
    <>
      <button
        type="button"
        class="px-5 py-3 text-white bg-gradient-to-r from-green-600 via-green-600 to-green-600 hover:from-green-500 hover:to-green-600 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-teal-800 font-medium rounded-lg text-center font-calibri"
      >
        {text}
      </button>
    </>
  );
};

export default GardientButton;
