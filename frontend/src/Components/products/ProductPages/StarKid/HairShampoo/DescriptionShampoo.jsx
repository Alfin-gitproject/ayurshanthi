import React, { useState } from "react";

const DescriptionShampoo = () => {
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
        <button
          role="tab"
          className={`tab text-lg font-semibold ${activeTab === "how-to-use" ? "tab-active border-green-600 text-green-600" : ""}`}
          onClick={() => setActiveTab("how-to-use")}
        >
          How to use
        </button>
      </div>
      <div>
        {activeTab === "details" && (
          <div className="my-4">
            <p className="font-normal text-gray-700 mb-4">
              Unveil lustrous locks with inHerbz Hair Shampoo, a luxurious blend
              of Keratin, Hibiscus, Argan oil, and Avocado oil that rejuvenates
              and nourishes strands, banishing frizz and dryness while
              maintaining scalp health. Its gentle, paraben-free formula leaves
              hair silky and vibrant. Simply massage into wet hair, rinse, and
              enjoy effortless radiance. Conveniently packed in 200ml bottles
              for on-the-go glamour.
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
                className="w-full h-auto rounded-box"
                src="https://ik.imagekit.io/c1jhxlxiy/hair%20shampoo%20for%20web%20banner%202.jpg?updatedAt=1718732136353"
                alt="inherbz hair-shampoo contents"
              />
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

export default DescriptionShampoo;
