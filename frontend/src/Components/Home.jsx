import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productsApi.js";
import ProductItem from "./products/ProductItem.jsx";
import Metadata from "./Layouts/Metadata";
import Banners from "./Layouts/Banners/Banners";
import AboutHome from "./Layouts/AboutHome.jsx";
import CategoryFilter from "./Layouts/CategoryFilter.jsx";
import Filters from "./Layouts/Filters.jsx";
import CustomPagination from "./Layouts/CustomPagination.jsx";
import NoResultPage from "./utilities/NoResultPage.jsx";
import SkeletonHero from "./utilities/SkeletonHero.jsx";
import Benefits from "./extras/Benefits.jsx";
import Testimonials from "./extras/Testimonials.jsx";
import Loader from "./Layouts/Loader.jsx";
import toast from "react-hot-toast";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

// Import PRODUCT_CATEGORIES
import { PRODUCT_CATEGORIES } from "../Constants/constants.js";

function Home() {
  let [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const keyword = searchParams.get("keyword") || "";
  const min = searchParams.get("min");
  const max = searchParams.get("max");
  const category = searchParams.get("category");
  const ratings = searchParams.get("ratings");

  // Set resPerPage to 4
  const resPerPage = 4;

  // Create query params for API, exclude resPerPage from URL
  const params = { page, keyword, resPerPage };
  if (min != null) params.min = min;
  if (max != null) params.max = max;
  if (category != null) params.category = category;
  if (ratings != null) params.ratings = ratings;

  // Manual loading state for pagination transitions
  const [isPageLoading, setIsPageLoading] = useState(false);

  // State for search input
  const [searchInput, setSearchInput] = useState(keyword);

  const { data, isError, error, isLoading, isFetching, refetch } = useGetProductsQuery(params, {
    refetchOnMountOrArgChange: true, // Force refetch on page change
  });

  // Extract pagination data
  const products = data?.filteredProducts || data?.products || [];
  const filteredProductsCount = data?.filteredProductsCount || products.length || 0;
  const apiResPerPage = data?.resPerPage || resPerPage;
  const totalPages = Math.ceil(filteredProductsCount / apiResPerPage);

  // Debug API response and fetching state
  useEffect(() => {
    console.log("isLoading:", isLoading, "isFetching:", isFetching, "isPageLoading:", isPageLoading);
    if (data) {
      console.log("API Response:", data);
    }
    if (isFetching) {
      console.log("Fetching products for page:", page);
    }
  }, [data, isFetching, isLoading, isPageLoading, page]);

  // Handle errors
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || "Error fetching products");
      setIsPageLoading(false);
    }
  }, [error?.data?.message, isError]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset page if it exceeds totalPages
  useEffect(() => {
    if (totalPages > 0 && page > totalPages) {
      const newParams = {};
      if (keyword) newParams.keyword = keyword;
      if (min != null) newParams.min = min;
      if (max != null) newParams.max = max;
      if (category) newParams.category = category;
      if (ratings != null) newParams.ratings = ratings;
      newParams.page = 1;
      setSearchParams(newParams);
      setIsPageLoading(true);
    }
  }, [page, totalPages, setSearchParams, keyword, min, max, category, ratings]);

  // Handle page change with manual loading state
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== page) {
      const newParams = {};
      if (keyword) newParams.keyword = keyword;
      if (min != null) newParams.min = min;
      if (max != null) newParams.max = max;
      if (category) newParams.category = category;
      if (ratings != null) newParams.ratings = ratings;
      newParams.page = newPage;
      setSearchParams(newParams);
      setIsPageLoading(true);
    }
  };

  // Clear manual loading state when fetch completes
  useEffect(() => {
    if (!isFetching && !isLoading && isPageLoading) {
      setIsPageLoading(false);
    }
  }, [isFetching, isLoading, isPageLoading]);

  // Handle search input change
  const handleSearch = (e) => {
    e.preventDefault();
    const newParams = { page: 1 };
    if (searchInput.trim()) newParams.keyword = searchInput.trim();
    if (min != null) newParams.min = min;
    if (max != null) newParams.max = max;
    if (category) newParams.category = category;
    if (ratings != null) newParams.ratings = ratings;
    setSearchParams(newParams);
    setIsPageLoading(true);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    const newParams = { page: 1 };
    if (selectedCategory && selectedCategory !== "All") newParams.category = selectedCategory;
    if (searchInput.trim()) newParams.keyword = searchInput.trim();
    if (min != null) newParams.min = min;
    if (max != null) newParams.max = max;
    if (ratings != null) newParams.ratings = ratings;
    setSearchParams(newParams);
    setIsPageLoading(true);
  };

  // Show loader during initial load, subsequent fetches, or manual loading
  if (isLoading || isFetching || isPageLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" aria-busy="true">
        <Loader />
      </div>
    );
  }

  // Show error or no results after fetching
  if (isError) return <div>Error: {error?.data?.message || "Failed to load products"}</div>;
  if (products.length === 0) return <NoResultPage />;

  return (
    <>
      <Metadata title={"Natural Products Online"} />
      <div>
        {/* {!keyword && <Banners />} */}
        {!keyword && <AboutHome />}
        <section
          id="products"
          className="bg-gradient-to-b from-gray-200 to-gray-50"
        >
          {/* Large and Visually Appealing Search Bar and Category Filter */}
          {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="w-full sm:w-64">
              <div className="relative">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search products..."
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white shadow-md focus:ring-2 focus:ring-green-800 focus:border-green-800 text-base transition-colors hover:bg-green-50"
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-800 text-white px-3 py-1 rounded-md hover:bg-green-900 transition-colors"
                  aria-label="Submit search"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="w-full sm:w-48">
              <select
                value={category || "All"}
                onChange={handleCategoryChange}
                className="w-full p-3 rounded-lg border border-gray-300 bg-white shadow-md focus:ring-2 focus:ring-green-800 focus:border-green-800 text-base transition-colors hover:bg-green-50"
                aria-label="Filter by category"
              >
                <option value="All">Select category</option>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold py-5 text-base-300">
              {keyword
                ? `${products.length} Products found with this Keyword: ${keyword}`
                : "All Products"}
            </h1>
          </div> */}
          <div
            className={`flex justify-center py-3 ${keyword ? "w-[90%]" : ""} mx-auto w-full`}
          >
            {/* {keyword && (
              <div className="hidden md:block md:w-1/4 px-4">
                <p className="text-lg font-bold">Filters:</p>
                <Filters />
              </div>
            )} */}
            <section
              id="Products"
              className="w-fit max-w-screen-lg bg-transparent mx-auto gap-y-20 gap-x-14 mt-10 mb-10 pb-10"
            >
              {isFetching ? (
                <SkeletonHero />
              ) : (
                <div
                  className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-16"
                >
                  {products.map((product) => (
                    <ProductItem key={product._id} product={product} />
                  ))}
                </div>
              )}
            </section>
          </div>
          {totalPages > 1 && (
            <CustomPagination
              resPerPage={apiResPerPage}
              filteredProductsCount={filteredProductsCount}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          )}
        </section>
      </div>
    </>
  );
}

export default Home;