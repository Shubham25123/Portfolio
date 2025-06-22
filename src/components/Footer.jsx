import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white text-center py-6 relative">
      <div className="flex flex-col items-center space-y-4">
        {/* Footer Text */}
        <p className="text-sm sm:text-base">
          &copy; {currentYear} — All rights reserved.
          
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Shubham25123"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-sharma75/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shubhamthakur25123@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            <HiOutlineMail />
          </a>
        </div>

        {/* Tech Stack */}
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Built with <span className="text-cyan-400 font-semibold">React</span> &{" "}
          <span className="text-blue-400 font-semibold">Tailwind CSS</span>
        </p>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute right-5 bottom-5 bg-cyan-500 hover:bg-cyan-600 p-2 rounded-full transition duration-300"
        title="Back to top"
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
