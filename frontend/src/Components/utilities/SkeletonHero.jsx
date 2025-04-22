import React from "react";

const SkeletonHero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
      <div className="w-72 bg-gray-200 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden font-bcf animate-pulse">
        <div>
          <div className="w-72 h-80 bg-gray-300" />
          <div className="px-4 py-3 w-72">
            <div className="flex items-center mb-2">
              <div className="h-4 bg-gray-300 rounded w-1/3" />
              <p className="h-4 bg-gray-300 rounded w-1/3 ml-1" />
            </div>
            <p className="h-4 bg-gray-300 rounded w-full mb-1" />
            <p className="h-4 bg-gray-300 rounded w-2/3 mb-2" />
            <div className="flex items-center">
              <p className="h-4 bg-gray-300 rounded w-1/3 my-3" />
              <del>
                <p className="h-4 bg-gray-300 rounded w-1/3 ml-2" />
              </del>
              <div className="ml-auto flex gap-6 items-center">
                <div className="h-4 bg-gray-300 rounded w-6" />
                <div className="h-4 bg-gray-300 rounded w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-72 bg-gray-200 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden font-bcf animate-pulse">
        <div>
          <div className="w-72 h-80 bg-gray-300" />
          <div className="px-4 py-3 w-72">
            <div className="flex items-center mb-2">
              <div className="h-4 bg-gray-300 rounded w-1/3" />
              <p className="h-4 bg-gray-300 rounded w-1/3 ml-1" />
            </div>
            <p className="h-4 bg-gray-300 rounded w-full mb-1" />
            <p className="h-4 bg-gray-300 rounded w-2/3 mb-2" />
            <div className="flex items-center">
              <p className="h-4 bg-gray-300 rounded w-1/3 my-3" />
              <del>
                <p className="h-4 bg-gray-300 rounded w-1/3 ml-2" />
              </del>
              <div className="ml-auto flex gap-6 items-center">
                <div className="h-4 bg-gray-300 rounded w-6" />
                <div className="h-4 bg-gray-300 rounded w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-72 bg-gray-200 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden font-bcf animate-pulse">
        <div>
          <div className="w-72 h-80 bg-gray-300" />
          <div className="px-4 py-3 w-72">
            <div className="flex items-center mb-2">
              <div className="h-4 bg-gray-300 rounded w-1/3" />
              <p className="h-4 bg-gray-300 rounded w-1/3 ml-1" />
            </div>
            <p className="h-4 bg-gray-300 rounded w-full mb-1" />
            <p className="h-4 bg-gray-300 rounded w-2/3 mb-2" />
            <div className="flex items-center">
              <p className="h-4 bg-gray-300 rounded w-1/3 my-3" />
              <del>
                <p className="h-4 bg-gray-300 rounded w-1/3 ml-2" />
              </del>
              <div className="ml-auto flex gap-6 items-center">
                <div className="h-4 bg-gray-300 rounded w-6" />
                <div className="h-4 bg-gray-300 rounded w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonHero;
