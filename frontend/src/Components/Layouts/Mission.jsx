import React from "react";
import { Link } from "react-router-dom";
import GardientButton from "../utilities/GardientButton";
import { motion } from "framer-motion";

const Mission = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gray-100">
      {/* Load Poppins font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>

      {/* Commitment and Uniqueness Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-2xl md:text-3xl font-semibold text-gray-700 font-poppins mb-6 text-center"
            variants={itemVariants}
          >
            Our Commitment
          </motion.h1>
          <motion.p
            className="text-base md:text-lg font-light leading-relaxed text-gray-600 font-sans mb-8"
            variants={itemVariants}
          >
            Every product we offer embodies our unwavering dedication to
            authenticity and excellence. Our formulations are meticulously crafted
            according to classical Ayurvedic texts, with ingredients sourced and
            processed following traditional methods that preserve their inherent
            healing properties. We take pride in maintaining the purity and
            integrity of these ancient formulations while ensuring they meet the
            highest standards of modern quality assurance.
          </motion.p>
          <motion.h1
            className="text-2xl md:text-3xl font-semibold text-gray-700 font-poppins mb-6 text-center"
            variants={itemVariants}
          >
            Our Uniqueness
          </motion.h1>
          <motion.p
            className="text-base md:text-lg font-light leading-relaxed text-gray-600 font-sans mb-8"
            variants={itemVariants}
          >
            What distinguishes Ayur Shoppee is our direct connection to an unbroken
            tradition of healing knowledge. Our formulations aren't mere
            approximations of ancient recipes—they are the living continuation of
            practices documented in rare manuscripts preserved by the Vaidyan
            musaliar madam lineage. This authentic connection to source wisdom
            ensures that when you choose our products, you access the full potency
            and sophistication of a healing tradition refined over centuries.
          </motion.p>
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <Link to="/">
              <GardientButton text="Shop Now" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Mission;