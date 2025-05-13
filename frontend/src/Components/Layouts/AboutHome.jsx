import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const AboutHome = () => {
  const { ref, } = useInView({ amount: 0.5 });

  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
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
 return (
  <div className="bg-white">
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      className="text-center block relative z-20 mx-auto pt-10 pb-3"
      ref={ref}
    >
      <div className="bg-gray-100 p-4 rounded-lg mx-auto md:w-3/4">
        <motion.h1
          className="text-3xl md:text-5xl my-2 text-gray-900 px-2 font-bcf font-bold"
          variants={item}
        >
         The Sacred Legacy of Vaidyan Musaliar Wisdom
        </motion.h1>
        <motion.p
          className="text-lg w-full md:w-full mx-auto font-light p-3 text-gray-700 font-calibri"
          variants={item}
        >   Ayur Shanthi, established in 1960, stands as a living testament to a
        profound legacy spanning over 400 years. Rooted in the venerable
        traditions of Vaidyan musaliar madam, our practices represent an
        unbroken lineage of authentic Ayurvedic wisdom passed down through
        generations. This sacred knowledge, preserved through centuries of
        dedicated scholarship and practice, now finds new expression through
        Ayur Shoppee.
        </motion.p>
      </div>
      <motion.button variants={item} viewport={{ once: true }}>
        <Link
          to="about"
          className="relative inline-flex items-center justify-center p-0.5 my-4 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 to-green-500 group-hover:from-green-500 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 text-gray-900 hover:text-gray-50 rounded-md group-hover:bg-opacity-0 font-calibri">
            Read More
          </span>
        </Link>
      </motion.button>
      
    </motion.div>
  </div>
);
};

export default AboutHome;
