"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Profile Image */}
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/about.jpg"
          alt="Profile"
          height={100}
          width={100}
          quality={100}
          className="h-40 w-40 rounded-full shadow-lg"
        />
        <h1 className="text-3xl text-purple-700 font-bold text-center">
          Hi, I am Zainab, nice to meet you!
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-3xl text-center mt-6 space-y-4 px-4">
        <p className="text-lg text-blue-600 leading-relaxed">
          I am passionate about building web applications that are fast,
          responsive, and scalable. With a focus on modern technologies like
          Next.js and TailwindCSS, I aim to deliver exceptional user
          experiences.
        </p>
        <p className="text-lg text-blue-600 leading-relaxed">
          I specialize in creating dynamic, interactive designs and robust
          frontend systems. Whether you&apos;re looking to build a portfolio, an
          e-commerce platform, or a custom web application, I can help.
        </p>
      </div>

      
          </div>
  );
}
