'use client'
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer, SiFigma } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 className="text-orange-600 w-16 h-16" />,
      title: 'HTML',
      description: 'Building modern and accessible web structures.',
    },
    {
      icon: <FaCss3Alt className="text-blue-600 w-16 h-16" />,
      title: 'CSS',
      description: 'Designing visually appealing and responsive layouts.',
    },
    {
      icon: <FaJs className="text-yellow-500 w-16 h-16" />,
      title: 'JavaScript',
      description: 'Creating interactive web experiences.',
    },
    {
      icon: <SiTypescript className="text-blue-500 w-16 h-16" />,
      title: 'TypeScript',
      description: 'Writing scalable, type-safe applications.',
    },
    {
      icon: <FaReact className="text-cyan-500 w-16 h-16" />,
      title: 'React.js',
      description: 'Building component-driven user interfaces.',
    },
    {
      icon: <SiNextdotjs className="text-black w-16 h-16" />,
      title: 'Next.js',
      description: 'Developing performant, SEO-friendly applications.',
    },
    {
      icon: <SiTailwindcss className="text-teal-400 w-16 h-16" />,
      title: 'Tailwind CSS',
      description: 'Rapid UI design with utility-first CSS.',
    },
    {
      icon: <SiFramer className="text-pink-500 w-16 h-16" />,
      title: 'Framer Motion',
      description: 'Adding animations and interactions to websites.',
    },
    {
      icon: <SiFigma className="text-purple-600 w-16 h-16" />,
      title: 'Figma',
      description: 'Designing and prototyping user interfaces.',
    },
  ];

  return (
    <div className=" py-16 min-h-screen">
      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold text-center mb-12 text-blue-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3">{skill.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">{skill.title}</h2>
            <p className="text-gray-500 text-center">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
