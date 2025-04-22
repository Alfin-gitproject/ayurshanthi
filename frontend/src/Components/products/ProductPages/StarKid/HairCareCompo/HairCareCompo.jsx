import React, { useState } from "react";

const HairCareCompo = () => {
  const [activeTab, setActiveTab] = useState("details");
  return (
    <div className="font-bcf">
      <div role="tablist" className="tabs tabs-bordered flex mt-5">
        <button
          role="tab"
          className={`tab text-lg font-semibold ${activeTab === "details" ? "tab-active border-green-600 text-green-600" : ""}`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        {/* <button
            role="tab"
            className={`tab text-lg font-semibold ${activeTab === "how-to-use" ? "tab-active border-green-600 text-green-600" : ""}`}
            onClick={() => setActiveTab("how-to-use")}
          >
            How to use
          </button> */}
      </div>
      <div>
        {activeTab === "details" && (
          <div className="my-4">
            <p className="font-normal text-gray-700 mb-4">
              Discover the ultimate hair care solution with the InHerbz Complete
              Hair Care Combo Kit. This all-in-one kit includes:
            </p>
            <div>
              {/* /* <h2 className="text-2xl font-bold">Contains:</h2> */}
              <ul className="list-disc ml-4 mt-2">
                <li className="mb-1">
                  <strong>InHerbz Natural Hair Oil (200 ML)</strong>
                </li>
                <li className="mb-1">
                  <strong>InHerbz Hair Shampoo (200 ML)</strong>{" "}
                </li>
              </ul>
              <div className="mt-5 ml-0">
                Designed to nourish your hair from root to tip, this combo is
                enriched with keratin protein shield, hydrating your scalp and
                hair while promoting faster hair growth.
              </div>
              <h3 className=" font-bold mt-5">Key Benefits:</h3>
              <ul className="ml-1 list-none mt-2">
                <li className="mb-1 ">
                  <div className="grid grid-cols-[auto_1fr] ">
                    <div className="pr-2">
                      <i className="fa-solid fa-check-to-slot text-emerald-500"></i>
                    </div>
                    <div>
                      Made with cold-pressed extracts and oils for purity and
                      effectiveness.
                    </div>
                  </div>
                </li>
                <li className="mb-1">
                  <div className="grid grid-cols-[auto_1fr] ">
                    <div className="pr-2">
                      <i className="fa-solid fa-check-to-slot text-emerald-500"></i>
                    </div>
                    <div>
                      Deep cleansing shampoo maintains moisture balance.
                    </div>
                  </div>
                </li>
                <li className="mb-1">
                  <div className="grid grid-cols-[auto_1fr] ">
                    <div className="pr-2">
                      <i className="fa-solid fa-check-to-slot text-emerald-500"></i>
                    </div>
                    <div>
                      Suitable for daily use, revitalizing your hair to be
                      strong, shiny, and healthy
                    </div>
                  </div>
                </li>
                <li className="mb-1">
                  <div className="grid grid-cols-[auto_1fr] ">
                    <div className="pr-2">
                      <i className="fa-solid fa-check-to-slot text-emerald-500"></i>
                    </div>
                    <div>
                      Ideal for combating dryness, breakage, and slow hair
                      growth.
                    </div>
                  </div>
                </li>
              </ul>
              <p className="mt-5">
                Experience the benefits of nature with InHerbz and transform
                your hair care routine today! The InHerbz Complete Hair Care
                Combo Kit is your go-to solution for beautiful, resilient hair.
              </p>
              {/* <img
                  className="w-full h-auto rounded-box"
                  src="https://ik.imagekit.io/c1jhxlxiy/hair%20shampoo%20for%20web%20banner%202.jpg?updatedAt=1718732136353"
                  alt="inherbz hair-shampoo contents"
                /> */}
            </div>
          </div>
        )}
        {activeTab === "how-to-use" && (
          <div className="my-4">
            <img
              className="w-full h-auto rounded-box"
              src="https://ik.imagekit.io/c1jhxlxiy/how%20to%20use%20hair%20shampoo.png?updatedAt=1718732253783"
              alt="inherbz hair-shampoo contents"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HairCareCompo;
