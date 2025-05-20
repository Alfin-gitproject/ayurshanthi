import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Mission from "./Mission";

const About = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 font-calibri">
      {/* Hero Section */}
      <section className="relative bg-white py-20 px-6 md:px-16">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 variants={item} className="text-4xl md:text-5xl font-bcf font-bold mb-6">
            The Ancient Art of Healing
          </motion.h1>
          <motion.p variants={item} className="text-lg text-gray-700 leading-relaxed">
            At Ayur Shoppee, we harmoniously blend the profound insights of ancient Ayurveda and
            Jyothisham with contemporary scientific understanding. Our approach honors the time-tested
            wisdom found in rare manuscripts and oral traditions while embracing modern innovations
            that enhance their effectiveness. This unique synthesis creates wellness solutions that are
            both deeply rooted in tradition and perfectly adapted to modern life.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 1: About Ayur Shoppee */}
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 variants={item} className="text-3xl font-bcf font-medium mb-4">
              About Ayur Shoppee
            </motion.h2>
            <motion.p variants={item} className="text-lg mb-4 text-gray-800">
              Ayur Shoppee, under the banner of Ayur Shanthi, established in 1960, carries forward a
              400-year-old legacy rooted in the esteemed Vaidyan Musaliar Madam. Renowned for blending
              ancient Ayurvedic wisdom with Jyothisham, we craft products that harmonise traditional
              knowledge from ancient texts with modern scientific advancements, ensuring authenticity
              and efficacy.
            </motion.p>
            <motion.p variants={item} className="text-lg text-gray-800">
              Headquartered in Kerala, India, Ayur Shoppee is a global online trading leader,
              offering a diverse range of 100% natural products. From wellness and beauty to home and
              auto care, our exclusive online platform, backed by the World Central Digital
              Reservation System (WCDRS), delivers unparalleled convenience and quality to customers
              worldwide.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.img
              variants={item}
              className="rounded-xl w-full h-56 object-cover"
              src="https://ik.imagekit.io/c1jhxlxiy/2148290918.jpg"
              alt="legacy 1"
            />
            <motion.img
              variants={item}
              className="rounded-xl w-full h-56 object-cover"
              src="https://ik.imagekit.io/c1jhxlxiy/2148678040.jpg"
              alt="legacy 2"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Exceed Expectations */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="grid grid-cols-2 gap-4 order-2 lg:order-1"
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.img
              variants={item}
              className="rounded-xl w-full h-56 object-cover"
              src="https://ik.imagekit.io/c1jhxlxiy/2148565383.jpg"
              alt="innovation"
            />
            <motion.img
              variants={item}
              className="rounded-xl w-full h-56 object-cover"
              src="https://ik.imagekit.io/c1jhxlxiy/2149013565.jpg"
              alt="products"
            />
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.h2 variants={item} className="text-3xl font-bcf font-medium mb-4">
              Exceed Your Expectations
            </motion.h2>
            <motion.p variants={item} className="text-lg mb-4 text-gray-800">
              At Ayur Shoppee, our passion drives us to exceed customer expectations. Guided by our
              Managing Director’s commitment to 100% natural products, we ensure safety for humans,
              animals, and the environment, fostering trust through ethical practices.
            </motion.p>
            <motion.p variants={item} className="text-lg mb-4 text-gray-800">
              Proudly “Made in India,” we curate innovative, trendsetting products globally while
              cherishing our heritage. Our unique brands, like Ayur Santhi and Dr. Kalonji, reflect
              our dedication to quality and authenticity, enriching lives with every offering.
            </motion.p>
            <motion.p variants={item} className="text-lg mb-4 text-gray-800">
              Our vibrant culture, rooted in integrity and accountability, empowers our team to
              deliver exceptional value. We operate in harmony with nature, promoting health,
              prosperity, and well-being for all.
            </motion.p>
            <motion.p variants={item} className="text-lg text-gray-800">
              Through our global network, we invite entrepreneurs to join our journey. With
              comprehensive support, including business plans and training, we help establish
              successful Ayur Shoppee outlets worldwide, ensuring shared success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <Mission />
    </div>
  );
};

export default About;
