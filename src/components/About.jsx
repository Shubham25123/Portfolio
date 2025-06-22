import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-100 via-white to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white about"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-extrabold inline border-b-4 border-blue-500">
            About
          </p>
        </div>

        <p className="text-lg md:text-xl leading-relaxed mt-2">
          I’m a <span className="font-semibold text-blue-600 dark:text-yellow-400">detail-oriented</span> and passionate developer with strong skills in:
          <span className="font-medium"> HTML, CSS, JavaScript, React.js, and Tailwind CSS</span>.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-4">
          I enjoy building sleek user interfaces, participating in hackathons, and contributing to
          <span className="font-semibold text-blue-500 dark:text-green-400"> real-world projects</span> through freelance and self-made apps.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-4">
          My focus is on writing <span className="italic text-pink-600 dark:text-pink-400">clean, maintainable code</span>, continuously learning new technologies, and solving meaningful problems.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
