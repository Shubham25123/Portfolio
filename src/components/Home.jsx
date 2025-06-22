import React from "react";
import HeroImage from "../assets/image.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-[#1f2937] dark:via-[#111827] dark:to-[#0f172a] text-gray-900 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-6"
      >
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4">
            I’m a MERN Stack Web Developer 💻
          </h2>
          <p className="text-gray-600 dark:text-gray-300 py-4 max-w-md mx-auto md:mx-0">
            Passionate about building beautiful & scalable web apps using React,
            Tailwind CSS, Node, Express & MongoDB. I also enjoy creating sleek
            UI/UX with modern tools like Next.js & Framer Motion.
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-105 duration-300 shadow-lg cursor-pointer"
            >
              View Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
        >
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-full w-60 md:w-80 shadow-2xl hover:scale-105 duration-300 object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
