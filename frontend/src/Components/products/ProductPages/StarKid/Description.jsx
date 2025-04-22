import React, { useState } from "react";

const Description = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="font-bcf">
      <div role="tablist" className="tabs tabs-bordered flex mt-5">
        <button
          role="tab"
          className={`tab text-lg font-semibold ${activeTab === "details" ? "tab-active border-green-700 text-green-700" : ""}`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          role="tab"
          className={`tab text-lg font-semibold ${activeTab === "how-to-use" ? "tab-active border-green-700 text-green-700" : ""}`}
          onClick={() => setActiveTab("how-to-use")}
        >
          How to use
        </button>
      </div>
      <div>
        {activeTab === "details" && (
          <div className="my-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              The Delicious Way to{" "}
              <span className="text-green-600">Nourish Your Superstar!</span>
            </h5>
            <p className="font-normal text-gray-700 mb-4">
              Give your little ones the gift of complete nutrition with our
              irresistible inHerbz STAR KID Vitamin Gummies.
            </p>
            <p className="font-normal text-gray-700">
              Packed with essential vitamins and minerals, these tasty gummies
              are a parent's secret weapon for ensuring their child's overall
              growth and development.
            </p>
            <div className="m-5">
              {/* <h2 className="text-2xl font-bold">Contains:</h2>
              <ul className="list-disc ml-5 mt-2">
                  <li className="mb-1"><strong>Vitamin E</strong> - as much as 10 oranges</li>
                  <li className="mb-1"><strong>Vitamin B6</strong> - as much as 2 cups of chickpeas</li>
                  <li className="mb-1"><strong>Vitamin A</strong> - as much as 1 cup of sweet potatoes</li>
                  <li className="mb-1"><strong>Vitamin C</strong> - more than 2 oranges</li>
                  <li className="mb-1"><strong>Folate</strong> - as much as 1 cup of lentils</li>
              </ul>
              <div className="font-bold mt-5">Also Contains:</div>
              <ul className="list-disc ml-5 mt-2">
                  <li className="mb-1">Vitamin D3</li>
                  <li className="mb-1">Vitamin B12</li>
                  <li className="mb-1">Vitamin B9</li>
                  <li className="mb-1">Zinc</li>
                  <li className="mb-1">Curcumin</li>
                  <li className="mb-1">DHA</li>
              </ul> */}
              <img
                className="w-full h-auto"
                src="https://ik.imagekit.io/c1jhxlxiy/contains%202-Photoroom.webp?updatedAt=1718386331337"
                alt="star kid contents"
              />
            </div>
          </div>
        )}
        {activeTab === "how-to-use" && (
          <div className="my-4">
            <img
              className="w-full h-auto rounded-box"
              src="https://ik.imagekit.io/c1jhxlxiy/how%20to%20%20use.png?updatedAt=1718387022695"
              alt="star kid instruction"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
