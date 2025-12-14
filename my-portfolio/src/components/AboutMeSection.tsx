'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutMeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      data-section="aboutme"
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-10 px-6 -mt-10"
    >
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-6"
          >
            {/* Title */}
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl md:text-7xl font-black text-white mb-2">
                About <span className="text-cyan-500">Me</span>
              </h1>
              <div className="w-24 h-1.5 bg-cyan-500 rounded-full"></div>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Hello, I&apos;m <span className="text-cyan-400">Pee</span>
              </h2>
            </motion.div>

            {/* Skills Tag */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full px-4 py-2">
                <span className="text-cyan-400 text-sm font-semibold">
                  College of Computing Student • UX/UI Design • Web Design • Frontend Developer
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                {/* Add your personal introduction text here */}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="pt-6"
            >
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/50"
              >
                Explore More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative h-full flex items-center justify-center"
            style={{
              perspective: '1200px',
            }}
          >
            {/* Floating Background Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"
            ></motion.div>

            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-sm"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 211, 238, 0.5)',
                    '0 0 40px rgba(34, 211, 238, 0.8)',
                    '0 0 20px rgba(34, 211, 238, 0.5)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-3xl"
              ></motion.div>

              {/* Image */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/50"
              >
                <Image
                  src="/aboutme.jpg"
                  alt="About Me"
                  width={400}
                  height={500}
                  priority
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                ></motion.div>
              </motion.div>

              {/* Floating Elements Around Image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 border border-cyan-500/20 rounded-3xl pointer-events-none"
              ></motion.div>

              {/* Corner Accents */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full blur-md opacity-60"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full blur-md opacity-60"
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
