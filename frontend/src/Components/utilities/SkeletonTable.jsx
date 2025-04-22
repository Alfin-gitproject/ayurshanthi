import React from "react";

const SkeletonTable = () => {
  return (
    <div>
      <div className="relative overflow-x-auto animate-pulse p-11">
        <table className=" max-w-[80vw] min-w-[75vw] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="h-4 bg-gray-200 rounded" />
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="h-4 bg-gray-200 rounded" />
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="h-4 bg-gray-200 rounded" />
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="h-4 bg-gray-200 rounded" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="h-4 bg-gray-200 rounded w-full" />
              </th>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </td>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </td>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="h-4 bg-gray-200 rounded w-full" />
              </th>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </td>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </td>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="h-4 bg-gray-200 rounded w-full" />
              </th>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </td>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </td>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkeletonTable;
