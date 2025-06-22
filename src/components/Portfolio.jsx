import React from "react";
import { motion } from "framer-motion";

import ecommerce from "../assets/portfolio/ecommerce.png";
import internmanagement from "../assets/portfolio/internmanagement.png";
import obys from "../assets/portfolio/obys.png";
import todo from "../assets/portfolio/todo.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce,
      link: "https://zapzup-store.vercel.app/",
      repo: "https://github.com/Shubham25123/zap",
    },
    {
      id: 2,
      src: internmanagement,
      link: "https://intern-system-r5wj.vercel.app/",
      repo: "https://github.com/Shubham25123/intern_system",
    },
    {
      id: 3,
      src: obys,
      link: "https://obys-shubham.vercel.app/",
      repo: "https://github.com/Shubham25123/obys-shubham",
    },
    {
      id: 4,
      src: todo,
      link: "https://advance-todo-rosy.vercel.app/",
      repo: "https://github.com/Shubham25123/Advance-todo",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-100 via-white to-gray-300 dark:from-black dark:via-gray-900 dark:to-gray-800 w-full text-gray-900 dark:text-white md:py-20 portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-600 dark:text-gray-300">
            Check out some of my highlighted projects 👇
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {portfolios.map(({ id, src, link, repo }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="shadow-lg hover:shadow-2xl duration-300 bg-white dark:bg-gray-800 rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt="project"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="flex items-center justify-around p-4 bg-white dark:bg-gray-900">
                <button
                  onClick={() => window.open(link, "_blank")}
                  className="px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 duration-300"
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(repo, "_blank")}
                  className="px-5 py-2 rounded-md border-2 border-blue-400 text-blue-500 dark:text-cyan-400 hover:bg-blue-500 hover:text-white hover:scale-105 duration-300"
                >
                  GitHub
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
