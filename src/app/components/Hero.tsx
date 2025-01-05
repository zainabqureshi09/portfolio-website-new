'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
    <div className="relative bg-gray-900 text-white p-9 flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 pointer-events-none" />
      
      {/* Content */}
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Build Stunning Websites with{' '}
            <span className="text-blue-500">Next.js</span> &{' '}
            <span className="text-purple-500">TailwindCSS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg md:text-xl text-gray-300"
          >
            Fast, responsive, and scalable web applications with modern tools.
          </motion.p>
        
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center lg:mb-0"
        >
          <Image
            src="/sideHero.png"
            alt="Hero Section"
            width={500}
            height={500}
         
          />
        </motion.div>
      </div>
      
    </div>
    <br />
    <br />
    <br />
    <br />
    </>
  );
}
