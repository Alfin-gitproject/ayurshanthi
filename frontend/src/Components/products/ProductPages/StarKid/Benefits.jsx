import React from "react";

const features = [
  {
    imgSrc:
      "https://ik.imagekit.io/1ebcdgswb/inherbz%20icons/immune.png?updatedAt=1718214024475",
    title: "Immunity Booster",
    description:
      "Fortified with Vitamin C, Turmeric, Vitamin B12, and Zinc, our gummies strengthen your child's natural defences against illnesses.",
    altText: "immune",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/1ebcdgswb/inherbz%20icons/health.png?updatedAt=1718214024295",
    title: "Comprehensive Nutrition",
    description:
      "From immunity and bone health to brain function, eyesight, and radiant hair and skin, our gummies offer complete nourishment in every bite.",
    altText: "health",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/1ebcdgswb/inherbz%20icons/no-sugar.png?updatedAt=1718214024423",
    title: "No Added Sugar, Pure Delight",
    description:
      "Indulge guilt-free! Our gummies are free from added sugars, providing essential nutrients in a delicious treat.",
    altText: "no-sugar",
  },
];

const features2 = [
  {
    imgSrc:
      "https://ik.imagekit.io/1ebcdgswb/inherbz%20icons/mindset.png?updatedAt=1718214024391",
    title: "Brainpower & Bone Strength",
    description:
      "With Vitamin B9 and Vitamin D, these gummies nourish growing minds, promote bone health, and support antibody production for optimal physical and cognitive development.",
    altText: "Brainpower",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/1ebcdgswb/inherbz%20icons/tasty.png?updatedAt=1718214024454",
    title: "Vibrant Flavors, Endless Smiles",
    description:
      "With vibrant colours and irresistible fruity flavours, our gummies delight even the fussiest eaters, turning mealtimes into joyful experiences.",
    altText: "tasty",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/1ebcdgswb/inherbz%20icons/customer-service.png?updatedAt=1718214024366",
    title: "Chewable Nutrition Made Easy",
    description:
      "Say goodbye to vitamin struggles! Our chewable gummies ensure your child eagerly awaits their daily dose of nourishment.",
    altText: "Chewable Nutrition Made Easy",
  },
];

const Benefits = () => {
  return (
    <div>
      <div className=" py-8 sm:py-16">
        <div className="xl:container m-auto px-6 text-gray-500 md:px-4">
          <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-green-50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
              >
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src={feature.imgSrc}
                    className="w-12"
                    width={512}
                    height={512}
                    alt={feature.altText}
                  />
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-green-600">
                      {feature.title}
                    </h5>
                    <p className="text-sm text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
            {features2.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-green-50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
              >
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src={feature.imgSrc}
                    className="w-12"
                    width={512}
                    height={512}
                    alt={feature.altText}
                  />
                  <div className="space-y-2">
                    <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-green-600">
                      {feature.title}
                    </h5>
                    <p className="text-sm text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          className="w-full h-auto rounded-box"
          src="https://ik.imagekit.io/c1jhxlxiy/benefits%20inherbz%20new.webp?updatedAt=1718387171469"
          alt="star kid benefits"
        />
      </div>
    </div>
  );
};

export default Benefits;
