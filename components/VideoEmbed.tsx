'use client';

import { motion } from 'framer-motion';

export default function VideoEmbed() {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Watch This 5-Minute Demo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See exactly how our proven system transforms influencers into 6-7 figure earners through owned monetization strategies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Placeholder for YouTube video - replace with actual video URL */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Influencer Monetization Strategy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <p className="text-center text-gray-500 text-sm mt-4">
          * Replace this embed URL with your actual video URL
        </p>
      </div>
    </section>
  );
}
