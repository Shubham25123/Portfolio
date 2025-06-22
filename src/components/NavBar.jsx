import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [scrolled, setScrolled] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div
      className={`fixed w-full z-50 px-6 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "h-16 bg-white/80 dark:bg-black/80 shadow-md backdrop-blur-lg" : "h-20 bg-transparent"
      }`}
    >
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">MyPortfolio</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link
              to={link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active-link"
              className="relative cursor-pointer capitalize font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition-all duration-200"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Toggle Button (Dark/Light) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="hidden md:block text-xl p-2 ml-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:scale-110 transition"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Hamburger */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden z-50 cursor-pointer text-gray-800 dark:text-white text-2xl"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-300 dark:from-black dark:to-gray-900 flex flex-col justify-center items-center">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setNav(false)}
              className="capitalize py-6 text-3xl text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-400 transition-all"
            >
              {link}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-10 text-3xl p-3 rounded-full bg-gray-300 dark:bg-gray-700 hover:scale-110 transition"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
