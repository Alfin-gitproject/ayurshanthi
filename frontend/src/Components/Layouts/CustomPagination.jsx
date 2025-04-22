import React from "react";

const CustomPagination = ({ resPerPage, filteredProductsCount, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(filteredProductsCount / resPerPage);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-1 mx-1 rounded-md transition-colors ${
            i === currentPage
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-green-100"
          }`}
          aria-current={i === currentPage ? "page" : undefined}
          aria-label={`Page ${i}`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center gap-2 py-4" role="navigation" aria-label="Pagination">
      {/* First Button */}
      <button
        onClick={() => handlePageClick(1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md transition-colors ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-green-800 text-white hover:bg-slate-800"
        }`}
        aria-label="First page"
        aria-disabled={currentPage === 1}
      >
        First
      </button>

      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md transition-colors ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-green-800 text-white hover:bg-slate-800"
        }`}
        aria-label="Previous page"
        aria-disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md transition-colors ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-green-800 text-white hover:bg-slate-800"
        }`}
        aria-label="Next page"
        aria-disabled={currentPage === totalPages}
      >
        Next
      </button>

      {/* Last Button */}
      <button
        onClick={() => handlePageClick(totalPages)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md transition-colors ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-green-800 text-white hover:bg-slate-800"
        }`}
        aria-label="Last page"
        aria-disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default CustomPagination;