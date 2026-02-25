import { useEffect, useState } from "react";
import logo from "../assets/AnishaLogo.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-6 px-6 backdrop-blur-lg bg-white/30 dark:bg-neutral-900/30 border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300">

      <img src={logo} alt="logo" className="w-10" />

      <div className="flex items-center gap-6 text-2xl text-neutral-700 dark:text-neutral-300">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition" />
        </a>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-500 transition" />
        </a>

        <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
        <FaTwitter className="hover:text-sky-400 transition cursor-pointer" />

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="ml-4 text-xl">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;