'use client';

import { motion } from 'framer-motion';
// import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
  
<>
      {/* Content */}
      <div className="container text-2xl text-purple-600 mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Image */}
        {/* <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 mb-10 lg:mb-0 flex p-12 justify-center"
        >
          <Image
            src="/about.jpg" // Replace with your image path
            alt="About"
            className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            width={200}
            height={200}
          />
        </motion.div> */}

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-center lg:text-left"
        ><br /><br /> <br />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-customBlue">Me</span>
          </h2>
          <p className="text-2xl text-customBlue mb-6">
            I am passionate about building web applications that are fast, responsive, and scalable. With a focus on modern technologies like Next.js and TailwindCSS, I aim to deliver exceptional user experiences.
          </p>
          <p className="text-2xl text-purple-500 mb-6">
            I am creating dynamic, interactive designs and robust frontend systems. Whether you&apos;re looking to build a portfolio, an e-commerce platform, or a custom web application, I can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-4 py-2 bg-blue-900 active:bg-blue-950 hover:bg-blue-500 text-white text-sm font-medium rounded-lg shadow-lg transition duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <br />
      </>
  );
}
