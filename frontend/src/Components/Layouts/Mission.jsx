import React from "react";
import { Link } from "react-router-dom";
import GardientButton from "../utilities/GardientButton";
import { motion } from "framer-motion";
const Mission = () => {
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
  return (
    <div className="bg-gradient-to-b from-gray-100 via-slate-50 to-gray-300">
      <motion.div
        variants={variants}
        initial={"hidden"}
        whileInView={"show"}
        class="text-center block relative z-20 mx-auto pt-8"
      >
        <motion.h1
          variants={item}
          class="text-5xl font-light my-2 text-gray-900 font-bcf"
        >
          Our Vision
        </motion.h1>
        <motion.p
          variants={item}
          className="text-lg w-full md:w-3/4 mx-auto font-light p-3 text-gray-800 font-calibri"
        >
          To be the global leader in the renaissance of Unani and Ayurvedic
          medicines, pioneering innovative research and development that
          elevates these ancient healing traditions to new heights of efficacy,
          safety, and accessibility, earning the admiration of healthcare
          professionals and individuals worldwide.
        </motion.p>
        <motion.h1
          variants={item}
          class="text-5xl font-light my-2 text-gray-900 font-bcf"
        >
          Our Mission
        </motion.h1>
        <motion.p
          variants={item}
          className="text-lg w-full md:w-3/4 mx-auto font-light p-3 text-gray-800 font-calibri"
        >
          Our mission is to harness the profound wisdom of Unani and Ayurvedic
          medicinal systems, blending time-honoured knowledge with cutting-edge
          scientific advancements. We dedicate ourselves to the relentless
          pursuit of innovation, crafting effective, reliable, and safe herbal
          formulations that empower humanity's journey towards longer,
          healthier, and more fulfilling lives. Through our unwavering
          commitment to excellence, we strive to unite tradition and modernity,
          offering holistic wellness solutions that resonate with individuals
          across the globe.
        </motion.p>
        <motion.div variants={item} className="py-4">
          <Link to="/">
            <GardientButton text={"Shop Now"} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mission;
