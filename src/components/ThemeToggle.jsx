import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-xl shadow-md transition-all duration-300 z-50"
    >
      {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
    </button>
  );
};

export default ThemeToggle;
