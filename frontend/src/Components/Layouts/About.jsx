import React, { useEffect,  } from "react";
import { motion } from "framer-motion";
import Mission from "./Mission";

const About = () => {
  //const [showMore, setShowMore] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div>
      <section className="bg-gray-100">
        <motion.div
          variants={variants}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center block relative z-20 mx-auto pt-8"
        >
          <motion.h1
            className="text-5xl my-2 text-gray-950 font-bcf font-bold"
            variants={item}
          >
            The Ancient Art of Healing
          </motion.h1>
          <motion.p
            className="text-lg w-full md:w-3/4 mx-auto font-light text-gray-700 font-calibri"
            variants={item}
          >
            At Ayur Shoppee, we harmoniously blend the profound insights of
            ancient Ayurveda and Jyothisham with contemporary scientific
            understanding. Our approach honors the time-tested wisdom found in
            rare manuscripts and oral traditions while embracing modern
            innovations that enhance their effectiveness. This unique synthesis
            creates wellness solutions that are both deeply rooted in tradition
            and perfectly adapted to modern life..
          </motion.p>
        </motion.div>
        <motion.div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
          <motion.div
            variants={variants}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
            className="font-light text-gray-500 sm:text-lg dark:text-gray-400"
          >
            <motion.h2
              variants={item}
              className="mb-4 text-4xl tracking-tight text-gray-900 font-bcf font-medium"
            >
              About Ayur Shoppee
              {/* <span className=" text-red-600 font-bcf">
                The REDSTAM Journey
              </span> */}
            </motion.h2>
            <motion.p
              variants={item}
              className={`mb-4 font-light text-lg font-calibri text-gray-800`}
            >
              Ayur Shoppee, under the banner of Ayur Shanthi, established in
              1960, carries forward a 400-year-old legacy rooted in the esteemed
              Vaidyan Musaliar Madam. Renowned for blending ancient Ayurvedic
              wisdom with Jyothisham, we craft products that harmonise
              traditional knowledge from ancient texts with modern scientific
              advancements, ensuring authenticity and efficacy. Headquartered in
              Kerala, India, Ayur Shoppee is a global online trading leader,
              offering a diverse range of 100% natural products. From wellness
              and beauty to home and auto care, our exclusive online platform,
              backed by the World Central Digital Reservation System (WCDRS),
              delivers unparalleled convenience and quality to customers
              worldwide.
            </motion.p>
            <motion.p
              variants={item}
              className={`mb-4 font-light text-lg font-calibri text-gray-800`}
            >
              Our commitment to holistic health is reflected in every aspect of
              our offerings, from our flagship children's gummy vitamins to our
              adult nutritional supplements. We carefully formulate our products
              under the guidance of renowned healthcare professionals, ensuring
              they are packed with essential nutrients, natural extracts, and
              potent botanicals meticulously sourced from the finest
              ingredients.
            </motion.p>
            {/* <motion.button
              variants={item}
              className="bt relative inline-flex items-center justify-center p-0.5 my-4 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-red-600 group-hover:from-red-700 group-hover:to-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800"
              onClick={() => setShowMore(!showMore)}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-50 text-gray-900  rounded-md group-hover:bg-opacity-0 group-hover:text-white font-calibri">
                Read {!showMore ? "More" : "Less"}
              </span>
            </motion.button> */}
          </motion.div>
          <motion.div
            variants={variants}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            <motion.img
              variants={item}
              className="w-full rounded-lg"
              src="https://ik.imagekit.io/c1jhxlxiy/2148290918.jpg?updatedAt=1715419751215"
              alt="office content 1"
            />
            <motion.img
              variants={item}
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://ik.imagekit.io/c1jhxlxiy/2148678040.jpg?updatedAt=1715420019441"
              alt="office content 2"
            />
          </motion.div>
        </motion.div>
        <motion.div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
          <motion.div
            variants={variants}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            <motion.img
              variants={item}
              className="w-full rounded-lg"
              src="https://ik.imagekit.io/c1jhxlxiy/2148565383.jpg?updatedAt=1715420019771"
              alt="office content 1"
            />
            <motion.img
              variants={item}
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://ik.imagekit.io/c1jhxlxiy/2149013565.jpg?updatedAt=1715420321134"
              alt="office content 2"
            />
          </motion.div>
          <motion.div
            variants={variants}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
            className="font-light text-gray-500 sm:text-lg dark:text-gray-400"
          >
            <motion.h2
              variants={item}
              className="mb-4 text-4xl tracking-tight text-gray-900 font-bcf font-medium"
            >
              Exceed Your Expectations
              {/* <span className=" text-red-600 font-bcf">
                The REDSTAM Journey
              </span> */}
            </motion.h2>
            <motion.p
              variants={item}
              className={`mb-4 font-light text-lg font-calibri text-gray-800`}
            >
              At Ayur Shoppee, our passion drives us to exceed customer
              expectations. Guided by our Managing Director’s commitment to 100%
              natural products, we ensure safety for humans, animals, and the
              environment, fostering trust through ethical practices. Proudly
              “Made in India,” we curate innovative, trendsetting products
              globally while cherishing our heritage. Our unique brands, like
              Ayur Santhi and Dr. Kalonji, reflect our dedication to quality and
              authenticity, enriching lives with every offering. Our vibrant
              culture, rooted in integrity and accountability, empowers our team
              to deliver exceptional value. We operate in harmony with nature,
              promoting health, prosperity, and well-being for all. Through our
              global network, we invite entrepreneurs to join our journey. With
              comprehensive support, including business plans and training, we
              help establish successful Ayur Shoppee outlets worldwide, ensuring
              shared success.
            </motion.p>
            <motion.p
              variants={item}
              className={`mb-4 font-light text-lg font-calibri text-gray-800`}
            >
              Unlike many conventional gummy supplements, our products are free
              from added sugars, artificial flavours, and preservatives,
              ensuring your child receives only the purest nourishment.
            </motion.p>
            <motion.p
              variants={item}
              className={`mb-4 font-light text-lg font-calibri text-gray-800`}
            >
              What sets inHerbz apart is our dedication to merging time-honoured
              Ayurvedic principles with scientifically tested formulas. We
              believe that by harnessing the power of nature and the
              advancements of modern science, we can unlock the true potential
              of holistic well-being for every individual.
            </motion.p>
            <motion.p
              variants={item}
              className={`mb-4 font-light text-lg font-calibri text-gray-800`}
            >
              At inHerbz, we prioritize your health and wellness. Our products
              are free from harmful additives and artificial flavors. Committed
              to sustainability and ethics, we offer pure nourishment you can
              trust for your journey to optimal health.{" "}
            </motion.p>
            {/* <motion.button
              variants={item}
              className="bt relative inline-flex items-center justify-center p-0.5 my-4 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-red-600 group-hover:from-red-700 group-hover:to-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800"
              onClick={() => setShowMore(!showMore)}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-50 text-gray-900  rounded-md group-hover:bg-opacity-0 group-hover:text-white font-calibri">
                Read {!showMore ? "More" : "Less"}
              </span>
            </motion.button> */}
          </motion.div>
        </motion.div>
      </section>
      <Mission />
    </div>
  );
};

export default About;
