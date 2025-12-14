'use client';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function QuoteSection() {
  const { scrollY } = useViewportScroll();

  const quote = " It's nice to be important, but it's more important to be nice. ";

  // Create opacity transforms for overall animation
  const quoteOpacity = useTransform(scrollY, [1000, 1400], [0.3, 1]);

  return (
    <section className="relative w-full py-32 px-6 bg-transparent flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Quote Mark */}
          <motion.div className="text-6xl text-cyan-500/30 mb-4">
            &ldquo;
          </motion.div>

          {/* Quote Text with Scroll Animation */}
          <motion.div
            style={{ opacity: quoteOpacity }}
            className="text-3xl md:text-5xl font-bold leading-tight text-gray-400"
          >
            {quote}
          </motion.div>

          {/* Quote Mark */}
          <motion.div className="text-6xl text-cyan-500/30 mt-4 text-right">
            &rdquo;
          </motion.div>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-gray-400 text-sm md:text-base mt-6 text-right"
          >
            &mdash; Developer&apos;s Wisdom
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
