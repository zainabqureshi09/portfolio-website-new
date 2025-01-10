'use client';

import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div  className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[75%] max-w-4xl bg-transparent text-blue-500 flex items-center justify-between px-6 py-3 rounded-full shadow-lg backdrop-blur-md">
     
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500 hover:text-blue-800 transition duration-300">
            Zainab Ayaz
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={link.path} className="text-lg hover:text-blue-600 transition duration-300">
                  {link.name}
             </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-blue-500 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>


      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute flex justify-center top-16 transform -translate-x-1/2 bg-white w-[75%] max-w-xl rounded-lg shadow-lg md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="text-lg text-blue-500 hover:text-blue-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
