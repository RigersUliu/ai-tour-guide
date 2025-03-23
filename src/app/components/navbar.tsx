"use client";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Travel Guide</h1>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-gray-400">About</Link></li>
          <li><Link href="/destinations" className="text-white hover:text-gray-400">Destinations</Link></li>
          <li><Link href="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;