'use client';

import { motion } from 'framer-motion';

export default function SocialProof() {
  const stats = [
    { number: '200+', label: 'Agencies Scaled' },
    { number: '$15M+', label: 'MRR Added' },
    { number: '92%', label: 'Success Rate' },
    { number: '4.9/5', label: 'Client Rating' },
  ];

  const agencyLogos = [
    'SocialFlow Agency',
    'Digital Growth Co',
    'Media Masters',
    'ScaleUp Social',
    'Agency Accelerator',
    'Growth Partners',
    'Social Media Pro',
    'Agency Elite',
  ];

  const clientResults = [
    { agency: 'SocialFlow Agency', result: 'Added $35K MRR in 60 days', before: '$8K MRR', after: '$43K MRR' },
    { agency: 'Digital Growth Co', result: 'Scaled to $50K MRR', before: '$12K MRR', after: '$50K MRR' },
    { agency: 'Media Masters', result: 'Added $28K MRR', before: '$15K MRR', after: '$43K MRR' },
    { agency: 'ScaleUp Social', result: 'Doubled revenue to $40K MRR', before: '$20K MRR', after: '$40K MRR' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Trusted by <span className="text-accent">200+</span> Agency Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our data-driven systems have helped agencies add millions in monthly recurring revenue
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Results */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-black text-center text-black mb-12">
            Real Agency Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-accent/10"
              >
                <div className="text-accent font-bold text-sm mb-2">{result.agency}</div>
                <div className="text-2xl font-black text-black mb-2">{result.result}</div>
                <div className="text-sm text-gray-500 mb-1">Before: {result.before}</div>
                <div className="text-sm font-semibold text-accent">After: {result.after}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Agency Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-8">Trusted by Leading Agencies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {agencyLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="text-sm font-semibold text-gray-700 text-center">{logo}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl shadow-lg p-8 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-lg mb-2">Proprietary Systems</h3>
              <p className="text-gray-600 text-sm">
                Data-driven frameworks used by top agencies
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Fast Implementation</h3>
              <p className="text-gray-600 text-sm">
                First results in 30-45 days
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">💎</div>
              <h3 className="font-bold text-lg mb-2">Proven Track Record</h3>
              <p className="text-gray-600 text-sm">
                Tested with 200+ agencies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
