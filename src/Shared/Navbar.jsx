import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-lg px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="rounded-3xl w-[80px]"
            src="/src/assets/Black Kawaii Illustration Gaming Logo.png"
            alt=""
          />
          <Link to="/" className="text-slate-500 text-3xl font-bold">
            AnimeWorld
          </Link>
        </div>

        {/* Menu Button (Mobile) */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}

        <ul
          className={`lg:flex space-x-6 text-slate-600 font-semibold absolute lg:static top-16 left-0 w-full lg:w-auto bg-purple-500 lg:bg-transparent p-4 lg:p-0 transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-sky-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/animelist" className="hover:text-sky-600">
              Anime List
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-sky-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-sky-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Login Button */}
        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md hidden lg:block"
          >
            Login
          </motion.button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
