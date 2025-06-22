import React from "react";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import redux from "../assets/redux.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: node, title: "Node.js", style: "shadow-green-400" },
    { id: 6, src: nextjs, title: "Next.js", style: "shadow-white" },
    { id: 7, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 8, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 9, src: express, title: "Express", style: "shadow-white" },
    { id: 10, src: mongodb, title: "MongoDB", style: "shadow-green-500" },
    { id: 11, src: redux, title: "Redux", style: "shadow-purple-500" },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-black experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full text-gray-900 dark:text-white"
      >
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Experience
          </p>
          <p className="py-6 text-gray-700 dark:text-gray-300">
            Technologies I've worked with in real projects 👇
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-12 text-center py-4 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`bg-white/30 dark:bg-gray-800/50 backdrop-blur-md shadow-lg border border-white/10 dark:border-white/20 hover:border-blue-400 dark:hover:border-cyan-400 duration-300 p-5 rounded-xl ${style}`}
            >
              <img src={src} alt={title} className="w-20 h-20 mx-auto" />
              <p className="mt-4 font-medium text-gray-800 dark:text-white">{title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
