import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const AboutHome = () => {
  const { ref } = useInView({ amount: 0.5 });

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
          >
            {" "}
            Ayur Shanthi, established in 1960, stands as a living testament to a
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
       <div className="container mx-auto p-4">
  <h2 className="text-2xl font-bold mb-6 text-white">
    Technology Acquisitions
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
    {/* Card 1: Row 1, Col 1 */}
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src="https://ik.imagekit.io/byaqwirhz/green-smoothie-empty-notepad_23-2148303049.avif?updatedAt=1747217009685"
          alt="Traditional Formulations"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            Traditional Formulations
          </h5>
        </a>
        <p className="mb-3 font-normal text-black">
          Classic preparations crafted according to ancient texts preserved within our 400-year lineage. These formulations maintain precise proportions and preparation methods prescribed by Ayurvedic sages, ensuring their full therapeutic potential and authenticity remain uncompromised
        </p>
      </div>
    </div>

    {/* Card 2: Row 1, Col 2 */}
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src="https://ik.imagekit.io/byaqwirhz/couple-propagating-their-houseplants-as-hobby-together_53876-143253.avif?updatedAt=1747216885248"
          alt="Customised Wellness Solutions"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            Customised Wellness Solutions
          </h5>
        </a>
        <p className="mb-3 font-normal text-black">
          Personalised regimens tailored to individual and specific imbalances based on traditional diagnostic principles. Our practitioners utilise both classical texts and unique methodologies developed through generations to create bespoke wellness plans addressing root causes rather than symptoms.
        </p>
      </div>
    </div>

    {/* Card 3: Row 1, Col 3 */}
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src="https://ik.imagekit.io/byaqwirhz/top-view-tasty-mushroom-soup-with-different-seasonings-dark-purple-desk-soup-seasonings-food-meal_140725-80736.avif?updatedAt=1747216518319"
          alt="Seasonal Remedies"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            Seasonal Remedies
          </h5>
        </a>
        <p className="mb-3 font-normal text-black">
          Specialised formulations aligned with natural and Ayurvedic wisdom. These remedies harmonize body and mind with changing seasonal energies, enhancing resilience and preventing imbalances before they manifest as discomfort.
        </p>
      </div>
    </div>

    {/* Card 4: Row 2, Col 1 */}
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm sm:mt-8">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src="https://ik.imagekit.io/byaqwirhz/elegant-skin-care-banner-design_23-2149480157.avif?updatedAt=1747216352846"
          alt="Preventative Care"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            Preventative Care
          </h5>
        </a>
        <p className="mb-3 font-normal text-black">
          Rooted in the wisdom of Ayurveda, these holistic products are thoughtfully formulated to nourish the body, calm the mind, and uplift the spirit. By embracing time - honored daily rituals, mindful dietary practices, and potent herbal blends such as these preventative approaches help sustain energy, enhance digestion, and support immune strength. Designed to align with nature’s rhythms, they promote balance, vitality, and well-being through every stage of life.
        </p>
      </div>
    </div>

    {/* Card 5: Row 2, Col 2 */}
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm sm:mt-8">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src="https://ik.imagekit.io/byaqwirhz/myimage.png.avif?updatedAt=1747216236104"
          alt="Specialised Therapies"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            Specialised Therapies
          </h5>
        </a>
        <p className="mb-3 font-normal text-black">
          Targeted solutions for specific concerns drawing upon our lineage's repository of specialised knowledge. These therapies combine precise herbal formulations with complementary lifestyle recommendations, offering effective alternatives to conventional approaches for particular wellness challenges.
        </p>
      </div>
    </div>
  </div>
</div>
      </motion.div>
    </div>
  );
};

export default AboutHome;
