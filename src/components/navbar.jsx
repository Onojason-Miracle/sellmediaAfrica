import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="max-w-6xl mx-auto px-4" >
        <div className="flex justify-between items-center py-4">
          <div>
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-semibold text-black text-lg">Hand</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1" id='web'>
            {/* Primary Navbar items */}
            <Link to="/" className="py-2 px-2 font-semibold transition duration-300 home">Home</Link>
            <Link to="/about" className="py-2 px-2 text-[#5A6675] font-semibold transition duration-300">About Us</Link>
            <Link to="/services" className="py-2 px-2 text-[#5A6675] font-semibold transition duration-300">Services</Link>
            <Link to="/blog" className="py-2 px-2 text-[#5A6675] font-semibold transition duration-300">Blog</Link>
            <Link to="/contact" className="py-2 px-2 text-[#5A6675] font-semibold transition duration-300">Contact Us</Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {/* Get started button */}
            <Link to="/get-started" className="gs-bg py-3 px-6 text-white font-semibold shadow-md transition duration-300">Get Started</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center" id='mobile'>
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" >
          <Link to="/" className="block py-2 px-4 text-sm home">Home</Link>
          <Link to="/about" className="block py-2 px-4 text-sm ">About Us</Link>
          <Link to="/services" className="block py-2 px-4 text-sm ">Services</Link>
          <Link to="/blog" className="block py-2 px-4 text-sm ">Blog</Link>
          <Link to="/contact" className="block py-2 px-4 text-sm ">Contact Us</Link>
          <Link to="/get-started" className="block py-2 px-4 text-sm text-white shadow-md transition duration-300 gs-bg">Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
