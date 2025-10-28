'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Founder photo */}
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/marc-schultheiss.jpg" 
                  alt="Marc Schultheiss - Agency Scaling Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-black px-6 py-3 rounded-full shadow-lg font-bold">
                Agency Scaling Expert
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Meet Marc Schultheiss
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              I've spent the last 8 years helping social media agencies scale from struggling startups to multi-million dollar businesses using data-driven systems and proven frameworks.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Through our proprietary scaling methodology, I've helped 200+ agencies add $15M+ in monthly recurring revenue, with 92% of clients achieving their revenue goals within 90 days.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-success text-xl font-bold">✓</span>
                <p className="text-gray-700">$15M+ in MRR added for agency clients</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-success text-xl font-bold">✓</span>
                <p className="text-gray-700">92% success rate with agency scaling</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-success text-xl font-bold">✓</span>
                <p className="text-gray-700">Expert consultant to top-tier social media agencies</p>
              </div>
            </div>
            <a
              href="#book-call"
              className="inline-block bg-accent text-black px-8 py-4 rounded-full font-bold hover:bg-accent-dark transition shadow-lg hover:shadow-xl"
            >
              Book Your Agency Scaling Call →
            </a>
          </motion.div>
        </div>

        {/* Credibility Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-black mb-2">8+</div>
            <div className="text-gray-700 font-semibold">Years Agency Experience</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-accent mb-2">200+</div>
            <div className="text-gray-700 font-semibold">Agencies Scaled</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-success mb-2">$15M+</div>
            <div className="text-gray-700 font-semibold">MRR Added</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
