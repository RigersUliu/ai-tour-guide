"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <nav className="bg-gray-900 p-5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">AI-Tour-Logo</h1>
        <ul className="hidden md:flex space-x-15"> {/* Always visible on desktop */}
          <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
          <li><Link href="/map" className="text-white hover:text-gray-400">Destinations</Link></li>
        </ul>
        <button
          className="text-white md:hidden" // Show only on mobile
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Sliding Panel for Mobile */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`flex flex-col items-center justify-center h-full bg-gray-900 transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <h1 className="text-white text-2xl font-bold">AI-Tour-Logo</h1>
          {/* Close Button Inside the Panel */}
          <button
            className="text-white mb-4 self-end mr-4"
            onClick={toggleMenu}
          >
            {/* X Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="space-y-4">
            <li><Link href="/" className="text-white hover:text-gray-400" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/map" className="text-white hover:text-gray-400" onClick={toggleMenu}>Destinations</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;